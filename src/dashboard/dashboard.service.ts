import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Car } from '../cars/entities/car.entity';
import { SalesEnquiry } from '../sales-enquiries/entities/sales-enquiry.entity';

@Injectable()
export class DashboardService {
  constructor(
    @InjectRepository(Car)
    private carsRepository: Repository<Car>,
    @InjectRepository(SalesEnquiry)
    private salesEnquiryRepository: Repository<SalesEnquiry>,
  ) {}

  async getSummary() {
    // 1. Total Enquiries
    const totalEnquiries = await this.salesEnquiryRepository.count();

    // 2. Total Cars
    const totalCars = await this.carsRepository.count();

    // 3. Car Types Breakdown
    const carTypesRaw = await this.carsRepository
      .createQueryBuilder('car')
      .select('car.car_type', 'name')
      .addSelect('COUNT(car.car_id)', 'count')
      .groupBy('car.car_type')
      .getRawMany();

    // Mapping raw result to a cleaner format
    const carTypes = carTypesRaw.map(type => ({
      name: type.name, // e.g. SUV, ELECTRIC
      count: parseInt(type.count, 10),
    }));

    return {
      totalEnquiries,
      totalCars,
      carTypes,
    };
  }
}
