import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Theme } from './types/theme';
import { Post } from './types/post';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient) {}

  // THEMES
  getTheme(id: string) {
    const { apiUrl } = environment;
    return this.http.get<Theme>(`${apiUrl}/themes/${id}`);
  }

  getThemes() {
    const { apiUrl } = environment;
    return this.http.get<Theme[]>(`${apiUrl}/themes`);
  }

  getRecentListings(limit?: number) {
    const { apiUrl } = environment;
    const limitFilter = limit ? `?limit=${limit}` : '';
    return this.http.get<Theme[]>(`${apiUrl}/themes/recentListings${limitFilter}`);
  }

  createTheme(themeName: string, transmission: string, year: string, price: string, imageUrl: string, description: string) {
    return this.http.post<Theme>('/api/themes', { themeName, transmission, year, price, imageUrl, description});
  }

  editListing(id: string, themeName: string, transmission: string, year: string, price: string, imageUrl: string, description: string) {
    const { apiUrl } = environment;
    return this.http.put<Theme>(`/api/themes/${id}`, { themeName, transmission, year, price, imageUrl, description});
  }
  // POSTS
  getPosts(limit?: number) {
    const { apiUrl } = environment;
    const limitFilter = limit ? `?limit=${limit}` : '';

    return this.http.get<Post[]>(`${apiUrl}/posts${limitFilter}`);
  }
}
