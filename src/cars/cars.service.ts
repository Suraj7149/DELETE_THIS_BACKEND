import { Injectable, OnModuleInit } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Car } from './entities/car.entity';

@Injectable()
export class CarsService implements OnModuleInit {
  constructor(
    @InjectRepository(Car)
    private carsRepository: Repository<Car>,
  ) { }

  async onModuleInit() {
    const count = await this.carsRepository.count();
    if (count === 0) {
      const initialCars: Partial<Car>[] = [
        {
          name: "Toyota Yaris or similar",
          image: "/assets/Toyota_yaris.png",
          category: "ELECTRIC",
          rating: 4.5,
          reviews: 125,
          seats: 5,
          doors: 2,
          bags: 1,
          transmission: "Manual",
          mileage: "Unlimited",
          fuel: "Full to Full",
          features: ["Free Cancellation", "Pay at Pickup"],
          pricePerDay: 25.00,
          isTodaysSpecial: false,
          availablePickupLocation: "Delhi,Mumbai,Oman,Los Angeles,Dubai,Bangalore,Pune,Hyderabad,Chennai,Kolkata"
        },
        {
          name: "Honda Civic or similar",
          image: "/assets/Honda_civic.png",
          category: "SPORTS",
          rating: 4.7,
          reviews: 175,
          seats: 5,
          doors: 4,
          bags: 2,
          transmission: "Automatic",
          mileage: "Unlimited",
          fuel: "Full to Full",
          features: ["Free Cancellation", "Full Insurance"],
          pricePerDay: 35.00,
          isTodaysSpecial: false,
          supplier: "Avis",
          availablePickupLocation: "Delhi,Mumbai,Oman,Los Angeles,Dubai,Bangalore,Pune,Hyderabad,Chennai,Kolkata"
        },
        {
          name: "Toyota RAV4 or similar",
          image: "/assets/Toyota_RAV4.png",
          category: "SUV",
          rating: 4.8,
          reviews: 275,
          seats: 5,
          doors: 4,
          bags: 3,
          transmission: "Automatic",
          mileage: "Unlimited",
          fuel: "Full to Full",
          features: ["Free Cancellation", "Pay at Pickup"],
          pricePerDay: 55.00,
          isTodaysSpecial: false,
          supplier: "Budget",
          availablePickupLocation: "Delhi,Mumbai,Oman,Los Angeles,Dubai,Bangalore,Pune,Hyderabad,Chennai,Kolkata"
        },
        {
          name: "BMW 5 Series or similar",
          image: "/assets/BMW_5.png",
          category: "LUXURY",
          rating: 4.9,
          reviews: 320,
          seats: 5,
          doors: 4,
          bags: 2,
          transmission: "Automatic",
          mileage: "Unlimited",
          fuel: "Full to Full",
          features: ["Free Cancellation", "Full Insurance"],
          pricePerDay: 95.00,
          isTodaysSpecial: false,
          supplier: "National",
          availablePickupLocation: "Delhi,Mumbai,Oman,Los Angeles,Dubai,Bangalore,Pune,Hyderabad,Chennai,Kolkata"
        },
        {
          name: "Chrysler Pacifica or similar",
          image: "/assets/Chrysler_Pacifica.png",
          category: "TRUCKS",
          rating: 4.6,
          reviews: 150,
          seats: 7,
          doors: 4,
          bags: 4,
          transmission: "Automatic",
          mileage: "Unlimited",
          fuel: "Full to Full",
          features: ["Free Cancellation", "Pay at Pickup"],
          pricePerDay: 75.00,
          isTodaysSpecial: false,
          supplier: "Alamo",
          availablePickupLocation: "Delhi,Mumbai,Oman,Los Angeles,Dubai,Bangalore,Pune,Hyderabad,Chennai,Kolkata"
        },
        {
          name: "Jeep Grand Cherokee or similar",
          image: "/assets/Jeep_Grand.png",
          category: "SUV",
          rating: 4.7,
          reviews: 190,
          seats: 5,
          doors: 4,
          bags: 3,
          transmission: "Automatic",
          mileage: "Unlimited",
          fuel: "Full to Full",
          features: ["Free Cancellation", "Full Insurance"],
          pricePerDay: 65.00,
          isTodaysSpecial: false,
          supplier: "Enterprise",
          availablePickupLocation: "Delhi,Mumbai,Oman,Los Angeles,Dubai,Bangalore,Pune,Hyderabad,Chennai,Kolkata"
        },
        {
          name: "Volkswagen",
          image: "/assets/todays_special.png",
          category: "ELECTRIC",
          rating: 4.4,
          reviews: 85,
          seats: 5,
          doors: 4,
          bags: 1,
          transmission: "Automatic transmission",
          mileage: "Unlimited mileage",
          fuel: "Same model swap",
          features: ["Free Cancellation", "Airport Pickup"],
          pricePerDay: 28.00,
          isTodaysSpecial: true,
          supplier: "Exclusive",
          availablePickupLocation: "Delhi,Mumbai,Oman,Los Angeles,Dubai,Bangalore,Pune,Hyderabad,Chennai,Kolkata"
        }
      ];

      await this.carsRepository.save(initialCars);
      console.log('Seeded 7 cars successfully');
    }
  }

  findAll(): Promise<Car[]> {
    return this.carsRepository.find();
  }

  findOne(id: number): Promise<Car | null> {
    return this.carsRepository.findOne({ where: { car_id: id } });
  }

  async create(createCarDto: Partial<Car>): Promise<Car> {
    const car = this.carsRepository.create(createCarDto);
    return this.carsRepository.save(car);
  }
}
