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
exports.CabsRentalCardService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const cabs_rental_card_entity_1 = require("./entities/cabs-rental-card.entity");
let CabsRentalCardService = class CabsRentalCardService {
    cabsRentalCardRepository;
    constructor(cabsRentalCardRepository) {
        this.cabsRentalCardRepository = cabsRentalCardRepository;
    }
    async onModuleInit() {
        await this.seed();
    }
    async seed() {
        const count = await this.cabsRentalCardRepository.count();
        if (count === 0) {
            const defaultProviders = [
                {
                    name: 'RoadRunner Rentals',
                    code: 'RR',
                    rating: 4.2,
                    description: 'One of the leading car rental services offering vehicles for every journey.',
                    hq: 'Phoenix, Arizona',
                    fleet: '500+',
                    locations: '200',
                    phone: '1-800-555-0199',
                },
                {
                    name: 'Zoom Car Rentals',
                    code: 'ZC',
                    rating: 4.4,
                    description: 'Popular rental service with a wide range of vehicles for all occasions.',
                    hq: 'San Francisco, California',
                    fleet: '600+',
                    locations: '180',
                    phone: '1-800-777-0123',
                },
                {
                    name: 'DriveAway Rentals',
                    code: 'DA',
                    rating: 4.1,
                    description: 'Third largest car rental company known for competitive pricing.',
                    hq: 'Chicago, Illinois',
                    fleet: '400+',
                    locations: '150',
                    phone: '1-800-888-9999',
                },
                {
                    name: 'Happy Travels Rentals',
                    code: 'HT',
                    rating: 4.5,
                    description: 'Leading domestic rental service known for exceptional customer care and no hidden fees.',
                    hq: 'Austin, Texas',
                    fleet: '350+',
                    locations: '120',
                    phone: '1-800-444-5555',
                },
                {
                    name: 'Coastal Car Rentals',
                    code: 'CC',
                    rating: 4.6,
                    description: 'Major rental service focused on coastal regions with a reputation for reliability.',
                    hq: 'Miami, Florida',
                    fleet: '300+',
                    locations: '100',
                    phone: '1-800-252-1234',
                },
                {
                    name: 'Urban Drive Rentals',
                    code: 'UD',
                    rating: 4.3,
                    description: 'Affordable urban rental service known for stylish vehicles and flexible options.',
                    hq: 'New York City, New York',
                    fleet: '250+',
                    locations: '90',
                    phone: '1-800-555-6789',
                },
            ];
            await this.cabsRentalCardRepository.save(defaultProviders);
        }
    }
    findAll() {
        return this.cabsRentalCardRepository.find({ order: { id: 'ASC' } });
    }
    create(data) {
        const card = this.cabsRentalCardRepository.create(data);
        return this.cabsRentalCardRepository.save(card);
    }
    async update(id, data) {
        await this.cabsRentalCardRepository.update(id, data);
        return this.cabsRentalCardRepository.findOne({ where: { id } });
    }
    async remove(id) {
        await this.cabsRentalCardRepository.delete(id);
    }
};
exports.CabsRentalCardService = CabsRentalCardService;
exports.CabsRentalCardService = CabsRentalCardService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(cabs_rental_card_entity_1.CabsRentalCard)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], CabsRentalCardService);
//# sourceMappingURL=cabs-rental-card.service.js.map