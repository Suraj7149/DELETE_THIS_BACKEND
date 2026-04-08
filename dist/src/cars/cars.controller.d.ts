import { CarsService } from './cars.service';
export declare class CarsController {
    private readonly carsService;
    constructor(carsService: CarsService);
    findAll(page?: number, limit?: number, search?: string): Promise<{
        data: import("./entities/car.entity").Car[];
        total: number;
        page: number;
        lastPage: number;
    }>;
    findOne(id: string): Promise<import("./entities/car.entity").Car | null>;
    create(createCarDto: any): Promise<import("./entities/car.entity").Car>;
}
