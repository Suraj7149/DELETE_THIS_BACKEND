import { Controller, Get, Post, Body, Param, Query, UseInterceptors, UploadedFile, BadRequestException, Patch } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { CarsService } from './cars.service';
import { AwsS3Service } from './aws-s3.service';

@Controller('cars')
export class CarsController {
  constructor(
    private readonly carsService: CarsService,
    private readonly awsS3Service: AwsS3Service,
  ) { }

  @Get()
  findAll(
    @Query('page') page: number = 1,
    @Query('limit') limit: number = 8,
    @Query('search') search?: string,
  ) {
    return this.carsService.findAll(+page, +limit, search);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.carsService.findOne(+id);
  }

  @Post('upload')
  @UseInterceptors(FileInterceptor('image'))
  async uploadImage(@UploadedFile() file: Express.Multer.File) {
    if (!file) {
      throw new BadRequestException('No image file provided');
    }
    const imageUrl = await this.awsS3Service.uploadFile(file);
    return { imageUrl };
  }

  @Post()
  create(@Body() createCarDto: any) {
    return this.carsService.create(createCarDto);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCarDto: any) {
    return this.carsService.update(+id, updateCarDto);
  }
}
