import { SalesEnquiriesService } from './sales-enquiries.service';
import { SalesEnquiry } from './entities/sales-enquiry.entity';
export declare class SalesEnquiriesController {
    private readonly salesEnquiriesService;
    constructor(salesEnquiriesService: SalesEnquiriesService);
    create(payload: Partial<SalesEnquiry>): Promise<SalesEnquiry>;
    findAll(): Promise<SalesEnquiry[]>;
    updateSelectedCar(id: string, selectedCar: string): Promise<SalesEnquiry | null>;
}
