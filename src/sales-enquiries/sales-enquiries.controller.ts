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

  @Patch(':id/select-car')
  updateSelectedCar(
    @Param('id') id: string,
    @Body('selectedCar') selectedCar: string,
  ) {
    return this.salesEnquiriesService.updateSelectedCar(+id, selectedCar);
  }
}
