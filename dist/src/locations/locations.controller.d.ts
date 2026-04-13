import { LocationsService } from './locations.service';
export declare class LocationsController {
    private readonly locationsService;
    constructor(locationsService: LocationsService);
    findAll(): Promise<import("./entities/location.entity").Location[]>;
    create(name: string): Promise<import("./entities/location.entity").Location>;
    update(id: string, name: string): Promise<import("./entities/location.entity").Location | null>;
    remove(id: string): Promise<void>;
}
