// ============================================================================
// controllers/page.controller.ts (FIXED)
// ============================================================================
import { Request, Response } from "express";
import { Page } from "../models/Page.model";
import { Project } from "../models/Project.model";
import { getTemplateBySlug } from "../config/template-registry";

export const savePage = async (req: Request, res: Response) => {
    try {
        const {
            title,
            slug,
            projectId,
            templateCategory,
            templateSlug,
            pageType,
            data
        } = req.body;
        
        const userId = (req as any).userId;

        console.log('💾 Saving page:', { title, slug, projectId, pageType });

        // Validate project
        const project = await Project.findOne({ _id: projectId, userId });
        if (!project) {
            console.error('❌ Project not found:', projectId);
            return res.status(404).json({
                success: false,
                error: "Project not found"
            });
        }

        // Validate template
        const template = getTemplateBySlug(templateCategory, templateSlug);
        if (!template) {
            console.error('❌ Template not found:', { templateCategory, templateSlug });
            return res.status(400).json({
                success: false,
                error: "Invalid template"
            });
        }

        // Generate HTML
        const html = template.engine(data);

        // Create or update page
        const page = await Page.findOneAndUpdate(
            { projectId, slug, userId }, // Add userId to filter
            {
                title,
                slug,
                projectId,
                userId,
                templateCategory,
                templateSlug,
                pageType,
                data,
                html,
                updatedAt: new Date()
            },
            { upsert: true, new: true }
        );

        console.log('✅ Page saved:', page._id);

        // Add page to project if new (check if it's not already in the array)
        if (!project.pages.includes(page._id)) {
            await Project.findByIdAndUpdate(projectId, {
                $addToSet: { pages: page._id } // Use $addToSet to avoid duplicates
            });
            console.log('📌 Page added to project:', projectId);
        }

        res.json({
            success: true,
            data: page
        });
    } catch (error: any) {
        console.error("❌ Save Page Error:", error);
        res.status(500).json({
            success: false,
            error: "Failed to save page",
            details: error.message
        });
    }
};

export const getPageById = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const userId = (req as any).userId;

        console.log('🔍 Fetching page by ID:', id);

        const page = await Page.findOne({ _id: id, userId });
        
        if (!page) {
            console.error('❌ Page not found:', id);
            return res.status(404).json({
                success: false,
                error: "Page not found"
            });
        }

        console.log('✅ Page found:', page.title);

        res.json({
            success: true,
            data: page
        });
    } catch (error: any) {
        console.error("❌ Get Page Error:", error);
        res.status(500).json({
            success: false,
            error: "Failed to fetch page",
            details: error.message
        });
    }
};

export const getUserPages = async (req: Request, res: Response) => {
    try {
        const userId = (req as any).userId;
        const { projectId } = req.query;

        console.log('📄 Fetching pages for user:', userId);
        if (projectId) {
            console.log('🔍 Filtering by projectId:', projectId);
        }

        const filter: any = { userId };
        if (projectId) {
            filter.projectId = projectId;
        }

        const pages = await Page.find(filter)
            .sort({ updatedAt: -1 })
            .select('_id title slug pageType projectId templateCategory templateSlug data html createdAt updatedAt');

        console.log(`✅ Found ${pages.length} pages`);
        if (pages.length > 0) {
            console.log('📋 Pages:', pages.map(p => ({ 
                id: p._id, 
                title: p.title, 
                type: p.pageType,
                project: p.projectId 
            })));
        }

        res.json({
            success: true,
            data: pages,
            count: pages.length
        });
    } catch (error: any) {
        console.error("❌ Get Pages Error:", error);
        res.status(500).json({
            success: false,
            error: "Failed to fetch pages",
            details: error.message
        });
    }
};

export const deletePage = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const userId = (req as any).userId;

        console.log('🗑️ Deleting page:', id);

        const page = await Page.findOneAndDelete({ _id: id, userId });
        
        if (!page) {
            console.error('❌ Page not found for deletion:', id);
            return res.status(404).json({
                success: false,
                error: "Page not found"
            });
        }

        // Remove from project
        await Project.findByIdAndUpdate(page.projectId, {
            $pull: { pages: page._id }
        });

        console.log('✅ Page deleted:', page.title);

        res.json({
            success: true,
            message: "Page deleted successfully",
            data: { id: page._id, title: page.title }
        });
    } catch (error: any) {
        console.error("❌ Delete Page Error:", error);
        res.status(500).json({
            success: false,
            error: "Failed to delete page",
            details: error.message
        });
    }
};

// ============================================================================
// NEW: Get all pages for a specific project (with better filtering)
// ============================================================================
export const getProjectPages = async (req: Request, res: Response) => {
    try {
        const { projectId } = req.params;
        const userId = (req as any).userId;

        console.log('📄 Fetching pages for project:', projectId);

        // Verify project exists and belongs to user
        const project = await Project.findOne({ _id: projectId, userId });
        if (!project) {
            console.error('❌ Project not found:', projectId);
            return res.status(404).json({
                success: false,
                error: "Project not found"
            });
        }

        // Find all pages for this project
        const pages = await Page.find({ 
            projectId: projectId,
            userId: userId 
        })
        .sort({ updatedAt: -1 })
        .select('_id title slug pageType projectId templateCategory templateSlug data html createdAt updatedAt');

        console.log(`✅ Found ${pages.length} pages for project ${project.name}`);
        if (pages.length > 0) {
            console.log('📋 Pages:', pages.map(p => ({ 
                id: p._id, 
                title: p.title, 
                type: p.pageType 
            })));
        }

        res.json({
            success: true,
            data: pages,
            count: pages.length,
            project: {
                id: project._id,
                name: project.name
            }
        });
    } catch (error: any) {
        console.error("❌ Get Project Pages Error:", error);
        res.status(500).json({
            success: false,
            error: "Failed to fetch project pages",
            details: error.message
        });
    }
};