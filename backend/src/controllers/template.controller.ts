// ============================================================================
// controllers/template.controller.ts
// ============================================================================
import { Request, Response } from "express";
import { Template } from "../models/Template.model";
import { getAllCategories, getCategoryTemplates, getTemplateBySlug } from "../config/template-registry";

export const getAllTemplateCategories = async (req: Request, res: Response) => {
    try {
        const categories = getAllCategories();
        
        res.json({
            success: true,
            data: categories.map(cat => ({
                name: cat.name,
                slug: cat.slug,
                description: cat.description,
                icon: cat.icon,
                templateCount: cat.templates.length
            }))
        });
    } catch (error: any) {
        res.status(500).json({
            success: false,
            error: "Failed to fetch categories",
            details: error.message
        });
    }
};

export const getTemplatesByCategory = async (req: Request, res: Response) => {
    try {
        const { category } = req.params;
        const templates = getCategoryTemplates(category);
        
        if (!templates || templates.length === 0) {
            return res.status(404).json({
                success: false,
                error: "Category not found or has no templates"
            });
        }
        
        res.json({
            success: true,
            data: templates.map(t => ({
                name: t.name,
                slug: t.slug,
                category: t.category,
                description: t.description,
                thumbnail: t.thumbnail,
                isPremium: t.isPremium,
                price: t.price,
                tags: t.tags,
                supportedPageTypes: t.supportedPageTypes
            }))
        });
    } catch (error: any) {
        res.status(500).json({
            success: false,
            error: "Failed to fetch templates",
            details: error.message
        });
    }
};

export const getTemplateDetails = async (req: Request, res: Response) => {
    try {
        const { category, slug } = req.params;
        const template = getTemplateBySlug(category, slug);
        
        if (!template) {
            return res.status(404).json({
                success: false,
                error: "Template not found"
            });
        }
        
        res.json({
            success: true,
            data: {
                name: template.name,
                slug: template.slug,
                category: template.category,
                description: template.description,
                thumbnail: template.thumbnail,
                isPremium: template.isPremium,
                price: template.price,
                tags: template.tags,
                supportedPageTypes: template.supportedPageTypes
            }
        });
    } catch (error: any) {
        res.status(500).json({
            success: false,
            error: "Failed to fetch template",
            details: error.message
        });
    }
};
