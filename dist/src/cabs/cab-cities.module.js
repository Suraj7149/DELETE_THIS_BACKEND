"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CabCitiesModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const cab_city_entity_1 = require("./entities/cab-city.entity");
const cabs_rental_card_entity_1 = require("./entities/cabs-rental-card.entity");
const cab_cities_service_1 = require("./cab-cities.service");
const cab_cities_controller_1 = require("./cab-cities.controller");
const cabs_rental_card_service_1 = require("./cabs-rental-card.service");
const cabs_rental_card_controller_1 = require("./cabs-rental-card.controller");
const cars_module_1 = require("../cars/cars.module");
let CabCitiesModule = class CabCitiesModule {
};
exports.CabCitiesModule = CabCitiesModule;
exports.CabCitiesModule = CabCitiesModule = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forFeature([cab_city_entity_1.CabCity, cabs_rental_card_entity_1.CabsRentalCard]),
            cars_module_1.CarsModule,
        ],
        providers: [cab_cities_service_1.CabCitiesService, cabs_rental_card_service_1.CabsRentalCardService],
        controllers: [cab_cities_controller_1.CabCitiesController, cabs_rental_card_controller_1.CabsRentalCardController],
        exports: [cab_cities_service_1.CabCitiesService, cabs_rental_card_service_1.CabsRentalCardService],
    })
], CabCitiesModule);
//# sourceMappingURL=cab-cities.module.js.map