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
const cab_cities_service_1 = require("./cab-cities.service");
let CabCitiesController = class CabCitiesController {
    cabCitiesService;
    constructor(cabCitiesService) {
        this.cabCitiesService = cabCitiesService;
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
exports.CabCitiesController = CabCitiesController = __decorate([
    (0, common_1.Controller)('cab-cities'),
    __metadata("design:paramtypes", [cab_cities_service_1.CabCitiesService])
], CabCitiesController);
//# sourceMappingURL=cab-cities.controller.js.map