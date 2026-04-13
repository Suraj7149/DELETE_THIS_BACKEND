import { CabCitiesService } from './cab-cities.service';
import { CabCity } from './entities/cab-city.entity';
import { AwsS3Service } from '../cars/aws-s3.service';
export declare class CabCitiesController {
    private readonly cabCitiesService;
    private readonly awsS3Service;
    constructor(cabCitiesService: CabCitiesService, awsS3Service: AwsS3Service);
    findAll(): Promise<CabCity[]>;
    findOne(slug: string): Promise<CabCity>;
    uploadImage(file: Express.Multer.File, slug: string): Promise<{
        imageUrl: string;
    }>;
    create(data: Partial<CabCity>): Promise<CabCity>;
    update(id: string, data: Partial<CabCity>): Promise<CabCity | null>;
    remove(id: string): Promise<void>;
}
