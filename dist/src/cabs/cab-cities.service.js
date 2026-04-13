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
exports.CabCitiesService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const cab_city_entity_1 = require("./entities/cab-city.entity");
let CabCitiesService = class CabCitiesService {
    cabCityRepository;
    constructor(cabCityRepository) {
        this.cabCityRepository = cabCityRepository;
    }
    async onModuleInit() {
        await this.seed();
    }
    async seed() {
        const defaultCities = [
            {
                slug: "new-york",
                name: "New York",
                hero: {
                    title: "Affordable Car Rentals in New York",
                    description: "Discover budget-friendly car rentals from DestinationXY to the USA and enjoy savings on your next adventure. Reserve your economical vehicle today for a hassle-free travel experience.",
                    image: "/assets/Cabs_hero_section_New_York.png",
                },
                bannerTitle: "Best Car Rentals for Affordable Round-Trip Journeys to New York",
                infoSection: {
                    title: "Book Affordable Car Rentals in New York & Save Big",
                    description: [
                        "Searching for budget-friendly car rentals in DestinationXY? We have you covered with the best rates from leading rental companies. Whether it's for a business trip or a relaxing vacation, our exclusive deals ensure you get the most bang for your buck.",
                        "With flexible rental options, clear pricing, and 24/7 customer support, we make your travel experience smooth. Compare rates, select your preferred vehicle, and book confidently knowing you're securing the best deal available.",
                        "Start planning your journey today and see why countless travelers rely on us for their car rental needs. From major cities across the USA to DestinationXY, we connect you to the road.",
                    ],
                    whyRentTitle: "Why Rent a Car in New York?",
                    benefits: [
                        "Economical solutions for travelers on diverse budgets.",
                        "Access to well-maintained and reliable vehicles.",
                        "Exemplary service with 24/7 client assistance.",
                        "Expedient and straightforward car rental reservation process.",
                        "Flexibility to explore at your own pace.",
                    ],
                    image: "/assets/New_York_info_section.png",
                },
                countries: [
                    { name: "France", image: "/assets/Image (France).png", buttonText: "Discover more in France" },
                    { name: "Indonesia", image: "/assets/Image (Japan).png", buttonText: "Explore Indonesia" },
                    { name: "Japan", image: "/assets/Image (Japan).png", buttonText: "Experience Japan" },
                    { name: "United Arab Emirates", image: "/assets/Image (Japan).png", buttonText: "Visit United Arab Emirates" },
                ],
                blogTips: [
                    {
                        title: "10 Essential Travel Tips for Renting a Car for the First Time",
                        description: "Focusing on your first car rental can be stressful. We've compiled 10 essential tips to help you navigate the process seamlessly.",
                        image: "/assets/Image (10 Essential Travel Tips for First-Time Flyers).png",
                    },
                    {
                        title: "How to Choose the Right Rental Car for Your Trip",
                        description: "From solo adventurers to family vacations, choosing the right car is crucial for a comfortable journey. Here's our guide.",
                        image: "/assets/Image (How to Pack Smart for International Travel).png",
                    },
                    {
                        title: "Budget Car Rentals: Save Money on Your Next Vehicle Hire",
                        description: "Don't let rental costs break your budget. Learn the best strategies for finding affordable car hire for your upcoming trip.",
                        image: "/assets/Image (Budget Travel_ Save Money on Your Next Trip).png",
                    },
                ],
                faqs: [
                    {
                        question: "How do I find affordable car rentals in Blue Factory?",
                        answer: "You can find affordable car rentals by comparing rates on our platform and booking in advance.",
                    },
                    {
                        question: "What car rental categories are available in NY?",
                        answer: "We offer a wide range of categories including economy, luxury, SUVs, and more.",
                    },
                    {
                        question: "Is insurance included in the car rental cost?",
                        answer: "Insurance options vary. Please check the specific rental details for comprehensive coverage info.",
                    },
                    {
                        question: "Are there any hidden charges?",
                        answer: "We pride ourselves on transparent pricing. All standard fees are disclosed during the booking process.",
                    },
                ],
            }
        ];
        await this.cabCityRepository.clear();
        for (const city of defaultCities) {
            const exists = await this.cabCityRepository.findOne({ where: { slug: city.slug } });
            if (!exists) {
                await this.cabCityRepository.save(city);
            }
        }
    }
    async findBySlug(slug) {
        return this.cabCityRepository.findOne({ where: { slug } });
    }
    async findAll() {
        return this.cabCityRepository.find();
    }
    async create(data) {
        const city = this.cabCityRepository.create(data);
        return this.cabCityRepository.save(city);
    }
    async update(id, data) {
        await this.cabCityRepository.update(id, data);
        return this.cabCityRepository.findOne({ where: { id } });
    }
    async remove(id) {
        await this.cabCityRepository.delete(id);
    }
};
exports.CabCitiesService = CabCitiesService;
exports.CabCitiesService = CabCitiesService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(cab_city_entity_1.CabCity)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], CabCitiesService);
//# sourceMappingURL=cab-cities.service.js.map