import { Controller, Get, Post, Body, Param, Query, UseInterceptors, UploadedFile, BadRequestException, Patch, Delete } from '@nestjs/common';
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
    @Query('limit') limit: number = 100,
    @Query('search') search?: string,
    @Query('brand') brand?: string,
  ) {
    return this.carsService.findAll(+page, +limit, search, brand);
  }
旋

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.carsService.findOne(+id);
  }

  @Post('upload')
  @UseInterceptors(FileInterceptor('image', {
    limits: {
      fileSize: 6 * 1024 * 1024, // 6MB
    },
    fileFilter: (req, file, cb) => {
      if (!file.mimetype.match(/\/(jpg|jpeg|png|webp)$/)) {
        return cb(new BadRequestException('Only image files (jpg, jpeg, png, webp) are allowed!'), false);
      }
      cb(null, true);
    },
  }))
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

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.carsService.remove(+id);
  }
}
