import { uuidProvider } from "../providers/UUIDProvider";

export class Post {

  readonly id: string;

  readonly title: string;
  readonly content: string;
  readonly likes?: number;
  readonly isShareable?: boolean;
  readonly userId: string;

  constructor({ title, content, likes, isShareable, userId }: Omit<Post, 'id'>, id?: string) {
    this.id = id ?? uuidProvider.uuid();
    this.title = title;
    this.content = content;
    this.likes = likes ?? 0;
    this.isShareable = isShareable ?? true;
    this.userId = userId;
  }

}