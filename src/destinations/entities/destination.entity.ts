import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('destinations')
export class Destination {
  @PrimaryGeneratedColumn()
  destinations_id: number;

  @Column()
  destination_name: string;

  @Column()
  country_name: string;

  @Column()
  image: string;

  @Column()
  deals: number;

  @Column('float')
  rating: number;

  @Column()
  reviews: number;

  @Column()
  pricing: number;

  @Column()
  viewing: number;
}
