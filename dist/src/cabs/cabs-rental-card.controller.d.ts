import { CabsRentalCardService } from './cabs-rental-card.service';
import { CabsRentalCard } from './entities/cabs-rental-card.entity';
export declare class CabsRentalCardController {
    private readonly cabsRentalCardService;
    constructor(cabsRentalCardService: CabsRentalCardService);
    findAll(): Promise<CabsRentalCard[]>;
    create(data: Partial<CabsRentalCard>): Promise<CabsRentalCard>;
    update(id: string, data: Partial<CabsRentalCard>): Promise<CabsRentalCard | null>;
    remove(id: string): Promise<void>;
}
