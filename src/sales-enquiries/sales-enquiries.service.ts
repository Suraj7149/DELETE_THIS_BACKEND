import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { SalesEnquiry } from './entities/sales-enquiry.entity';

@Injectable()
export class SalesEnquiriesService {
  constructor(
    @InjectRepository(SalesEnquiry)
    private salesEnquiryRepository: Repository<SalesEnquiry>,
  ) {}

  async create(data: Partial<SalesEnquiry>): Promise<SalesEnquiry> {
    const newEnquiry = this.salesEnquiryRepository.create(data);
    return await this.salesEnquiryRepository.save(newEnquiry);
  }

  findAll(): Promise<SalesEnquiry[]> {
    return this.salesEnquiryRepository.find();
  }

  async updateSelectedCar(id: number, selectedCar: string): Promise<SalesEnquiry | null> {
    await this.salesEnquiryRepository.update(id, { selectedCar });
    return this.salesEnquiryRepository.findOneBy({ id });
  }
}
