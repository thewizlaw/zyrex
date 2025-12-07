// ============================================================================
// config/template-registry.ts
// Template Registry - Central Configuration for All Templates
// ============================================================================

import { assemblePage as ecommerceMinimalEngine } from '../template-engine';
import { SYSTEM_PROMPT } from './constants';

export interface TemplateConfig {
    name: string;
    slug: string;
    category: string;
    description: string;
    thumbnail: string;
    isPremium: boolean;
    price: number;
    tags: string[];
    engine: (data: any) => string;
    systemPrompt: string;
    supportedPageTypes: string[];
}

export interface CategoryConfig {
    name: string;
    slug: string;
    description: string;
    icon: string;
    templates: TemplateConfig[];
}

// ============================================================================
// TEMPLATE REGISTRY
// ============================================================================

export const TemplateRegistry: Record<string, CategoryConfig> = {
    // ========================================================================
    // ECOMMERCE CATEGORY
    // ========================================================================
    ecommerce: {
        name: 'Ecommerce',
        slug: 'ecommerce',
        description: 'Professional online store templates',
        icon: '🛒',
        templates: [
            {
                name: 'Minimal Store',
                slug: 'minimal',
                category: 'ecommerce',
                description: 'Clean and modern ecommerce template with advanced features',
                thumbnail: '/thumbnails/ecommerce-minimal.jpg',
                isPremium: false,
                price: 0,
                tags: ['ecommerce', 'modern', 'minimal', 'product', 'cart'],
                engine: ecommerceMinimalEngine,
                systemPrompt: SYSTEM_PROMPT,
                supportedPageTypes: [
                    'homepage',
                    'category',
                    'product',
                    'cart',
                    'checkout',
                    'account'
                ]
            }
        ]
    }
};

// ============================================================================
// HELPER FUNCTIONS
// ============================================================================

export const getTemplateBySlug = (category: string, slug: string): TemplateConfig | null => {
    const categoryConfig = TemplateRegistry[category];
    if (!categoryConfig) return null;
    
    return categoryConfig.templates.find(t => t.slug === slug) || null;
};

export const getAllCategories = (): CategoryConfig[] => {
    return Object.values(TemplateRegistry);
};

export const getCategoryTemplates = (category: string): TemplateConfig[] => {
    return TemplateRegistry[category]?.templates || [];
};

export const getAllTemplates = (): TemplateConfig[] => {
    return Object.values(TemplateRegistry).flatMap(cat => cat.templates);
};