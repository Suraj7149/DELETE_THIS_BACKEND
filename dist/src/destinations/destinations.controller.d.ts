import { DestinationsService } from './destinations.service';
export declare class DestinationsController {
    private readonly destinationsService;
    constructor(destinationsService: DestinationsService);
    findAllDestinations(): Promise<import("./entities/destination.entity").Destination[]>;
    findAllPopularDestinations(): Promise<import("./entities/popular-destination.entity").PopularDestination[]>;
}
