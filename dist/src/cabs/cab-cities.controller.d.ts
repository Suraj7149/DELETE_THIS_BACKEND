import { CabCitiesService } from './cab-cities.service';
import { CabCity } from './entities/cab-city.entity';
export declare class CabCitiesController {
    private readonly cabCitiesService;
    constructor(cabCitiesService: CabCitiesService);
    findAll(): Promise<CabCity[]>;
    findOne(slug: string): Promise<CabCity>;
}
