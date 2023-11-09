import { Prisma } from '@prisma/client';
import prisma from './prisma';

const userData: Prisma.UserCreateInput[] = [
  {
    name: 'Alice',
    email: 'alice@prisma.io',
  },
  {
    name: 'Nilu',
    email: 'nilu@prisma.io',
  },
  {
    name: 'Mahmoud',
    email: 'mahmoud@prisma.io',
  },
];

export const insertDefaultUser = async () => {
  return prisma.user.createMany({ data: userData });
};
