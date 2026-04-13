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
exports.CabCitiesController = void 0;
const common_1 = require("@nestjs/common");
const platform_express_1 = require("@nestjs/platform-express");
const cab_cities_service_1 = require("./cab-cities.service");
const aws_s3_service_1 = require("../cars/aws-s3.service");
let CabCitiesController = class CabCitiesController {
    cabCitiesService;
    awsS3Service;
    constructor(cabCitiesService, awsS3Service) {
        this.cabCitiesService = cabCitiesService;
        this.awsS3Service = awsS3Service;
    }
    async findAll() {
        return this.cabCitiesService.findAll();
    }
    async findOne(slug) {
        const city = await this.cabCitiesService.findBySlug(slug);
        if (!city) {
            throw new common_1.NotFoundException(`City with slug ${slug} not found`);
        }
        return city;
    }
    async uploadImage(file, slug) {
        const folder = `${slug}/images`;
        const imageUrl = await this.awsS3Service.uploadFile(file, folder);
        return { imageUrl };
    }
    async create(data) {
        return this.cabCitiesService.create(data);
    }
    async update(id, data) {
        return this.cabCitiesService.update(+id, data);
    }
    async remove(id) {
        return this.cabCitiesService.remove(+id);
    }
};
exports.CabCitiesController = CabCitiesController;
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], CabCitiesController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':slug'),
    __param(0, (0, common_1.Param)('slug')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], CabCitiesController.prototype, "findOne", null);
__decorate([
    (0, common_1.Post)('upload'),
    (0, common_1.UseInterceptors)((0, platform_express_1.FileInterceptor)('image')),
    __param(0, (0, common_1.UploadedFile)()),
    __param(1, (0, common_1.Query)('slug')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String]),
    __metadata("design:returntype", Promise)
], CabCitiesController.prototype, "uploadImage", null);
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], CabCitiesController.prototype, "create", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], CabCitiesController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], CabCitiesController.prototype, "remove", null);
exports.CabCitiesController = CabCitiesController = __decorate([
    (0, common_1.Controller)('cab-cities'),
    __metadata("design:paramtypes", [cab_cities_service_1.CabCitiesService,
        aws_s3_service_1.AwsS3Service])
], CabCitiesController);
//# sourceMappingURL=cab-cities.controller.js.map