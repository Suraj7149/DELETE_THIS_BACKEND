"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AwsS3Service = void 0;
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const client_s3_1 = require("@aws-sdk/client-s3");
const uuid_1 = require("uuid");
const path = __importStar(require("path"));
let AwsS3Service = class AwsS3Service {
    configService;
    s3Client;
    bucketName;
    region;
    constructor(configService) {
        this.configService = configService;
        this.region = this.configService.get('AWS_REGION') || this.configService.get('AWS_DEFAULT_REGION') || 'us-east-1';
        this.bucketName = this.configService.get('AWS_S3_BUCKET') || 'your-bucket-name';
        const s3Config = {
            region: this.region,
        };
        const accessKeyId = this.configService.get('AWS_ACCESS_KEY_ID');
        const secretAccessKey = this.configService.get('AWS_SECRET_ACCESS_KEY');
        if (accessKeyId && secretAccessKey) {
            s3Config.credentials = {
                accessKeyId,
                secretAccessKey,
            };
        }
        this.s3Client = new client_s3_1.S3Client(s3Config);
    }
    async uploadFile(file) {
        const ext = path.extname(file.originalname);
        const uniqueFilename = `cars/${(0, uuid_1.v4)()}${ext}`;
        const accessKeyId = this.configService.get('AWS_ACCESS_KEY_ID');
        const secretAccessKey = this.configService.get('AWS_SECRET_ACCESS_KEY');
        if (accessKeyId && secretAccessKey) {
            const command = new client_s3_1.PutObjectCommand({
                Bucket: this.bucketName,
                Key: uniqueFilename,
                Body: file.buffer,
                ContentType: file.mimetype,
            });
            try {
                await this.s3Client.send(command);
                return `https://${this.bucketName}.s3.${this.region}.amazonaws.com/${uniqueFilename}`;
            }
            catch (error) {
                console.error('Error uploading file to S3:', error);
                throw new common_1.InternalServerErrorException('Failed to upload image to S3');
            }
        }
        else {
            try {
                const fs = require('fs');
                const uploadDir = path.join(process.cwd(), '..', 'car-rental', 'public', 'assets', 'cars');
                const filePath = path.join(uploadDir, `${uniqueFilename.split('/')[1]}`);
                if (!fs.existsSync(uploadDir)) {
                    fs.mkdirSync(uploadDir, { recursive: true });
                }
                fs.writeFileSync(filePath, file.buffer);
                return `/assets/cars/${uniqueFilename.split('/')[1]}`;
            }
            catch (error) {
                console.error('Error saving file locally:', error);
                throw new common_1.InternalServerErrorException('Failed to save image locally');
            }
        }
    }
};
exports.AwsS3Service = AwsS3Service;
exports.AwsS3Service = AwsS3Service = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [config_1.ConfigService])
], AwsS3Service);
//# sourceMappingURL=aws-s3.service.js.map