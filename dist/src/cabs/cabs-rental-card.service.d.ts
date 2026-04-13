import { OnModuleInit } from '@nestjs/common';
import { Repository } from 'typeorm';
import { CabsRentalCard } from './entities/cabs-rental-card.entity';
export declare class CabsRentalCardService implements OnModuleInit {
    private cabsRentalCardRepository;
    constructor(cabsRentalCardRepository: Repository<CabsRentalCard>);
    onModuleInit(): Promise<void>;
    seed(): Promise<void>;
    findAll(): Promise<CabsRentalCard[]>;
    create(data: Partial<CabsRentalCard>): Promise<CabsRentalCard>;
    update(id: number, data: Partial<CabsRentalCard>): Promise<CabsRentalCard | null>;
    remove(id: number): Promise<void>;
}
