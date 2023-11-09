import prisma from './prisma';

export class TestingHelper {
  // static async clear<T>(_model: Model<T>) {
  //   try {
  //     await _model.deleteMany({});
  //   } catch (e) {
  //     console.trace(e);
  //   }
  //   return;
  // }

  static async clean() {
    await prisma.$transaction([
      prisma.user.deleteMany(),
      prisma.post.deleteMany(),
      prisma.comment.deleteMany(),
    ]);
  }
}
