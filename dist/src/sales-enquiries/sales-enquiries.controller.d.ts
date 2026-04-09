import { SalesEnquiriesService } from './sales-enquiries.service';
import { SalesEnquiry } from './entities/sales-enquiry.entity';
export declare class SalesEnquiriesController {
    private readonly salesEnquiriesService;
    constructor(salesEnquiriesService: SalesEnquiriesService);
    create(payload: Partial<SalesEnquiry>): Promise<SalesEnquiry>;
    findAll(): Promise<SalesEnquiry[]>;
    findOne(id: string): Promise<SalesEnquiry | null>;
    updateCarSelection(id: string, selectedCar: string, car_id: number): Promise<SalesEnquiry | null>;
    updateStatus(id: string, status: string): Promise<SalesEnquiry | null>;
}
