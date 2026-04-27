import { BlogsService } from './blogs.service';
import { Blog } from './entities/blog.entity';
import { AwsS3Service } from '../cars/aws-s3.service';
export declare class BlogsController {
    private readonly blogsService;
    private readonly awsS3Service;
    constructor(blogsService: BlogsService, awsS3Service: AwsS3Service);
    findAll(): Promise<Blog[]>;
    findOne(id: string): Promise<Blog>;
    uploadImage(file: Express.Multer.File, title: string): Promise<{
        imageUrl: string;
    }>;
    create(data: Partial<Blog>): Promise<Blog>;
    update(id: string, data: Partial<Blog>): Promise<Blog>;
    remove(id: string): Promise<void>;
}
