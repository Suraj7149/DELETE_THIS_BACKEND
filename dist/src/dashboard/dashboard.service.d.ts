import { Repository } from 'typeorm';
import { Car } from '../cars/entities/car.entity';
import { SalesEnquiry } from '../sales-enquiries/entities/sales-enquiry.entity';
export declare class DashboardService {
    private carsRepository;
    private salesEnquiryRepository;
    constructor(carsRepository: Repository<Car>, salesEnquiryRepository: Repository<SalesEnquiry>);
    getSummary(): Promise<{
        totalEnquiries: number;
        totalCars: number;
        carTypes: {
            name: any;
            count: number;
        }[];
    }>;
}
