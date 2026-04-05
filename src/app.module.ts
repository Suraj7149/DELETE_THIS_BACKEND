import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CarsModule } from './cars/cars.module';
import { SalesEnquiriesModule } from './sales-enquiries/sales-enquiries.module';
import { LocationsModule } from './locations/locations.module';
import { CabCitiesModule } from './cabs/cab-cities.module';
import { DestinationsModule } from './destinations/destinations.module';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { DashboardModule } from './dashboard/dashboard.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: '.env',
    }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: (configService: ConfigService) => ({
        type: 'mysql',
        host: configService.get<string>('DB_HOST', 'localhost'),
        port: configService.get<number>('DB_PORT', 3307),
        username: configService.get<string>('DB_USER', 'root'),
        password: configService.get<string>('DB_PASSWORD', 'root'),
        database: configService.get<string>('DB_DATABASE', 'car_rental_db'),
        entities: [__dirname + '/**/*.entity{.ts,.js}'],
        synchronize: true, // Note: Set to false in production
      }),
      inject: [ConfigService],
    }),
    CarsModule,
    SalesEnquiriesModule,
    LocationsModule,
    CabCitiesModule,
    DestinationsModule,
    AuthModule,
    UsersModule,
    DashboardModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
