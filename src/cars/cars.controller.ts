import { Controller, Get, Post, Body, Param, Query } from '@nestjs/common';
import { CarsService } from './cars.service';

@Controller('cars')
export class CarsController {
  constructor(private readonly carsService: CarsService) { }

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

  @Post()
  create(@Body() createCarDto: any) {
    return this.carsService.create(createCarDto);
  }
}
