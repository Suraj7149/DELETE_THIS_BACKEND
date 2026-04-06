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
exports.Car = void 0;
const typeorm_1 = require("typeorm");
let Car = class Car {
    car_id;
    name;
    image;
    category;
    specialTag;
    rating;
    reviews;
    seats;
    doors;
    bags;
    transmission;
    mileage;
    fuel;
    features;
    pricePerDay;
    isTodaysSpecial;
    supplier;
    availablePickupLocation;
    brand;
    yearModel;
    fuelType;
    years;
    control;
    wheels;
    sellingPrice;
    ownership;
};
exports.Car = Car;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ name: 'car_id' }),
    __metadata("design:type", Number)
], Car.prototype, "car_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'car_name' }),
    __metadata("design:type", String)
], Car.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'car_image' }),
    __metadata("design:type", String)
], Car.prototype, "image", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'car_type' }),
    __metadata("design:type", String)
], Car.prototype, "category", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'special_tag', nullable: true }),
    __metadata("design:type", String)
], Car.prototype, "specialTag", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'rating', type: 'decimal', precision: 2, scale: 1, default: 0.0 }),
    __metadata("design:type", Number)
], Car.prototype, "rating", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'reviews', default: 0 }),
    __metadata("design:type", Number)
], Car.prototype, "reviews", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'seats' }),
    __metadata("design:type", Number)
], Car.prototype, "seats", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'doors' }),
    __metadata("design:type", Number)
], Car.prototype, "doors", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'bags' }),
    __metadata("design:type", Number)
], Car.prototype, "bags", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'transmission' }),
    __metadata("design:type", String)
], Car.prototype, "transmission", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'mileage' }),
    __metadata("design:type", String)
], Car.prototype, "mileage", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'fuel' }),
    __metadata("design:type", String)
], Car.prototype, "fuel", void 0);
__decorate([
    (0, typeorm_1.Column)('simple-array', { name: 'features' }),
    __metadata("design:type", Array)
], Car.prototype, "features", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'price_per_day', type: 'decimal', precision: 10, scale: 2 }),
    __metadata("design:type", Number)
], Car.prototype, "pricePerDay", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'is_todays_special', default: false }),
    __metadata("design:type", Boolean)
], Car.prototype, "isTodaysSpecial", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'supplier', nullable: true }),
    __metadata("design:type", String)
], Car.prototype, "supplier", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'available_pickup_location', type: 'text', nullable: true }),
    __metadata("design:type", String)
], Car.prototype, "availablePickupLocation", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], Car.prototype, "brand", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'year_model', nullable: true }),
    __metadata("design:type", String)
], Car.prototype, "yearModel", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'fuel_type', nullable: true }),
    __metadata("design:type", String)
], Car.prototype, "fuelType", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], Car.prototype, "years", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], Car.prototype, "control", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], Car.prototype, "wheels", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'selling_price', type: 'decimal', precision: 12, scale: 2, nullable: true }),
    __metadata("design:type", Number)
], Car.prototype, "sellingPrice", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: 'new' }),
    __metadata("design:type", String)
], Car.prototype, "ownership", void 0);
exports.Car = Car = __decorate([
    (0, typeorm_1.Entity)('cars')
], Car);
//# sourceMappingURL=car.entity.js.map