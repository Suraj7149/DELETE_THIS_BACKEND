import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DestinationsService } from './destinations.service';
import { DestinationsController } from './destinations.controller';
import { Destination } from './entities/destination.entity';
import { PopularDestination } from './entities/popular-destination.entity';
import { CarsModule } from '../cars/cars.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([Destination, PopularDestination]),
    CarsModule
  ],
  controllers: [DestinationsController],
  providers: [DestinationsService],
  exports: [DestinationsService],
})
export class DestinationsModule {}
