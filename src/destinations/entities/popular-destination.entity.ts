import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('popular_destinations')
export class PopularDestination {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  route_name: string;
}
