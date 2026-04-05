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
exports.SalesEnquiriesService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const sales_enquiry_entity_1 = require("./entities/sales-enquiry.entity");
let SalesEnquiriesService = class SalesEnquiriesService {
    salesEnquiryRepository;
    constructor(salesEnquiryRepository) {
        this.salesEnquiryRepository = salesEnquiryRepository;
    }
    async create(data) {
        const newEnquiry = this.salesEnquiryRepository.create(data);
        return await this.salesEnquiryRepository.save(newEnquiry);
    }
    findAll() {
        return this.salesEnquiryRepository.find();
    }
    async updateSelectedCar(id, selectedCar) {
        await this.salesEnquiryRepository.update(id, { selectedCar });
        return this.salesEnquiryRepository.findOneBy({ id });
    }
};
exports.SalesEnquiriesService = SalesEnquiriesService;
exports.SalesEnquiriesService = SalesEnquiriesService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(sales_enquiry_entity_1.SalesEnquiry)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], SalesEnquiriesService);
//# sourceMappingURL=sales-enquiries.service.js.map