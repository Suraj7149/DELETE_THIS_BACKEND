import { Repository } from 'typeorm';
import { SalesEnquiry } from './entities/sales-enquiry.entity';
export declare class SalesEnquiriesService {
    private salesEnquiryRepository;
    constructor(salesEnquiryRepository: Repository<SalesEnquiry>);
    create(data: Partial<SalesEnquiry>): Promise<SalesEnquiry>;
    findAll(): Promise<SalesEnquiry[]>;
    updateSelectedCar(id: number, selectedCar: string): Promise<SalesEnquiry | null>;
}
