import { ContactSubmissionsService } from './contact-submissions.service';
import { CreateContactSubmissionDto } from './dto/create-contact-submission.dto';
export declare class ContactSubmissionsController {
    private readonly contactSubmissionsService;
    constructor(contactSubmissionsService: ContactSubmissionsService);
    create(createContactSubmissionDto: CreateContactSubmissionDto): Promise<import("./entities/contact-submission.entity").ContactSubmission>;
    findAll(): Promise<import("./entities/contact-submission.entity").ContactSubmission[]>;
    remove(id: string): Promise<void>;
}
