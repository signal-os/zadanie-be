import { Module } from '@nestjs/common';
import { UsersController } from './http/users.controller';
import { AdminRepository } from './model/admin.repository';
import { UsersRepository } from './model/users.repository';

@Module({
  imports: [],
  controllers: [UsersController],
  providers: [UsersRepository, AdminRepository],
})
export class AppModule {}
