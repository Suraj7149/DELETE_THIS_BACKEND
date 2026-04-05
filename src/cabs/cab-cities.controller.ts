import { Controller, Get, Param, NotFoundException } from '@nestjs/common';
import { CabCitiesService } from './cab-cities.service';
import { CabCity } from './entities/cab-city.entity';

@Controller('cab-cities')
export class CabCitiesController {
  constructor(private readonly cabCitiesService: CabCitiesService) {}

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
}
