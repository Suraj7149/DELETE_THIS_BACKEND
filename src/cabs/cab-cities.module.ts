import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CabCity } from './entities/cab-city.entity';
import { CabsRentalCard } from './entities/cabs-rental-card.entity';
import { CabCitiesService } from './cab-cities.service';
import { CabCitiesController } from './cab-cities.controller';
import { CabsRentalCardService } from './cabs-rental-card.service';
import { CabsRentalCardController } from './cabs-rental-card.controller';
import { CarsModule } from '../cars/cars.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([CabCity, CabsRentalCard]),
    CarsModule,
  ],
  providers: [CabCitiesService, CabsRentalCardService],
  controllers: [CabCitiesController, CabsRentalCardController],
  exports: [CabCitiesService, CabsRentalCardService],
})
export class CabCitiesModule {}
