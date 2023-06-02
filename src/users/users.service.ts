import { Injectable } from '@nestjs/common';

export type User = any;

@Injectable()
export class UsersService {
  private readonly users: User[];

  constructor() {
    this.users = [
      {
        userId: 1,
        username: 'prabu',
        password: 'Test@123',
      },
      {
        userId: 2,
        username: 'karthik',
        password: 'Test@123',
      },
      {
        userId: 3,
        username: 'meghna',
        password: 'Test@123',
      },
    ];
  }

  async findOne(username: string): Promise<User | undefined> {
    return this.users.find(user => user.username === username);
  }
}
