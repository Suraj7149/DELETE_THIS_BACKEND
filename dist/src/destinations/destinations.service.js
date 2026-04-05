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
exports.DestinationsService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const destination_entity_1 = require("./entities/destination.entity");
const popular_destination_entity_1 = require("./entities/popular-destination.entity");
let DestinationsService = class DestinationsService {
    destinationsRepository;
    popularDestinationsRepository;
    constructor(destinationsRepository, popularDestinationsRepository) {
        this.destinationsRepository = destinationsRepository;
        this.popularDestinationsRepository = popularDestinationsRepository;
    }
    async onModuleInit() {
        await this.seed();
    }
    async seed() {
        const existingDestinations = await this.destinationsRepository.count();
        if (existingDestinations === 0) {
            const initialDestinations = [
                { destination_name: "Tokyo", image: "/assets/sample.jpg", rating: 4.5, reviews: 120, pricing: 399, country_name: "Japan", deals: 15, viewing: 20 },
                { destination_name: "Bangkok", image: "/assets/sample.jpg", rating: 4.7, reviews: 250, pricing: 349, country_name: "Thailand", deals: 12, viewing: 18 },
                { destination_name: "Singapore", image: "/assets/sample.jpg", rating: 4.8, reviews: 180, pricing: 520, country_name: "Singapore", deals: 8, viewing: 15 },
                { destination_name: "Dubai", image: "/assets/sample.jpg", rating: 4.6, reviews: 300, pricing: 590, country_name: "UAE", deals: 10, viewing: 22 },
                { destination_name: "Hong Kong", image: "/assets/sample.jpg", rating: 4.4, reviews: 142, pricing: 379, country_name: "China", deals: 6, viewing: 12 },
                { destination_name: "Seoul", image: "/assets/sample.jpg", rating: 4.5, reviews: 197, pricing: 710, country_name: "South Korea", deals: 14, viewing: 19 },
                { destination_name: "Bali", image: "/assets/sample.jpg", rating: 4.9, reviews: 528, pricing: 469, country_name: "Indonesia", deals: 20, viewing: 35 },
                { destination_name: "Kathmandu", image: "/assets/sample.jpg", rating: 4.6, reviews: 231, pricing: 349, country_name: "Nepal", deals: 5, viewing: 10 },
                { destination_name: "Paris", image: "/assets/sample.jpg", rating: 4.8, reviews: 842, pricing: 499, country_name: "France", deals: 18, viewing: 28 },
                { destination_name: "London", image: "/assets/sample.jpg", rating: 4.7, reviews: 654, pricing: 529, country_name: "UK", deals: 11, viewing: 16 },
                { destination_name: "Rome", image: "/assets/sample.jpg", rating: 4.9, reviews: 712, pricing: 549, country_name: "Italy", deals: 13, viewing: 21 },
                { destination_name: "Barcelona", image: "/assets/sample.jpg", rating: 4.7, reviews: 342, pricing: 519, country_name: "Spain", deals: 9, viewing: 14 },
            ];
            await this.destinationsRepository.save(initialDestinations);
        }
        const existingPopular = await this.popularDestinationsRepository.count();
        if (existingPopular === 0) {
            const initialPopularRoutes = [
                "Affordable Cars in New York", "Affordable Cars in Los Angeles", "Affordable Cars in Miami", "Affordable Cars in Chicago",
                "Affordable Cars in Las Vegas", "Affordable Cars in San Francisco", "Affordable Cars in Seattle", "Affordable Cars in Boston",
                "Affordable Cars in Orlando", "Affordable Cars in Denver", "Affordable Cars in Houston", "Affordable Cars in Phoenix",
                "Affordable Cars in Tokyo", "Affordable Cars in Dubai", "Affordable Cars in Sydney", "Affordable Cars in Rome",
                "Affordable Cars in Barcelona", "Affordable Cars in Amsterdam", "Affordable Cars in Bangkok", "Affordable Cars in Singapore",
                "Affordable Cars in Hong Kong", "Affordable Cars in London", "Affordable Cars in Mexico City", "Affordable Cars in Madrid",
                "Affordable Cars in Athens", "Affordable Cars in Istanbul", "Affordable Cars in Dublin", "Affordable Cars in Mumbai",
                "Affordable Cars in Berlin", "Affordable Cars in Paris", "Affordable Cars in Manila", "Affordable Cars in Sao Paulo",
                "Affordable Cars in Nairobi", "Affordable Cars in Lisbon", "Affordable Cars in Vienna", "Affordable Cars in Copenhagen",
                "Affordable Cars in Stockholm", "Affordable Cars in Seoul", "Affordable Cars in Prague", "Affordable Cars in Budapest"
            ].map(route => ({ route_name: route }));
            await this.popularDestinationsRepository.save(initialPopularRoutes);
        }
    }
    findAllDestinations() {
        return this.destinationsRepository.find();
    }
    findAllPopularDestinations() {
        return this.popularDestinationsRepository.find();
    }
};
exports.DestinationsService = DestinationsService;
exports.DestinationsService = DestinationsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(destination_entity_1.Destination)),
    __param(1, (0, typeorm_1.InjectRepository)(popular_destination_entity_1.PopularDestination)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository])
], DestinationsService);
//# sourceMappingURL=destinations.service.js.map