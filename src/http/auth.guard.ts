import {
  CanActivate,
  ExecutionContext,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { Request } from 'express';
import { AdminRepository } from '../model/admin.repository';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private readonly adminRepository: AdminRepository) {}
  async canActivate(context: ExecutionContext): Promise<boolean> {
    const request = context.switchToHttp().getRequest();
    const token = this.extractFromHttpQuery(request);

    if (!token) {
      throw new UnauthorizedException();
    }

    const admin = this.adminRepository.findOneByToken(token);

    if (!admin) {
      return false;
    }

    request.user = admin;
    return true;
  }

  private extractFromHttpQuery(request: Request): string {
    return request.query.token?.toString() || '';
  }
}
