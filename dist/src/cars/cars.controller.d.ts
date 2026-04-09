import { CarsService } from './cars.service';
import { AwsS3Service } from './aws-s3.service';
export declare class CarsController {
    private readonly carsService;
    private readonly awsS3Service;
    constructor(carsService: CarsService, awsS3Service: AwsS3Service);
    findAll(page?: number, limit?: number, search?: string): Promise<{
        data: import("./entities/car.entity").Car[];
        total: number;
        page: number;
        lastPage: number;
    }>;
    findOne(id: string): Promise<import("./entities/car.entity").Car | null>;
    uploadImage(file: Express.Multer.File): Promise<{
        imageUrl: string;
    }>;
    create(createCarDto: any): Promise<import("./entities/car.entity").Car>;
    update(id: string, updateCarDto: any): Promise<import("./entities/car.entity").Car | null>;
    remove(id: string): Promise<void>;
}
