import { Controller, Post, Body, Get, Patch, Param } from '@nestjs/common';
import { SalesEnquiriesService } from './sales-enquiries.service';
import { SalesEnquiry } from './entities/sales-enquiry.entity';

@Controller('sales-enquiries')
export class SalesEnquiriesController {
  constructor(private readonly salesEnquiriesService: SalesEnquiriesService) {}

  @Post()
  create(@Body() payload: Partial<SalesEnquiry>) {
    return this.salesEnquiriesService.create(payload);
  }

  @Get()
  findAll() {
    return this.salesEnquiriesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.salesEnquiriesService.findOne(+id);
  }

  @Patch(':id/select-car')
  updateCarSelection(
    @Param('id') id: string,
    @Body('selectedCar') selectedCar: string,
    @Body('car_id') car_id: number,
  ) {
    return this.salesEnquiriesService.updateCarSelection(+id, selectedCar, car_id);
  }

  @Patch(':id/status')
  updateStatus(
    @Param('id') id: string,
    @Body('status') status: string,
  ) {
    return this.salesEnquiriesService.updateStatus(+id, status);
  }
}
