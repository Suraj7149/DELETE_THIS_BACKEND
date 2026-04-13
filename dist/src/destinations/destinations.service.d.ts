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
    create(data: Partial<Destination>): Promise<Destination>;
    update(id: number, data: Partial<Destination>): Promise<Destination | null>;
    remove(id: number): Promise<void>;
    findAllPopularDestinations(): Promise<PopularDestination[]>;
    createPopularRoute(route_name: string): Promise<PopularDestination>;
    updatePopularRoute(id: number, route_name: string): Promise<PopularDestination | null>;
    removePopularRoute(id: number): Promise<void>;
}
