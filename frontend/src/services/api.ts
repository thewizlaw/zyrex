// ============================================================================
// src/services/api.ts - Updated with better page fetching
// ============================================================================

const API_BASE_URL = 'http://localhost:5000/api';

const getAuthHeaders = () => {
    const token = localStorage.getItem('token');
    return {
        'Content-Type': 'application/json',
        ...(token ? { 'Authorization': `Bearer ${token}` } : {})
    };
};

// ============================================================================
// AUTH API
// ============================================================================
export const authApi = {
    async signup(userData: { email: string; password: string; name: string }) {
        const response = await fetch(`${API_BASE_URL}/auth/signup`, {
            method: 'POST',
            headers: getAuthHeaders(),
            body: JSON.stringify(userData),
        });
        if (!response.ok) throw new Error('Signup failed');
        const json = await response.json();

        if (json?.data?.token) {
            localStorage.setItem("token", json.data.token);
        }

        return json;
    },

    async login(credentials: { email: string; password: string }) {
        const response = await fetch(`${API_BASE_URL}/auth/login`, {
            method: 'POST',
            headers: getAuthHeaders(),
            body: JSON.stringify(credentials),
        });
        if (!response.ok) throw new Error('Login failed');
        const json = await response.json();

        if (json?.data?.token) {
            localStorage.setItem("token", json.data.token);
        }

        return json;
    },

    async getProfile() {
        const response = await fetch(`${API_BASE_URL}/auth/profile`, {
            headers: getAuthHeaders(),
        });
        if (!response.ok) throw new Error('Failed to get profile');
        return response.json();
    },
};

// ============================================================================
// TEMPLATE API
// ============================================================================
export const templateApi = {
    async getAllCategories() {
        const response = await fetch(`${API_BASE_URL}/templates/categories`, {
            headers: getAuthHeaders(),
        });
        if (!response.ok) throw new Error('Failed to fetch categories');
        return response.json();
    },

    async getTemplatesByCategory(category: string) {
        const response = await fetch(`${API_BASE_URL}/templates/category/${category}`, {
            headers: getAuthHeaders(),
        });
        if (!response.ok) throw new Error('Failed to fetch templates');
        return response.json();
    },

    async getTemplateDetails(category: string, slug: string) {
        const response = await fetch(`${API_BASE_URL}/templates/${category}/${slug}`, {
            headers: getAuthHeaders(),
        });
        if (!response.ok) throw new Error('Failed to fetch template');
        return response.json();
    },
};

// ============================================================================
// PROJECT API
// ============================================================================
export const projectApi = {
    async create(projectData: {
        name: string;
        description?: string;
        templateCategory: string;
        templateSlug: string;
        settings?: any;
    }) {
        const response = await fetch(`${API_BASE_URL}/projects`, {
            method: 'POST',
            headers: getAuthHeaders(),
            body: JSON.stringify(projectData),
        });
        if (!response.ok) throw new Error('Failed to create project');
        return response.json();
    },

    async getAll() {
        const response = await fetch(`${API_BASE_URL}/projects`, {
            headers: getAuthHeaders(),
        });
        if (!response.ok) throw new Error('Failed to fetch projects');
        return response.json();
    },

    async getById(projectId: string) {
        const response = await fetch(`${API_BASE_URL}/projects/${projectId}`, {
            headers: getAuthHeaders(),
        });
        if (!response.ok) throw new Error('Failed to fetch project');
        return response.json();
    },

    async update(projectId: string, updates: any) {
        const response = await fetch(`${API_BASE_URL}/projects/${projectId}`, {
            method: 'PUT',
            headers: getAuthHeaders(),
            body: JSON.stringify(updates),
        });
        if (!response.ok) throw new Error('Failed to update project');
        return response.json();
    },

    async delete(projectId: string) {
        const response = await fetch(`${API_BASE_URL}/projects/${projectId}`, {
            method: 'DELETE',
            headers: getAuthHeaders(),
        });
        if (!response.ok) throw new Error('Failed to delete project');
        return response.json();
    },

    // NEW: Get pages for a specific project
    async getPages(projectId: string) {
        const response = await fetch(`${API_BASE_URL}/projects/${projectId}/pages`, {
            headers: getAuthHeaders(),
        });
        if (!response.ok) throw new Error('Failed to fetch project pages');
        return response.json();
    },
};

