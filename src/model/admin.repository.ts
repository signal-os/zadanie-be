import { AdminModel } from './admin.model';

export class AdminRepository {
  findOneByToken(token: string): AdminModel | null {
    throw new Error('Method not implemented on production.');
  }
}
