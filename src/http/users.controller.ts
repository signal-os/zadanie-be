import { Controller, Get, UseGuards } from '@nestjs/common';
import { UsersRepository } from '../model/users.repository';
import { AuthGuard } from './auth.guard';
import { UsersHttpResponse } from './users.http-response';

@Controller(`users`)
@UseGuards(AuthGuard)
export class UsersController {
  constructor(private readonly userRepository: UsersRepository) {}

  @Get()
  getUsers(): UsersHttpResponse {
    return {
      resources: this.userRepository.getUsers(),
    };
  }
}
