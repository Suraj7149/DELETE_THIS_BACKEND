import { Repository } from 'typeorm';
import { ContactSubmission } from './entities/contact-submission.entity';
import { CreateContactSubmissionDto } from './dto/create-contact-submission.dto';
export declare class ContactSubmissionsService {
    private readonly contactRepository;
    constructor(contactRepository: Repository<ContactSubmission>);
    create(createDto: CreateContactSubmissionDto): Promise<ContactSubmission>;
    findAll(): Promise<ContactSubmission[]>;
    remove(id: number): Promise<void>;
}
