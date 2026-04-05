import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn } from 'typeorm';

@Entity('sales_enquiry')
export class SalesEnquiry {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  fullName: string;

  @Column()
  email: string;

  @Column()
  phone: string;

  @Column()
  pickupLocation: string;

  @Column()
  dropLocation: string;

  @Column()
  pickupDate: string;

  @Column()
  returnDate: string;

  @Column({ nullable: true })
  selectedCar: string;

  @Column({ nullable: true })
  car_id: number;

  @Column({ default: 'unchecked' })
  enquiry_status: string;

  @CreateDateColumn()
  createdAt: Date;
}
