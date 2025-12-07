import type { User } from '../types';

export const authService = {
  isAuthenticated: (): boolean => {
    return localStorage.getItem('token') !== null;
  },
  
  getToken: (): string | null => {
    return localStorage.getItem('token');
  },
  
  setToken: (token: string): void => {
    localStorage.setItem('token', token);
  },
  
  clearToken: (): void => {
    localStorage.removeItem('token');
  },
  
  getUserFromToken: (): User | null => {
    const token = localStorage.getItem('token');
    if (!token) return null;
    
    try {
      // JWT tokens are in format: header.payload.signature
      const payload = token.split('.')[1];
      const decoded = JSON.parse(atob(payload));
      return decoded.user;
    } catch (error) {
      console.error('Error decoding token:', error);
      return null;
    }
  },
  
  validateToken: (): boolean => {
    const token = localStorage.getItem('token');
    if (!token) return false;
    
    try {
      const payload = token.split('.')[1];
      const decoded = JSON.parse(atob(payload));
      const currentTime = Date.now() / 1000;
      
      return decoded.exp > currentTime;
    } catch (error) {
      return false;
    }
  }
};