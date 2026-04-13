import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CarsService } from './cars.service';
import { CarsController } from './cars.controller';
import { Car } from './entities/car.entity';

import { AwsS3Service } from './aws-s3.service';

@Module({
  imports: [TypeOrmModule.forFeature([Car])],
  controllers: [CarsController],
  providers: [CarsService, AwsS3Service],
  exports: [AwsS3Service],
})
export class CarsModule {}
