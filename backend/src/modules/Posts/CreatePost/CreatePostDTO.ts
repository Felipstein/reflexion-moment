export interface CreatePostDTO {
  title: string;
  content: string;
  isShareable?: boolean;
  userId: string;
}