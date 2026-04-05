import { OnModuleInit } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Location } from './entities/location.entity';
export declare class LocationsService implements OnModuleInit {
    private locationRepository;
    constructor(locationRepository: Repository<Location>);
    onModuleInit(): Promise<void>;
    seed(): Promise<void>;
    findAll(): Promise<Location[]>;
}
