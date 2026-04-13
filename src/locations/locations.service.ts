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

  async create(name: string): Promise<Location> {
    const location = this.locationRepository.create({ name });
    return this.locationRepository.save(location);
  }

  async update(id: number, name: string): Promise<Location | null> {
    await this.locationRepository.update(id, { name });
    return this.locationRepository.findOne({ where: { id } });
  }

  async remove(id: number): Promise<void> {
    await this.locationRepository.delete(id);
  }
}
