import { OnModuleInit } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Car } from './entities/car.entity';
export declare class CarsService implements OnModuleInit {
    private carsRepository;
    constructor(carsRepository: Repository<Car>);
    onModuleInit(): Promise<void>;
    findAll(page?: number, limit?: number, search?: string, brand?: string): Promise<{
        data: Car[];
        total: number;
        page: number;
        lastPage: number;
    }>;
    旋: any;
    findOne(id: number): Promise<Car | null>;
    create(createCarDto: Partial<Car>): Promise<Car>;
    update(id: number, updateCarDto: Partial<Car>): Promise<Car | null>;
    remove(id: number): Promise<void>;
}
