import { Controller, Get, Post, Patch, Delete, Body, Param, UseInterceptors, UploadedFile } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { DestinationsService } from './destinations.service';
import { Destination } from './entities/destination.entity';
import { AwsS3Service } from '../cars/aws-s3.service';

@Controller('destinations')
export class DestinationsController {
  constructor(
    private readonly destinationsService: DestinationsService,
    private readonly awsS3Service: AwsS3Service,
  ) {}

  @Get()
  findAllDestinations() {
    return this.destinationsService.findAllDestinations();
  }

  @Post('upload')
  @UseInterceptors(FileInterceptor('image'))
  async uploadImage(@UploadedFile() file: Express.Multer.File) {
    const imageUrl = await this.awsS3Service.uploadFile(file, 'destinations');
    return { imageUrl };
  }

  @Post()
  create(@Body() data: Partial<Destination>) {
    return this.destinationsService.create(data);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() data: Partial<Destination>) {
    return this.destinationsService.update(+id, data);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.destinationsService.remove(+id);
  }

  @Get('popular')
  findAllPopularDestinations() {
    return this.destinationsService.findAllPopularDestinations();
  }

  @Post('popular')
  createPopularRoute(@Body('route_name') route_name: string) {
    return this.destinationsService.createPopularRoute(route_name);
  }

  @Patch('popular/:id')
  updatePopularRoute(@Param('id') id: string, @Body('route_name') route_name: string) {
    return this.destinationsService.updatePopularRoute(+id, route_name);
  }

  @Delete('popular/:id')
  removePopularRoute(@Param('id') id: string) {
    return this.destinationsService.removePopularRoute(+id);
  }
}
