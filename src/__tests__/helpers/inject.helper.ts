import prisma from './prisma';

export class TestingHelper {
  static async clean() {
    await prisma.$transaction([
      prisma.user.deleteMany(),
      prisma.post.deleteMany(),
      prisma.comment.deleteMany(),
    ]);
  }
}
