import { Controller, Get, Post, Patch, Delete, Body, Param } from '@nestjs/common';
import { CabsRentalCardService } from './cabs-rental-card.service';
import { CabsRentalCard } from './entities/cabs-rental-card.entity';

@Controller('cabs-rental-cards')
export class CabsRentalCardController {
  constructor(private readonly cabsRentalCardService: CabsRentalCardService) {}

  @Get()
  findAll() {
    return this.cabsRentalCardService.findAll();
  }

  @Post()
  create(@Body() data: Partial<CabsRentalCard>) {
    return this.cabsRentalCardService.create(data);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() data: Partial<CabsRentalCard>) {
    return this.cabsRentalCardService.update(+id, data);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.cabsRentalCardService.remove(+id);
  }
}
