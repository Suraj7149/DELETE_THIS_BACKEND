"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SocialMediaService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const social_media_entity_1 = require("./entities/social-media.entity");
let SocialMediaService = class SocialMediaService {
    socialMediaRepository;
    constructor(socialMediaRepository) {
        this.socialMediaRepository = socialMediaRepository;
    }
    async findAll() {
        return this.socialMediaRepository.find({
            order: { createdAt: 'DESC' },
        });
    }
    async findOne(id) {
        const item = await this.socialMediaRepository.findOne({ where: { id } });
        if (!item) {
            throw new common_1.NotFoundException(`Social Media item with ID ${id} not found`);
        }
        return item;
    }
    async create(data) {
        const item = this.socialMediaRepository.create(data);
        return this.socialMediaRepository.save(item);
    }
    async update(id, data) {
        const item = await this.findOne(id);
        Object.assign(item, data);
        return this.socialMediaRepository.save(item);
    }
    async remove(id) {
        const item = await this.findOne(id);
        await this.socialMediaRepository.remove(item);
    }
};
exports.SocialMediaService = SocialMediaService;
exports.SocialMediaService = SocialMediaService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(social_media_entity_1.SocialMedia)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], SocialMediaService);
//# sourceMappingURL=social-media.service.js.map