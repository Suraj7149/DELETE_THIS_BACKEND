import { Injectable, OnModuleInit } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Destination } from './entities/destination.entity';
import { PopularDestination } from './entities/popular-destination.entity';

@Injectable()
export class DestinationsService implements OnModuleInit {
  constructor(
    @InjectRepository(Destination)
    private destinationsRepository: Repository<Destination>,
    @InjectRepository(PopularDestination)
    private popularDestinationsRepository: Repository<PopularDestination>,
  ) {}

  async onModuleInit() {
    await this.seed();
  }

  async seed() {
    try {
      await this.destinationsRepository.query('DELETE FROM destinations');
    } catch(e) {}
    
    const existingDestinations = await this.destinationsRepository.count();
    if (existingDestinations === 0) {
      const initialDestinations = [
        { destination_name: "Tokyo", image_path: "/assets/sample.jpg", ratings: 4.5, review: 120, price: 399, country_name: "Japan", destination_region: "Asia", deals: 15, total_viewing: 20 }
      ];
      await this.destinationsRepository.save(initialDestinations);
    }

    const existingPopular = await this.popularDestinationsRepository.count();
    if (existingPopular === 0) {
      const initialPopularRoutes = [
        "Affordable Cars in New York", "Affordable Cars in Los Angeles", "Affordable Cars in Miami", "Affordable Cars in Chicago",
        "Affordable Cars in Las Vegas", "Affordable Cars in San Francisco", "Affordable Cars in Seattle", "Affordable Cars in Boston",
        "Affordable Cars in Orlando", "Affordable Cars in Denver", "Affordable Cars in Houston", "Affordable Cars in Phoenix",
        "Affordable Cars in Tokyo", "Affordable Cars in Dubai", "Affordable Cars in Sydney", "Affordable Cars in Rome",
        "Affordable Cars in Barcelona", "Affordable Cars in Amsterdam", "Affordable Cars in Bangkok", "Affordable Cars in Singapore",
        "Affordable Cars in Hong Kong", "Affordable Cars in London", "Affordable Cars in Mexico City", "Affordable Cars in Madrid",
        "Affordable Cars in Athens", "Affordable Cars in Istanbul", "Affordable Cars in Dublin", "Affordable Cars in Mumbai",
        "Affordable Cars in Berlin", "Affordable Cars in Paris", "Affordable Cars in Manila", "Affordable Cars in Sao Paulo",
        "Affordable Cars in Nairobi", "Affordable Cars in Lisbon", "Affordable Cars in Vienna", "Affordable Cars in Copenhagen",
        "Affordable Cars in Stockholm", "Affordable Cars in Seoul", "Affordable Cars in Prague", "Affordable Cars in Budapest"
      ].map(route => ({ route_name: route }));
      
      await this.popularDestinationsRepository.save(initialPopularRoutes);
    }
  }

  findAllDestinations() {
    return this.destinationsRepository.find();
  }

  async create(data: Partial<Destination>) {
    const destination = this.destinationsRepository.create(data);
    return this.destinationsRepository.save(destination);
  }

  async update(id: number, data: Partial<Destination>) {
    await this.destinationsRepository.update(id, data);
    return this.destinationsRepository.findOne({ where: { destinations_id: id } });
  }

  async remove(id: number) {
    await this.destinationsRepository.delete(id);
  }

  findAllPopularDestinations() {
    return this.popularDestinationsRepository.find();
  }

  async createPopularRoute(route_name: string) {
    const route = this.popularDestinationsRepository.create({ route_name });
    return this.popularDestinationsRepository.save(route);
  }

  async updatePopularRoute(id: number, route_name: string) {
    await this.popularDestinationsRepository.update(id, { route_name });
    return this.popularDestinationsRepository.findOne({ where: { id } });
  }

  async removePopularRoute(id: number) {
    await this.popularDestinationsRepository.delete(id);
  }
}
