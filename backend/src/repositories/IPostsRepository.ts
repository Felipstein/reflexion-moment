import { Post } from "../entities/Post";

export interface IPostsRepository {

  findAll(): Promise<Post[]>;

  findById(id: string): Promise<Post | undefined | null>;

  findPostsByUserId(userId: string): Promise<Post[] | undefined>;

  save(post: Post): Promise<Post>;

  update(post: Post): Promise<Post | undefined | null>;

  delete(id: string): Promise<void>;

}