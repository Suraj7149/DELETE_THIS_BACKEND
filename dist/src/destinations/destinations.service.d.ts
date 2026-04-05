import { OnModuleInit } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Destination } from './entities/destination.entity';
import { PopularDestination } from './entities/popular-destination.entity';
export declare class DestinationsService implements OnModuleInit {
    private destinationsRepository;
    private popularDestinationsRepository;
    constructor(destinationsRepository: Repository<Destination>, popularDestinationsRepository: Repository<PopularDestination>);
    onModuleInit(): Promise<void>;
    seed(): Promise<void>;
    findAllDestinations(): Promise<Destination[]>;
    findAllPopularDestinations(): Promise<PopularDestination[]>;
}
