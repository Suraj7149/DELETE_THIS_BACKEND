import { Repository } from 'typeorm';
import { SocialMedia } from './entities/social-media.entity';
export declare class SocialMediaService {
    private readonly socialMediaRepository;
    constructor(socialMediaRepository: Repository<SocialMedia>);
    findAll(): Promise<SocialMedia[]>;
    findOne(id: number): Promise<SocialMedia>;
    create(data: Partial<SocialMedia>): Promise<SocialMedia>;
    update(id: number, data: Partial<SocialMedia>): Promise<SocialMedia>;
    remove(id: number): Promise<void>;
}
