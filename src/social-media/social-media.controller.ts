import { Controller, Get, Post, Patch, Delete, Param, Body, UseInterceptors, UploadedFile, Query } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { SocialMediaService } from './social-media.service';
import { SocialMedia } from './entities/social-media.entity';
import { AwsS3Service } from '../cars/aws-s3.service';

@Controller('social-media')
export class SocialMediaController {
  constructor(
    private readonly socialMediaService: SocialMediaService,
    private readonly awsS3Service: AwsS3Service,
  ) {}

  @Get()
  async findAll(): Promise<SocialMedia[]> {
    return this.socialMediaService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<SocialMedia> {
    return this.socialMediaService.findOne(+id);
  }

  @Post('upload')
  @UseInterceptors(FileInterceptor('image'))
  async uploadImage(
    @UploadedFile() file: Express.Multer.File,
    @Query('title') title: string,
  ) {
    const folder = 'social-media';
    const imageUrl = await this.awsS3Service.uploadFile(file, folder);
    return { imageUrl };
  }

  @Post()
  async create(@Body() data: Partial<SocialMedia>): Promise<SocialMedia> {
    return this.socialMediaService.create(data);
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() data: Partial<SocialMedia>): Promise<SocialMedia> {
    return this.socialMediaService.update(+id, data);
  }

  @Delete(':id')
  async remove(@Param('id') id: string): Promise<void> {
    return this.socialMediaService.remove(+id);
  }
}
