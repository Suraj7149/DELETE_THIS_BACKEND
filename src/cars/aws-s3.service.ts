import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { S3Client, PutObjectCommand } from '@aws-sdk/client-s3';
import { v4 as uuidv4 } from 'uuid';
import * as path from 'path';

@Injectable()
export class AwsS3Service {
  private readonly s3Client: S3Client;
  private readonly bucketName: string;
  private readonly region: string;

  constructor(private readonly configService: ConfigService) {
    this.region = this.configService.get<string>('AWS_REGION') || this.configService.get<string>('AWS_DEFAULT_REGION') || 'us-east-1';
    this.bucketName = this.configService.get<string>('AWS_S3_BUCKET') || 'your-bucket-name';

    const s3Config: any = {
      region: this.region,
    };

    const accessKeyId = this.configService.get<string>('AWS_ACCESS_KEY_ID');
    const secretAccessKey = this.configService.get<string>('AWS_SECRET_ACCESS_KEY');

    if (accessKeyId && secretAccessKey) {
      s3Config.credentials = {
        accessKeyId,
        secretAccessKey,
      };
    }

    this.s3Client = new S3Client(s3Config);
  }

  async uploadFile(file: Express.Multer.File): Promise<string> {
    const ext = path.extname(file.originalname);
    const uniqueFilename = `cars/${uuidv4()}${ext}`;

    const accessKeyId = this.configService.get<string>('AWS_ACCESS_KEY_ID');
    const secretAccessKey = this.configService.get<string>('AWS_SECRET_ACCESS_KEY');

    // Proceed with AWS S3 upload if keys are provided
    if (accessKeyId && secretAccessKey) {
      const command = new PutObjectCommand({
        Bucket: this.bucketName,
        Key: uniqueFilename,
        Body: file.buffer,
        ContentType: file.mimetype,
      });

      try {
        await this.s3Client.send(command);
        return `https://${this.bucketName}.s3.${this.region}.amazonaws.com/${uniqueFilename}`;
      } catch (error) {
        console.error('Error uploading file to S3:', error);
        throw new InternalServerErrorException('Failed to upload image to S3');
      }
    } else {
      // Local Fallback: Save directly to the Next.js frontend's public directory
      try {
        const fs = require('fs');
        
        // Define path to the NextJS public directory
        const uploadDir = path.join(process.cwd(), '..', 'car-rental', 'public', 'assets', 'cars');
        const filePath = path.join(uploadDir, `${uniqueFilename.split('/')[1]}`);

        // Ensure directory exists
        if (!fs.existsSync(uploadDir)) {
          fs.mkdirSync(uploadDir, { recursive: true });
        }

        // Write the file
        fs.writeFileSync(filePath, file.buffer);
        
        // Return the relative public path that Next.js will serve automatically
        return `/assets/cars/${uniqueFilename.split('/')[1]}`;
      } catch (error) {
        console.error('Error saving file locally:', error);
        throw new InternalServerErrorException('Failed to save image locally');
      }
    }
  }
}
