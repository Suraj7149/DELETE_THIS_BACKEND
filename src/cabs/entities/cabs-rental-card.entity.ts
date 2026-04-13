import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('cabs_rentals_card')
export class CabsRentalCard {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  code: string;

  @Column({ type: 'decimal', precision: 3, scale: 1 })
  rating: number;

  @Column({ type: 'text' })
  description: string;

  @Column()
  hq: string;

  @Column()
  fleet: string;

  @Column()
  locations: string;

  @Column()
  phone: string;
}
