import { Controller, Get, Post, Patch, Delete, Body, Param } from '@nestjs/common';
import { LocationsService } from './locations.service';

@Controller('locations')
export class LocationsController {
  constructor(private readonly locationsService: LocationsService) {}

  @Get()
  findAll() {
    return this.locationsService.findAll();
  }

  @Post()
  create(@Body('name') name: string) {
    return this.locationsService.create(name);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body('name') name: string) {
    return this.locationsService.update(+id, name);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.locationsService.remove(+id);
  }
}
