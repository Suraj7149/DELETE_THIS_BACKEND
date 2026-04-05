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
exports.CarsService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const car_entity_1 = require("./entities/car.entity");
let CarsService = class CarsService {
    carsRepository;
    constructor(carsRepository) {
        this.carsRepository = carsRepository;
    }
    async onModuleInit() {
        const count = await this.carsRepository.count();
        if (count === 0) {
            const initialCars = [
                {
                    name: "Toyota Yaris or similar",
                    image: "/assets/Toyota_yaris.png",
                    category: "ELECTRIC",
                    rating: 4.5,
                    reviews: 125,
                    seats: 5,
                    doors: 2,
                    bags: 1,
                    transmission: "Manual",
                    mileage: "Unlimited",
                    fuel: "Full to Full",
                    features: ["Free Cancellation", "Pay at Pickup"],
                    pricePerDay: 25.00,
                    isTodaysSpecial: false,
                    availablePickupLocation: "Delhi,Mumbai,Oman,Los Angeles,Dubai,Bangalore,Pune,Hyderabad,Chennai,Kolkata"
                },
                {
                    name: "Honda Civic or similar",
                    image: "/assets/Honda_civic.png",
                    category: "SPORTS",
                    rating: 4.7,
                    reviews: 175,
                    seats: 5,
                    doors: 4,
                    bags: 2,
                    transmission: "Automatic",
                    mileage: "Unlimited",
                    fuel: "Full to Full",
                    features: ["Free Cancellation", "Full Insurance"],
                    pricePerDay: 35.00,
                    isTodaysSpecial: false,
                    supplier: "Avis",
                    availablePickupLocation: "Delhi,Mumbai,Oman,Los Angeles,Dubai,Bangalore,Pune,Hyderabad,Chennai,Kolkata"
                },
                {
                    name: "Toyota RAV4 or similar",
                    image: "/assets/Toyota_RAV4.png",
                    category: "SUV",
                    rating: 4.8,
                    reviews: 275,
                    seats: 5,
                    doors: 4,
                    bags: 3,
                    transmission: "Automatic",
                    mileage: "Unlimited",
                    fuel: "Full to Full",
                    features: ["Free Cancellation", "Pay at Pickup"],
                    pricePerDay: 55.00,
                    isTodaysSpecial: false,
                    supplier: "Budget",
                    availablePickupLocation: "Delhi,Mumbai,Oman,Los Angeles,Dubai,Bangalore,Pune,Hyderabad,Chennai,Kolkata"
                },
                {
                    name: "BMW 5 Series or similar",
                    image: "/assets/BMW_5.png",
                    category: "LUXURY",
                    rating: 4.9,
                    reviews: 320,
                    seats: 5,
                    doors: 4,
                    bags: 2,
                    transmission: "Automatic",
                    mileage: "Unlimited",
                    fuel: "Full to Full",
                    features: ["Free Cancellation", "Full Insurance"],
                    pricePerDay: 95.00,
                    isTodaysSpecial: false,
                    supplier: "National",
                    availablePickupLocation: "Delhi,Mumbai,Oman,Los Angeles,Dubai,Bangalore,Pune,Hyderabad,Chennai,Kolkata"
                },
                {
                    name: "Chrysler Pacifica or similar",
                    image: "/assets/Chrysler_Pacifica.png",
                    category: "TRUCKS",
                    rating: 4.6,
                    reviews: 150,
                    seats: 7,
                    doors: 4,
                    bags: 4,
                    transmission: "Automatic",
                    mileage: "Unlimited",
                    fuel: "Full to Full",
                    features: ["Free Cancellation", "Pay at Pickup"],
                    pricePerDay: 75.00,
                    isTodaysSpecial: false,
                    supplier: "Alamo",
                    availablePickupLocation: "Delhi,Mumbai,Oman,Los Angeles,Dubai,Bangalore,Pune,Hyderabad,Chennai,Kolkata"
                },
                {
                    name: "Jeep Grand Cherokee or similar",
                    image: "/assets/Jeep_Grand.png",
                    category: "SUV",
                    rating: 4.7,
                    reviews: 190,
                    seats: 5,
                    doors: 4,
                    bags: 3,
                    transmission: "Automatic",
                    mileage: "Unlimited",
                    fuel: "Full to Full",
                    features: ["Free Cancellation", "Full Insurance"],
                    pricePerDay: 65.00,
                    isTodaysSpecial: false,
                    supplier: "Enterprise",
                    availablePickupLocation: "Delhi,Mumbai,Oman,Los Angeles,Dubai,Bangalore,Pune,Hyderabad,Chennai,Kolkata"
                },
                {
                    name: "Volkswagen",
                    image: "/assets/todays_special.png",
                    category: "ELECTRIC",
                    rating: 4.4,
                    reviews: 85,
                    seats: 5,
                    doors: 4,
                    bags: 1,
                    transmission: "Automatic transmission",
                    mileage: "Unlimited mileage",
                    fuel: "Same model swap",
                    features: ["Free Cancellation", "Airport Pickup"],
                    pricePerDay: 28.00,
                    isTodaysSpecial: true,
                    supplier: "Exclusive",
                    availablePickupLocation: "Delhi,Mumbai,Oman,Los Angeles,Dubai,Bangalore,Pune,Hyderabad,Chennai,Kolkata"
                }
            ];
            await this.carsRepository.save(initialCars);
            console.log('Seeded 7 cars successfully');
        }
    }
    findAll() {
        return this.carsRepository.find();
    }
    findOne(id) {
        return this.carsRepository.findOne({ where: { car_id: id } });
    }
    async create(createCarDto) {
        const car = this.carsRepository.create(createCarDto);
        return this.carsRepository.save(car);
    }
};
exports.CarsService = CarsService;
exports.CarsService = CarsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(car_entity_1.Car)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], CarsService);
//# sourceMappingURL=cars.service.js.map