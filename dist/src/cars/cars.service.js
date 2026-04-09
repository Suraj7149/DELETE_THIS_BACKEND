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
        const cars = await this.carsRepository.find();
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
                availablePickupLocation: "Delhi,Mumbai,Oman,Los Angeles,Dubai,Bangalore,Pune,Hyderabad,Chennai,Kolkata",
                brand: "Toyota",
                yearModel: "2022",
                fuelType: "Electric",
                years: "2022",
                control: "Manual",
                wheels: "16-inch",
                sellingPrice: 15000,
                ownership: "new"
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
                availablePickupLocation: "Delhi,Mumbai,Oman,Los Angeles,Dubai,Bangalore,Pune,Hyderabad,Chennai,Kolkata",
                brand: "Honda",
                yearModel: "2023",
                fuelType: "Petrol",
                years: "2023",
                control: "Automatic",
                wheels: "17-inch",
                sellingPrice: 25000,
                ownership: "new"
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
                availablePickupLocation: "Delhi,Mumbai,Oman,Los Angeles,Dubai,Bangalore,Pune,Hyderabad,Chennai,Kolkata",
                brand: "Toyota",
                yearModel: "2023",
                fuelType: "Petrol",
                years: "2023",
                control: "Automatic",
                wheels: "18-inch",
                sellingPrice: 35000,
                ownership: "used"
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
                availablePickupLocation: "Delhi,Mumbai,Oman,Los Angeles,Dubai,Bangalore,Pune,Hyderabad,Chennai,Kolkata",
                brand: "BMW",
                yearModel: "2024",
                fuelType: "Diesel",
                years: "2024",
                control: "Automatic",
                wheels: "19-inch",
                sellingPrice: 65000,
                ownership: "new"
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
                availablePickupLocation: "Delhi,Mumbai,Oman,Los Angeles,Dubai,Bangalore,Pune,Hyderabad,Chennai,Kolkata",
                brand: "Chrysler",
                yearModel: "2023",
                fuelType: "Petrol",
                years: "2023",
                control: "Automatic",
                wheels: "17-inch",
                sellingPrice: 40000,
                ownership: "new"
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
                availablePickupLocation: "Delhi,Mumbai,Oman,Los Angeles,Dubai,Bangalore,Pune,Hyderabad,Chennai,Kolkata",
                brand: "Jeep",
                yearModel: "2023",
                fuelType: "Petrol",
                years: "2023",
                control: "Automatic",
                wheels: "18-inch",
                sellingPrice: 45000,
                ownership: "new"
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
                availablePickupLocation: "Delhi,Mumbai,Oman,Los Angeles,Dubai,Bangalore,Pune,Hyderabad,Chennai,Kolkata",
                brand: "Volkswagen",
                yearModel: "2023",
                fuelType: "Electric",
                years: "2023",
                control: "Automatic",
                wheels: "16-inch",
                sellingPrice: 30000,
                ownership: "new"
            },
            {
                name: "Audi A4",
                image: "/assets/BMW_5.png",
                category: "LUXURY",
                rating: 4.8,
                reviews: 210,
                seats: 5,
                doors: 4,
                bags: 2,
                transmission: "Automatic",
                mileage: "Unlimited",
                fuel: "Diesel",
                features: ["Free Cancellation", "Premium Sound"],
                pricePerDay: 85.00,
                isTodaysSpecial: false,
                brand: "Audi",
                yearModel: "2023",
                fuelType: "Diesel",
                years: "2023",
                control: "Automatic",
                wheels: "18-inch",
                sellingPrice: 55000,
                ownership: "new"
            },
            {
                name: "BMW M4 Competition",
                image: "/assets/BMW_5.png",
                category: "SPORTS",
                rating: 4.9,
                reviews: 145,
                seats: 4,
                doors: 2,
                bags: 1,
                transmission: "Automatic",
                mileage: "Unlimited",
                fuel: "Petrol",
                features: ["Free Cancellation", "M-Sport Package"],
                pricePerDay: 150.00,
                isTodaysSpecial: false,
                brand: "BMW",
                yearModel: "2024",
                fuelType: "Petrol",
                years: "2024",
                control: "Automatic",
                wheels: "19-inch",
                sellingPrice: 95000,
                ownership: "new"
            },
            {
                name: "Ford Mustang GT",
                image: "/assets/Jeep_Grand.png",
                category: "SPORTS",
                rating: 4.7,
                reviews: 320,
                seats: 4,
                doors: 2,
                bags: 1,
                transmission: "Manual",
                mileage: "Unlimited",
                fuel: "Petrol",
                features: ["Free Cancellation", "V8 Engine"],
                pricePerDay: 110.00,
                isTodaysSpecial: false,
                brand: "Ford",
                yearModel: "2023",
                fuelType: "Petrol",
                years: "2023",
                control: "Manual",
                wheels: "19-inch",
                sellingPrice: 50000,
                ownership: "new"
            },
            {
                name: "Mercedes C-Class",
                image: "/assets/BMW_5.png",
                category: "LUXURY",
                rating: 4.8,
                reviews: 250,
                seats: 5,
                doors: 4,
                bags: 2,
                transmission: "Automatic",
                mileage: "Unlimited",
                fuel: "Petrol",
                features: ["Free Cancellation", "Keyless Entry"],
                pricePerDay: 90.00,
                isTodaysSpecial: false,
                brand: "Mercedes",
                yearModel: "2023",
                fuelType: "Petrol",
                years: "2023",
                control: "Automatic",
                wheels: "18-inch",
                sellingPrice: 60000,
                ownership: "new"
            }
        ];
        for (const carData of initialCars) {
            const existingCar = cars.find(c => c.name === carData.name);
            if (existingCar) {
                await this.carsRepository.update(existingCar.car_id, carData);
            }
            else {
                await this.carsRepository.save(carData);
            }
        }
        console.log('Database synchronization complete.');
    }
    async findAll(page = 1, limit = 8, search) {
        let whereCondition = {};
        if (search) {
            whereCondition = [
                { brand: (0, typeorm_2.Like)(`%${search}%`) },
                { name: (0, typeorm_2.Like)(`%${search}%`) },
                { category: (0, typeorm_2.Like)(`%${search}%`) },
            ];
        }
        const [data, total] = await this.carsRepository.findAndCount({
            where: whereCondition,
            order: { car_id: 'DESC' },
            skip: (page - 1) * limit,
            take: limit,
        });
        return {
            data,
            total,
            page,
            lastPage: Math.ceil(total / limit),
        };
    }
    findOne(id) {
        return this.carsRepository.findOne({ where: { car_id: id } });
    }
    async create(createCarDto) {
        const car = this.carsRepository.create(createCarDto);
        return this.carsRepository.save(car);
    }
    async update(id, updateCarDto) {
        await this.carsRepository.update(id, updateCarDto);
        return this.findOne(id);
    }
};
exports.CarsService = CarsService;
exports.CarsService = CarsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(car_entity_1.Car)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], CarsService);
//# sourceMappingURL=cars.service.js.map