import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CabCity } from './entities/cab-city.entity';
import { CabCitiesService } from './cab-cities.service';
import { CabCitiesController } from './cab-cities.controller';

@Module({
  imports: [TypeOrmModule.forFeature([CabCity])],
  providers: [CabCitiesService],
  controllers: [CabCitiesController],
  exports: [CabCitiesService],
})
export class CabCitiesModule {}
