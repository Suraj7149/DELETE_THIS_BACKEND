import { Controller, Get, Post, Patch, Delete, Param, Body, Query, NotFoundException, UseInterceptors, UploadedFile } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { CabCitiesService } from './cab-cities.service';
import { CabCity } from './entities/cab-city.entity';
import { AwsS3Service } from '../cars/aws-s3.service';

@Controller('cab-cities')
export class CabCitiesController {
  constructor(
    private readonly cabCitiesService: CabCitiesService,
    private readonly awsS3Service: AwsS3Service,
  ) {}

  @Get()
  async findAll(): Promise<CabCity[]> {
    return this.cabCitiesService.findAll();
  }

  @Get(':slug')
  async findOne(@Param('slug') slug: string): Promise<CabCity> {
    const city = await this.cabCitiesService.findBySlug(slug);
    if (!city) {
      throw new NotFoundException(`City with slug ${slug} not found`);
    }
    return city;
  }

  @Post('upload')
  @UseInterceptors(FileInterceptor('image'))
  async uploadImage(
    @UploadedFile() file: Express.Multer.File,
    @Query('slug') slug: string,
  ) {
    const folder = `${slug}/images`;
    const imageUrl = await this.awsS3Service.uploadFile(file, folder);
    return { imageUrl };
  }

  @Post()
  async create(@Body() data: Partial<CabCity>): Promise<CabCity> {
    return this.cabCitiesService.create(data);
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() data: Partial<CabCity>): Promise<CabCity | null> {
    return this.cabCitiesService.update(+id, data);
  }

  @Delete(':id')
  async remove(@Param('id') id: string): Promise<void> {
    return this.cabCitiesService.remove(+id);
  }
}
