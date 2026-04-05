import { Controller, Get } from '@nestjs/common';
import { DestinationsService } from './destinations.service';

@Controller('destinations')
export class DestinationsController {
  constructor(private readonly destinationsService: DestinationsService) {}

  @Get()
  findAllDestinations() {
    return this.destinationsService.findAllDestinations();
  }

  @Get('popular')
  findAllPopularDestinations() {
    return this.destinationsService.findAllPopularDestinations();
  }
}
