import { CarsService } from './cars.service';
export declare class CarsController {
    private readonly carsService;
    constructor(carsService: CarsService);
    findAll(): Promise<import("./entities/car.entity").Car[]>;
    findOne(id: string): Promise<import("./entities/car.entity").Car | null>;
    create(createCarDto: any): Promise<import("./entities/car.entity").Car>;
}
