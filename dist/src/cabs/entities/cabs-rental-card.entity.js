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
exports.CabsRentalCard = void 0;
const typeorm_1 = require("typeorm");
let CabsRentalCard = class CabsRentalCard {
    id;
    name;
    code;
    rating;
    description;
    hq;
    fleet;
    locations;
    phone;
};
exports.CabsRentalCard = CabsRentalCard;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], CabsRentalCard.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], CabsRentalCard.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], CabsRentalCard.prototype, "code", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'decimal', precision: 3, scale: 1 }),
    __metadata("design:type", Number)
], CabsRentalCard.prototype, "rating", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text' }),
    __metadata("design:type", String)
], CabsRentalCard.prototype, "description", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], CabsRentalCard.prototype, "hq", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], CabsRentalCard.prototype, "fleet", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], CabsRentalCard.prototype, "locations", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], CabsRentalCard.prototype, "phone", void 0);
exports.CabsRentalCard = CabsRentalCard = __decorate([
    (0, typeorm_1.Entity)('cabs_rentals_card')
], CabsRentalCard);
//# sourceMappingURL=cabs-rental-card.entity.js.map