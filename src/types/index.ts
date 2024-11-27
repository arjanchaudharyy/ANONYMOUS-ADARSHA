export interface Post {
  id: string;
  content: string;
  imageUrl?: string;
  likes: string[];
  dislikes: string[];
  comments: Comment[];
  createdAt: number;
  userKey: string;
}

export interface Comment {
  id: string;
  content: string;
  createdAt: number;
  userKey: string;
}

export type SortOption = 'newest' | 'oldest' | 'mostLiked' | 'mostDisliked';

export interface AdminCredentials {
  username: string;
  password: string;
}