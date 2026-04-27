import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { SocialMedia } from './entities/social-media.entity';

@Injectable()
export class SocialMediaService {
  constructor(
    @InjectRepository(SocialMedia)
    private readonly socialMediaRepository: Repository<SocialMedia>,
  ) {}

  async findAll(): Promise<SocialMedia[]> {
    return this.socialMediaRepository.find({
      order: { createdAt: 'DESC' },
    });
  }

  async findOne(id: number): Promise<SocialMedia> {
    const item = await this.socialMediaRepository.findOne({ where: { id } });
    if (!item) {
      throw new NotFoundException(`Social Media item with ID ${id} not found`);
    }
    return item;
  }

  async create(data: Partial<SocialMedia>): Promise<SocialMedia> {
    const item = this.socialMediaRepository.create(data);
    return this.socialMediaRepository.save(item);
  }

  async update(id: number, data: Partial<SocialMedia>): Promise<SocialMedia> {
    const item = await this.findOne(id);
    Object.assign(item, data);
    return this.socialMediaRepository.save(item);
  }

  async remove(id: number): Promise<void> {
    const item = await this.findOne(id);
    await this.socialMediaRepository.remove(item);
  }
}
