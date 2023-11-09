import { type Prisma } from '@prisma/client';
import prisma from 'cores/db/mongodb/prisma';

export class UserRepository {
  constructor(private _prisma = prisma.user) {}

  public create(input: Prisma.UserCreateInput) {
    return this._prisma.create({ data: input });
  }

  public findAll() {
    return this._prisma.findMany({
      include: {
        posts: true,
      },
    });
  }

  public findById(id: string) {
    return this._prisma.findUnique({
      where: {
        id,
      },
      include: {
        posts: true,
      },
    });
  }
}
