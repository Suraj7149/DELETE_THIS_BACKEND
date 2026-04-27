import { SocialMediaService } from './social-media.service';
import { SocialMedia } from './entities/social-media.entity';
import { AwsS3Service } from '../cars/aws-s3.service';
export declare class SocialMediaController {
    private readonly socialMediaService;
    private readonly awsS3Service;
    constructor(socialMediaService: SocialMediaService, awsS3Service: AwsS3Service);
    findAll(): Promise<SocialMedia[]>;
    findOne(id: string): Promise<SocialMedia>;
    uploadImage(file: Express.Multer.File, title: string): Promise<{
        imageUrl: string;
    }>;
    create(data: Partial<SocialMedia>): Promise<SocialMedia>;
    update(id: string, data: Partial<SocialMedia>): Promise<SocialMedia>;
    remove(id: string): Promise<void>;
}
