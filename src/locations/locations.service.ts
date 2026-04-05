import { Injectable, OnModuleInit } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Location } from './entities/location.entity';

@Injectable()
export class LocationsService implements OnModuleInit {
  constructor(
    @InjectRepository(Location)
    private locationRepository: Repository<Location>,
  ) {}

  async onModuleInit() {
    await this.seed();
  }

  async seed() {
    const defaultLocations = [
      'Mumbai',
      'Delhi',
      'Bangalore',
      'Hyderabad',
      'Ahmedabad',
      'Chennai',
      'Kolkata',
      'Pune',
      'Jaipur',
      'Lucknow',
    ];

    for (const name of defaultLocations) {
      const exists = await this.locationRepository.findOne({ where: { name } });
      if (!exists) {
        await this.locationRepository.save({ name });
      }
    }
  }

  async findAll(): Promise<Location[]> {
    return this.locationRepository.find({
      order: { name: 'ASC' },
    });
  }
}
