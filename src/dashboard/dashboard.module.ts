import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DashboardController } from './dashboard.controller';
import { DashboardService } from './dashboard.service';
import { Car } from '../cars/entities/car.entity';
import { SalesEnquiry } from '../sales-enquiries/entities/sales-enquiry.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Car, SalesEnquiry])],
  controllers: [DashboardController],
  providers: [DashboardService],
})
export class DashboardModule {}
