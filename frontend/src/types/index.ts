import type { LucideIcon } from 'lucide-react';

export interface StyleOptions {
  themes: Theme[];
  fonts: string[];
}

export interface Theme {
  name: string;
  primary: string;
  dark: boolean;
}

export interface ViewportSize {
  name: string;
  icon: LucideIcon;
  width: string;
  label: string;
}

export interface ApiResponse {
  success: boolean;
  html?: string;
  data?: any;
  error?: string;
  token?: string;
  user?: any;
  projects?: any[];
  pages?: any[];
}

export interface ValidationResponse {
  valid: boolean;
  errors: string[];
}

export interface User {
  id: string;
  email: string;
  name: string;
  createdAt: string;
}

// export interface Project {
//   id: string;
//   name: string;
//   description?: string;
//   userId: string;
//   createdAt: string;
//   updatedAt: string;
// }

// export interface Page {
//   id: string;
//   name: string;
//   html: string;
//   jsonData: any;
//   projectId?: string;
//   userId: string;
//   createdAt: string;
//   updatedAt: string;
// }

export type ViewMode = 'preview' | 'json';