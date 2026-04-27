import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn } from 'typeorm';

@Entity('blogs')
export class Blog {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column({ type: 'text', nullable: true })
  subTitle: string;

  @Column({ nullable: true })
  image: string;

  @Column({ nullable: true })
  tag: string;

  @Column({ type: 'longtext', nullable: true })
  content: string;

  @CreateDateColumn()
  createdAt: Date;
}
