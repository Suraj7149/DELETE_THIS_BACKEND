import { Repository } from 'typeorm';
import { SalesEnquiry } from './entities/sales-enquiry.entity';
export declare class SalesEnquiriesService {
    private salesEnquiryRepository;
    constructor(salesEnquiryRepository: Repository<SalesEnquiry>);
    create(data: Partial<SalesEnquiry>): Promise<SalesEnquiry>;
    findAll(): Promise<SalesEnquiry[]>;
    findOne(id: number): Promise<SalesEnquiry | null>;
    updateSelectedCar(id: number, selectedCar: string): Promise<SalesEnquiry | null>;
    updateStatus(id: number, status: string): Promise<SalesEnquiry | null>;
}
