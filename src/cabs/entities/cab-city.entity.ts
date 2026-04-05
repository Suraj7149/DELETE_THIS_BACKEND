import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('cab_cities')
export class CabCity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true })
  slug: string;

  @Column()
  name: string;

  @Column({ type: 'json' })
  hero: {
    title: string;
    description: string;
    image: string;
  };

  @Column()
  bannerTitle: string;

  @Column({ type: 'json' })
  infoSection: {
    title: string;
    description: string[];
    whyRentTitle: string;
    benefits: string[];
    image: string;
  };

  @Column({ type: 'json' })
  countries: {
    name: string;
    image: string;
    buttonText: string;
  }[];

  @Column({ type: 'json' })
  blogTips: {
    title: string;
    description: string;
    image: string;
  }[];

  @Column({ type: 'json' })
  faqs: {
    question: string;
    answer: string;
  }[];
}
