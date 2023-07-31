import { Post } from './post';
import { UserId } from './user-id';

export interface Theme {
  subscribers: string[];
  posts: any; // string[] | Post[];
  themeName: string
  transmission: string
  year: string
  price: string
  imageUrl: string
  userId: UserId;
  created_at: string;
  updatedAt: string;
  description: string 
  _id: string
  __v: number;
}

export interface ThemeDetails {
  themeName: string
  transmission: string
  year: string
  price: string
  imageUrl: string
  description: string
}
