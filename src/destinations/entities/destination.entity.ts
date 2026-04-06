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
  destination_region: string;

  @Column()
  image_path: string;

  @Column()
  deals: number;

  @Column('float')
  ratings: number;

  @Column()
  review: number;

  @Column()
  price: number;

  @Column()
  total_viewing: number;
}
