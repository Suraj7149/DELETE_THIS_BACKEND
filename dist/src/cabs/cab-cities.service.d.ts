import { OnModuleInit } from '@nestjs/common';
import { Repository } from 'typeorm';
import { CabCity } from './entities/cab-city.entity';
export declare class CabCitiesService implements OnModuleInit {
    private cabCityRepository;
    constructor(cabCityRepository: Repository<CabCity>);
    onModuleInit(): Promise<void>;
    seed(): Promise<void>;
    findBySlug(slug: string): Promise<CabCity | null>;
    findAll(): Promise<CabCity[]>;
}
