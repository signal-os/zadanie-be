import { INestApplication } from '@nestjs/common';
import { Test } from '@nestjs/testing';
import { describe } from 'node:test';
import * as request from 'supertest';
import { AppModule } from '../app.module';
import { AdminRepository } from '../model/admin.repository';
import { UsersRepository } from '../model/users.repository';

describe('UsersController', () => {
  let app: INestApplication;

  const usersRepository: UsersRepository = {
    getUsers: () => [
      {
        id: 1,
        name: 'John',
        email: 'x@x.com',
        created_at: '2021-01-01',
        updated_at: '2021-01-01',
      },
      {
        id: 2,
        name: 'Doe',
        email: 'a@a.com',
        created_at: '2021-01-01',
        updated_at: '2021-01-01',
      },
    ],
  };

  const adminRepository: AdminRepository = {
    findOneByToken: (token: string) => {
      if (token !== 'secret') {
        return null;
      }

      return {
        id: 1,
        personal_token: 'secret',
        created_at: '2021-01-01',
        updated_at: '2021-01-01',
      };
    },
  };

  beforeEach(async () => {
    const moduleRef = await Test.createTestingModule({
      imports: [AppModule],
    })
      .overrideProvider(UsersRepository)
      .useValue(usersRepository)
      .overrideProvider(AdminRepository)
      .useValue(adminRepository)
      .compile();

    app = moduleRef.createNestApplication();
    await app.init();
  });
  describe('get users', () => {
    it('should return a list of users', () => {
      const userRepository = app.get(UsersRepository);
      return request(app.getHttpServer())
        .get(`/users?token=secret`)
        .expect(200)
        .expect({
          resources: userRepository.getUsers(),
        });
    });
  });
});
