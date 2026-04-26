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
exports.CarsController = void 0;
const common_1 = require("@nestjs/common");
const platform_express_1 = require("@nestjs/platform-express");
const cars_service_1 = require("./cars.service");
const aws_s3_service_1 = require("./aws-s3.service");
let CarsController = class CarsController {
    carsService;
    awsS3Service;
    constructor(carsService, awsS3Service) {
        this.carsService = carsService;
        this.awsS3Service = awsS3Service;
    }
    findAll(page = 1, limit = 100, search, brand) {
        return this.carsService.findAll(+page, +limit, search, brand);
    }
    旋;
    findOne(id) {
        return this.carsService.findOne(+id);
    }
    async uploadImage(file) {
        if (!file) {
            throw new common_1.BadRequestException('No image file provided');
        }
        const imageUrl = await this.awsS3Service.uploadFile(file);
        return { imageUrl };
    }
    create(createCarDto) {
        return this.carsService.create(createCarDto);
    }
    update(id, updateCarDto) {
        return this.carsService.update(+id, updateCarDto);
    }
    remove(id) {
        return this.carsService.remove(+id);
    }
};
exports.CarsController = CarsController;
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Query)('page')),
    __param(1, (0, common_1.Query)('limit')),
    __param(2, (0, common_1.Query)('search')),
    __param(3, (0, common_1.Query)('brand')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number, String, String]),
    __metadata("design:returntype", void 0)
], CarsController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], CarsController.prototype, "findOne", null);
__decorate([
    (0, common_1.Post)('upload'),
    (0, common_1.UseInterceptors)((0, platform_express_1.FileInterceptor)('image', {
        limits: {
            fileSize: 6 * 1024 * 1024,
        },
        fileFilter: (req, file, cb) => {
            if (!file.mimetype.match(/\/(jpg|jpeg|png|webp)$/)) {
                return cb(new common_1.BadRequestException('Only image files (jpg, jpeg, png, webp) are allowed!'), false);
            }
            cb(null, true);
        },
    })),
    __param(0, (0, common_1.UploadedFile)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], CarsController.prototype, "uploadImage", null);
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], CarsController.prototype, "create", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", void 0)
], CarsController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], CarsController.prototype, "remove", null);
exports.CarsController = CarsController = __decorate([
    (0, common_1.Controller)('cars'),
    __metadata("design:paramtypes", [cars_service_1.CarsService,
        aws_s3_service_1.AwsS3Service])
], CarsController);
//# sourceMappingURL=cars.controller.js.map