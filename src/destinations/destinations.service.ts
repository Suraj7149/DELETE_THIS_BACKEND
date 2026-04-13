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
        { destination_name: "Tokyo", image_path: "/assets/sample.jpg", ratings: 4.5, review: 120, price: 399, country_name: "Japan", destination_region: "Asia", deals: 15, total_viewing: 20 },
        { destination_name: "Bangkok", image_path: "/assets/sample.jpg", ratings: 4.7, review: 250, price: 349, country_name: "Thailand", destination_region: "Asia", deals: 12, total_viewing: 18 },
        { destination_name: "Singapore", image_path: "/assets/sample.jpg", ratings: 4.8, review: 180, price: 520, country_name: "Singapore", destination_region: "Asia", deals: 8, total_viewing: 15 },
        { destination_name: "Dubai", image_path: "/assets/sample.jpg", ratings: 4.6, review: 300, price: 590, country_name: "UAE", destination_region: "Asia", deals: 10, total_viewing: 22 },
        { destination_name: "Hong Kong", image_path: "/assets/sample.jpg", ratings: 4.4, review: 142, price: 379, country_name: "China", destination_region: "Asia", deals: 6, total_viewing: 12 },
        { destination_name: "Seoul", image_path: "/assets/sample.jpg", ratings: 4.5, review: 197, price: 710, country_name: "South Korea", destination_region: "Asia", deals: 14, total_viewing: 19 },
        { destination_name: "Bali", image_path: "/assets/sample.jpg", ratings: 4.9, review: 528, price: 469, country_name: "Indonesia", destination_region: "Asia", deals: 20, total_viewing: 35 },
        { destination_name: "Kathmandu", image_path: "/assets/sample.jpg", ratings: 4.6, review: 231, price: 349, country_name: "Nepal", destination_region: "Asia", deals: 5, total_viewing: 10 },
        { destination_name: "Paris", image_path: "/assets/sample.jpg", ratings: 4.8, review: 842, price: 499, country_name: "France", destination_region: "Europe", deals: 18, total_viewing: 28 },
        { destination_name: "London", image_path: "/assets/sample.jpg", ratings: 4.7, review: 654, price: 529, country_name: "UK", destination_region: "Europe", deals: 11, total_viewing: 16 },
        { destination_name: "Rome", image_path: "/assets/sample.jpg", ratings: 4.9, review: 712, price: 549, country_name: "Italy", destination_region: "Europe", deals: 13, total_viewing: 21 },
        { destination_name: "Barcelona", image_path: "/assets/sample.jpg", ratings: 4.7, review: 342, price: 519, country_name: "Spain", destination_region: "Europe", deals: 9, total_viewing: 14 },
        { destination_name: "New York", image_path: "/assets/sample.jpg", ratings: 4.8, review: 950, price: 650, country_name: "USA", destination_region: "North America", deals: 25, total_viewing: 45 },
        { destination_name: "Toronto", image_path: "/assets/sample.jpg", ratings: 4.6, review: 410, price: 490, country_name: "Canada", destination_region: "North America", deals: 12, total_viewing: 22 },
        { destination_name: "Mexico City", image_path: "/assets/sample.jpg", ratings: 4.5, review: 380, price: 340, country_name: "Mexico", destination_region: "North America", deals: 18, total_viewing: 30 },
        { destination_name: "Sydney", image_path: "/assets/sample.jpg", ratings: 4.9, review: 620, price: 580, country_name: "Australia", destination_region: "Oceania", deals: 14, total_viewing: 33 },
        { destination_name: "Auckland", image_path: "/assets/sample.jpg", ratings: 4.7, review: 310, price: 510, country_name: "New Zealand", destination_region: "Oceania", deals: 8, total_viewing: 17 },
        { destination_name: "Rio de Janeiro", image_path: "/assets/sample.jpg", ratings: 4.8, review: 730, price: 420, country_name: "Brazil", destination_region: "South America", deals: 30, total_viewing: 55 },
        { destination_name: "Buenos Aires", image_path: "/assets/sample.jpg", ratings: 4.6, review: 420, price: 380, country_name: "Argentina", destination_region: "South America", deals: 15, total_viewing: 24 },
        { destination_name: "Cape Town", image_path: "/assets/sample.jpg", ratings: 4.8, review: 580, price: 450, country_name: "South Africa", destination_region: "Africa", deals: 22, total_viewing: 38 },
        { destination_name: "Cairo", image_path: "/assets/sample.jpg", ratings: 4.5, review: 490, price: 320, country_name: "Egypt", destination_region: "Africa", deals: 10, total_viewing: 26 }
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
