import { prisma } from '../../database/PrismaClient';
import { Post } from '../../entities/Post';
import { IPostsRepository } from './../IPostsRepository';
export class PrismaPostsRepository implements IPostsRepository {

  async findAll(): Promise<Post[]> {
    const posts = await prisma.post.findMany();

    return posts.map(post => ({
      ...post,
      likes: post.likes.toNumber(),
    }));
  }

  async findById(id: string): Promise<Post | null | undefined> {
    const post = await prisma.post.findFirst({
      where: { id }
    });

    if (!post) {
      return post;
    }

    return {
      ...post,
      likes: post?.likes.toNumber(),
    };
  }

  async findPostsByUserId(userId: string): Promise<Post[]> {
    const posts = await prisma.post.findMany({
      where: { userId },
    });

    return posts.map(post => ({
      ...post,
      likes: post.likes.toNumber(),
    }));
  }

  async save(post: Post): Promise<Post> {
    const postCreated = await prisma.post.create({
      data: post
    });

    return {
      ...postCreated,
      likes: postCreated.likes.toNumber(),
    };
  }

  async update(post: Post): Promise<Post | null | undefined> {
    const postUpdated = await prisma.post.update({
      where: { id: post.id },
      data: post,
    });

    return {
      ...postUpdated,
      likes: postUpdated.likes.toNumber(),
    }
  }

  async delete(id: string): Promise<void> {
    await prisma.post.delete({
      where: { id },
    });
  }

}