// ============================================================================
// PAGE API (UPDATED)
// ============================================================================
export const pageApi = {
    async save(pageData: {
        title: string;
        slug: string;
        projectId: string;
        templateCategory: string;
        templateSlug: string;
        pageType: string;
        data: any;
    }) {
        const response = await fetch(`${API_BASE_URL}/pages`, {
            method: 'POST',
            headers: getAuthHeaders(),
            body: JSON.stringify(pageData),
        });
        if (!response.ok) throw new Error('Failed to save page');
        return response.json();
    },

    // Method 1: Get all user pages with optional projectId filter
    async getAll(projectId?: string) {
        const url = projectId 
            ? `${API_BASE_URL}/pages?projectId=${projectId}`
            : `${API_BASE_URL}/pages`;
        
        const response = await fetch(url, {
            headers: getAuthHeaders(),
        });
        if (!response.ok) throw new Error('Failed to fetch pages');
        return response.json();
    },

    // Method 2: Get pages for specific project (better performance)
    async getByProject(projectId: string) {
        const response = await fetch(`${API_BASE_URL}/projects/${projectId}/pages`, {
            headers: getAuthHeaders(),
        });
        if (!response.ok) throw new Error('Failed to fetch project pages');
        return response.json();
    },

    async getById(pageId: string) {
        const response = await fetch(`${API_BASE_URL}/pages/${pageId}`, {
            headers: getAuthHeaders(),
        });
        if (!response.ok) throw new Error('Failed to fetch page');
        return response.json();
    },

    async delete(pageId: string) {
        const response = await fetch(`${API_BASE_URL}/pages/${pageId}`, {
            method: 'DELETE',
            headers: getAuthHeaders(),
        });
        if (!response.ok) throw new Error('Failed to delete page');
        return response.json();
    },
};

// ============================================================================
// GENERATION API
// ============================================================================
export const generationApi = {
    async generatePage(data: {
        projectId: string;
        templateCategory: string;
        templateSlug: string;
        prompt: string;
        style?: {
          primary_color: string;
          dark_mode: boolean;
          font_family: string;
      };
    }) {
        const response = await fetch(`${API_BASE_URL}/generate`, {
            method: 'POST',
            headers: getAuthHeaders(),
            body: JSON.stringify(data),
        });
        if (!response.ok) throw new Error('Generation failed');
        return response.json();
    },

    async renderFromJSON(data: {
        data: any;
        templateCategory: string;
        templateSlug: string;
    }) {
        const response = await fetch(`${API_BASE_URL}/render`, {
            method: 'POST',
            headers: getAuthHeaders(),
            body: JSON.stringify(data),
        });
        if (!response.ok) throw new Error('Rendering failed');
        return response.json();
    },
};

// ============================================================================
// TYPES
// ============================================================================
export interface ApiResponse<T = any> {
  success: boolean;
  data?: T;
  error?: string;
  details?: string;
  message?: string;
  count?: number;
}

export interface Template {
  name: string;
  slug: string;
  category: string;
  description: string;
  thumbnail: string;
  isPremium: boolean;
  price: number;
  tags: string[];
  supportedPageTypes: string[];
}

export interface Category {
  name: string;
  slug: string;
  description: string;
  icon: string;
  templateCount: number;
}

export interface Project {
  _id: string;
  name: string;
  description?: string;
  userId: string;
  templateCategory: string;
  templateSlug: string;
  pages: string[];
  settings: {
      primaryColor?: string;
      secondaryColor?: string;
      fontFamily?: string;
      darkMode?: boolean;
  };
  createdAt: string;
  updatedAt: string;
}

export interface Page {
  _id: string;
  title: string;
  slug: string;
  projectId: string;
  userId: string;
  templateCategory: string;
  templateSlug: string;
  pageType: string;
  data: any;
  html?: string;
  isPublished: boolean;
  createdAt: string;
  updatedAt: string;
}