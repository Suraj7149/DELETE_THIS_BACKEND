import { OnModuleInit } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Car } from './entities/car.entity';
export declare class CarsService implements OnModuleInit {
    private carsRepository;
    constructor(carsRepository: Repository<Car>);
    onModuleInit(): Promise<void>;
    findAll(page?: number, limit?: number, brand?: string): Promise<{
        data: Car[];
        total: number;
        page: number;
        lastPage: number;
    }>;
    findOne(id: number): Promise<Car | null>;
    create(createCarDto: Partial<Car>): Promise<Car>;
}
