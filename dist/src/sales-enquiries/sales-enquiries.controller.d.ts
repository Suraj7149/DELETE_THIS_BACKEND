import { SalesEnquiriesService } from './sales-enquiries.service';
import { SalesEnquiry } from './entities/sales-enquiry.entity';
export declare class SalesEnquiriesController {
    private readonly salesEnquiriesService;
    constructor(salesEnquiriesService: SalesEnquiriesService);
    create(payload: Partial<SalesEnquiry>): Promise<SalesEnquiry>;
    findAll(): Promise<SalesEnquiry[]>;
    findOne(id: string): Promise<SalesEnquiry | null>;
    updateSelectedCar(id: string, selectedCar: string): Promise<SalesEnquiry | null>;
    updateStatus(id: string, status: string): Promise<SalesEnquiry | null>;
}
