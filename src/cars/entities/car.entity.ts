import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('cars')
export class Car {
  @PrimaryGeneratedColumn({ name: 'car_id' })
  car_id: number;

  @Column({ name: 'car_name' })
  name: string;

  @Column({ name: 'car_image' })
  image: string;

  @Column({ name: 'car_type' })
  category: string; // Used for filters, e.g. ELECTRIC, SUV

  @Column({ name: 'special_tag', nullable: true })
  specialTag: string; // e.g. "Today's special offer!"

  @Column({ name: 'rating', type: 'decimal', precision: 2, scale: 1, default: 0.0 })
  rating: number;

  @Column({ name: 'reviews', default: 0 })
  reviews: number;

  @Column({ name: 'seats' })
  seats: number;

  @Column({ name: 'doors' })
  doors: number;

  @Column({ name: 'bags' })
  bags: number;

  @Column({ name: 'transmission' })
  transmission: string;

  @Column({ name: 'mileage' })
  mileage: string;

  @Column({ name: 'fuel' })
  fuel: string;

  @Column('simple-array', { name: 'features' })
  features: string[];

  @Column({ name: 'price_per_day', type: 'decimal', precision: 10, scale: 2 })
  pricePerDay: number;

  @Column({ name: 'is_todays_special', default: false })
  isTodaysSpecial: boolean;

  @Column({ name: 'supplier', nullable: true })
  supplier: string;

  @Column({ name: 'available_pickup_location', type: 'text', nullable: true })
  availablePickupLocation: string; // Comma separated for now
}
