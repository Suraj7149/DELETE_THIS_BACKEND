import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SalesEnquiriesService } from './sales-enquiries.service';
import { SalesEnquiriesController } from './sales-enquiries.controller';
import { SalesEnquiry } from './entities/sales-enquiry.entity';

@Module({
  imports: [TypeOrmModule.forFeature([SalesEnquiry])],
  controllers: [SalesEnquiriesController],
  providers: [SalesEnquiriesService],
})
export class SalesEnquiriesModule {}
