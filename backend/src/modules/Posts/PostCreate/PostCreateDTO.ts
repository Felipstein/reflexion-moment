export interface PostCreateDTO {
  title: string;
  content: string;
  isShareable?: boolean;
  userId: string;
}