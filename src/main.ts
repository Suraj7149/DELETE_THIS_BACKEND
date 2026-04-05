import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { UsersService } from './users/users.service';
import * as bcrypt from 'bcryptjs';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors(); // allow all origins for dev

  // Seeding the admin user
  const usersService = app.get(UsersService);
  const adminEmail = 'admin@admin.com';
  const adminPassword = 'Admin@123';

  const existingAdmin = await usersService.findOneByEmail(adminEmail);
  if (!existingAdmin) {
    console.log('Seeding admin user...');
    const hashedPassword = await bcrypt.hash(adminPassword, 10);
    await usersService.create({
      email: adminEmail,
      password: hashedPassword,
    });
    console.log('Admin user seeded successfully!');
  } else {
    console.log('Admin user already exists.');
  }

  await app.listen(process.env.PORT ?? 3001);
}
bootstrap();
