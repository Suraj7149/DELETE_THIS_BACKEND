import { Controller, Get, Post, Body, Param, Delete } from '@nestjs/common';
import { ContactSubmissionsService } from './contact-submissions.service';
import { CreateContactSubmissionDto } from './dto/create-contact-submission.dto';

@Controller('contact-submissions')
export class ContactSubmissionsController {
  constructor(private readonly contactSubmissionsService: ContactSubmissionsService) {}

  @Post()
  create(@Body() createContactSubmissionDto: CreateContactSubmissionDto) {
    return this.contactSubmissionsService.create(createContactSubmissionDto);
  }

  @Get()
  findAll() {
    return this.contactSubmissionsService.findAll();
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.contactSubmissionsService.remove(+id);
  }
}
