import { DestinationsService } from './destinations.service';
import { Destination } from './entities/destination.entity';
import { AwsS3Service } from '../cars/aws-s3.service';
export declare class DestinationsController {
    private readonly destinationsService;
    private readonly awsS3Service;
    constructor(destinationsService: DestinationsService, awsS3Service: AwsS3Service);
    findAllDestinations(): Promise<Destination[]>;
    uploadImage(file: Express.Multer.File): Promise<{
        imageUrl: string;
    }>;
    create(data: Partial<Destination>): Promise<Destination>;
    update(id: string, data: Partial<Destination>): Promise<Destination | null>;
    remove(id: string): Promise<void>;
    findAllPopularDestinations(): Promise<import("./entities/popular-destination.entity").PopularDestination[]>;
    createPopularRoute(route_name: string): Promise<import("./entities/popular-destination.entity").PopularDestination>;
    updatePopularRoute(id: string, route_name: string): Promise<import("./entities/popular-destination.entity").PopularDestination | null>;
    removePopularRoute(id: string): Promise<void>;
}
