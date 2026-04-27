import { Repository } from 'typeorm';
import { Blog } from './entities/blog.entity';
export declare class BlogsService {
    private readonly blogRepository;
    constructor(blogRepository: Repository<Blog>);
    findAll(): Promise<Blog[]>;
    findOne(id: number): Promise<Blog>;
    create(data: Partial<Blog>): Promise<Blog>;
    update(id: number, data: Partial<Blog>): Promise<Blog>;
    remove(id: number): Promise<void>;
}
