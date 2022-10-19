export interface UpdatePostDTO {
  id: string;
  title: string;
  content: string;
  isShareable?: boolean;
  likes: number;
}