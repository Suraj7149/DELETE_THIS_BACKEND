import { Injectable, OnModuleInit } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CabsRentalCard } from './entities/cabs-rental-card.entity';

@Injectable()
export class CabsRentalCardService implements OnModuleInit {
  constructor(
    @InjectRepository(CabsRentalCard)
    private cabsRentalCardRepository: Repository<CabsRentalCard>,
  ) {}

  async onModuleInit() {
    await this.seed();
  }

  async seed() {
    const count = await this.cabsRentalCardRepository.count();
    if (count === 0) {
      const defaultProviders = [
        {
          name: 'RoadRunner Rentals',
          code: 'RR',
          rating: 4.2,
          description: 'One of the leading car rental services offering vehicles for every journey.',
          hq: 'Phoenix, Arizona',
          fleet: '500+',
          locations: '200',
          phone: '1-800-555-0199',
        },
        {
          name: 'Zoom Car Rentals',
          code: 'ZC',
          rating: 4.4,
          description: 'Popular rental service with a wide range of vehicles for all occasions.',
          hq: 'San Francisco, California',
          fleet: '600+',
          locations: '180',
          phone: '1-800-777-0123',
        },
        {
          name: 'DriveAway Rentals',
          code: 'DA',
          rating: 4.1,
          description: 'Third largest car rental company known for competitive pricing.',
          hq: 'Chicago, Illinois',
          fleet: '400+',
          locations: '150',
          phone: '1-800-888-9999',
        },
        {
          name: 'Happy Travels Rentals',
          code: 'HT',
          rating: 4.5,
          description: 'Leading domestic rental service known for exceptional customer care and no hidden fees.',
          hq: 'Austin, Texas',
          fleet: '350+',
          locations: '120',
          phone: '1-800-444-5555',
        },
        {
          name: 'Coastal Car Rentals',
          code: 'CC',
          rating: 4.6,
          description: 'Major rental service focused on coastal regions with a reputation for reliability.',
          hq: 'Miami, Florida',
          fleet: '300+',
          locations: '100',
          phone: '1-800-252-1234',
        },
        {
          name: 'Urban Drive Rentals',
          code: 'UD',
          rating: 4.3,
          description: 'Affordable urban rental service known for stylish vehicles and flexible options.',
          hq: 'New York City, New York',
          fleet: '250+',
          locations: '90',
          phone: '1-800-555-6789',
        },
      ];

      await this.cabsRentalCardRepository.save(defaultProviders);
    }
  }

  findAll(): Promise<CabsRentalCard[]> {
    return this.cabsRentalCardRepository.find({ order: { id: 'ASC' } });
  }

  create(data: Partial<CabsRentalCard>): Promise<CabsRentalCard> {
    const card = this.cabsRentalCardRepository.create(data);
    return this.cabsRentalCardRepository.save(card);
  }

  async update(id: number, data: Partial<CabsRentalCard>): Promise<CabsRentalCard | null> {
    await this.cabsRentalCardRepository.update(id, data);
    return this.cabsRentalCardRepository.findOne({ where: { id } });
  }

  async remove(id: number): Promise<void> {
    await this.cabsRentalCardRepository.delete(id);
  }
}
