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
Object.defineProperty(exports, "__esModule", { value: true });
exports.SalesEnquiry = void 0;
const typeorm_1 = require("typeorm");
let SalesEnquiry = class SalesEnquiry {
    id;
    fullName;
    email;
    phone;
    pickupLocation;
    dropLocation;
    pickupDate;
    returnDate;
    selectedCar;
    promoCode;
    car_id;
    enquiry_status;
    createdAt;
};
exports.SalesEnquiry = SalesEnquiry;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], SalesEnquiry.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], SalesEnquiry.prototype, "fullName", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], SalesEnquiry.prototype, "email", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], SalesEnquiry.prototype, "phone", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], SalesEnquiry.prototype, "pickupLocation", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], SalesEnquiry.prototype, "dropLocation", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], SalesEnquiry.prototype, "pickupDate", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], SalesEnquiry.prototype, "returnDate", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], SalesEnquiry.prototype, "selectedCar", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], SalesEnquiry.prototype, "promoCode", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", Number)
], SalesEnquiry.prototype, "car_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: 'unchecked' }),
    __metadata("design:type", String)
], SalesEnquiry.prototype, "enquiry_status", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], SalesEnquiry.prototype, "createdAt", void 0);
exports.SalesEnquiry = SalesEnquiry = __decorate([
    (0, typeorm_1.Entity)('sales_enquiry')
], SalesEnquiry);
//# sourceMappingURL=sales-enquiry.entity.js.map