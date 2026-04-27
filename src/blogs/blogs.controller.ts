import { Controller, Get, Post, Patch, Delete, Param, Body, UseInterceptors, UploadedFile, Query } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { BlogsService } from './blogs.service';
import { Blog } from './entities/blog.entity';
import { AwsS3Service } from '../cars/aws-s3.service';

@Controller('blogs')
export class BlogsController {
  constructor(
    private readonly blogsService: BlogsService,
    private readonly awsS3Service: AwsS3Service,
  ) {}

  @Get()
  async findAll(): Promise<Blog[]> {
    return this.blogsService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<Blog> {
    return this.blogsService.findOne(+id);
  }

  @Post('upload')
  @UseInterceptors(FileInterceptor('image'))
  async uploadImage(
    @UploadedFile() file: Express.Multer.File,
    @Query('title') title: string,
  ) {
    const folder = 'blogs';
    const imageUrl = await this.awsS3Service.uploadFile(file, folder);
    return { imageUrl };
  }

  @Post()
  async create(@Body() data: Partial<Blog>): Promise<Blog> {
    return this.blogsService.create(data);
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() data: Partial<Blog>): Promise<Blog> {
    return this.blogsService.update(+id, data);
  }

  @Delete(':id')
  async remove(@Param('id') id: string): Promise<void> {
    return this.blogsService.remove(+id);
  }
}
