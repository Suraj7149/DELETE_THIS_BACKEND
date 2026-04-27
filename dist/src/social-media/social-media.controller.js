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
exports.SocialMediaController = void 0;
const common_1 = require("@nestjs/common");
const platform_express_1 = require("@nestjs/platform-express");
const social_media_service_1 = require("./social-media.service");
const aws_s3_service_1 = require("../cars/aws-s3.service");
let SocialMediaController = class SocialMediaController {
    socialMediaService;
    awsS3Service;
    constructor(socialMediaService, awsS3Service) {
        this.socialMediaService = socialMediaService;
        this.awsS3Service = awsS3Service;
    }
    async findAll() {
        return this.socialMediaService.findAll();
    }
    async findOne(id) {
        return this.socialMediaService.findOne(+id);
    }
    async uploadImage(file, title) {
        const folder = 'social-media';
        const imageUrl = await this.awsS3Service.uploadFile(file, folder);
        return { imageUrl };
    }
    async create(data) {
        return this.socialMediaService.create(data);
    }
    async update(id, data) {
        return this.socialMediaService.update(+id, data);
    }
    async remove(id) {
        return this.socialMediaService.remove(+id);
    }
};
exports.SocialMediaController = SocialMediaController;
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], SocialMediaController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], SocialMediaController.prototype, "findOne", null);
__decorate([
    (0, common_1.Post)('upload'),
    (0, common_1.UseInterceptors)((0, platform_express_1.FileInterceptor)('image')),
    __param(0, (0, common_1.UploadedFile)()),
    __param(1, (0, common_1.Query)('title')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String]),
    __metadata("design:returntype", Promise)
], SocialMediaController.prototype, "uploadImage", null);
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], SocialMediaController.prototype, "create", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], SocialMediaController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], SocialMediaController.prototype, "remove", null);
exports.SocialMediaController = SocialMediaController = __decorate([
    (0, common_1.Controller)('social-media'),
    __metadata("design:paramtypes", [social_media_service_1.SocialMediaService,
        aws_s3_service_1.AwsS3Service])
], SocialMediaController);
//# sourceMappingURL=social-media.controller.js.map