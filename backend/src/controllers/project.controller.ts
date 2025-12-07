// ============================================================================
// controllers/project.controller.ts (UPDATED)
// ============================================================================
import { Request, Response } from "express";
import { Project } from "../models/Project.model";
import { User } from "../models/User.model";
import { getTemplateBySlug } from "../config/template-registry";

export const createProject = async (req: Request, res: Response) => {
    try {
        const { name, description, templateCategory, templateSlug, settings } = req.body;
        const userId = (req as any).userId;

        // Validate template exists
        const template = getTemplateBySlug(templateCategory, templateSlug);
        if (!template) {
            return res.status(400).json({
                success: false,
                error: "Invalid template"
            });
        }

        const project = await Project.create({
            name,
            description,
            userId,
            templateCategory,
            templateSlug,
            settings: settings || {}
        });

        // Add project to user's projects array
        await User.findByIdAndUpdate(userId, {
            $push: { projects: project._id }
        });

        console.log(`✅ Project created: ${project._id}`);

        res.status(201).json({
            success: true,
            data: project
        });
    } catch (error: any) {
        console.error("❌ Create Project Error:", error);
        res.status(500).json({
            success: false,
            error: "Failed to create project",
            details: error.message
        });
    }
};

export const getUserProjects = async (req: Request, res: Response) => {
    try {
        const userId = (req as any).userId;
        
        const projects = await Project.find({ userId, isActive: true })
            .sort({ createdAt: -1 })
            .populate('pages');

        res.json({
            success: true,
            data: projects
        });
    } catch (error: any) {
        res.status(500).json({
            success: false,
            error: "Failed to fetch projects",
            details: error.message
        });
    }
};

export const getProjectById = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const userId = (req as any).userId;

        const project = await Project.findOne({ 
            _id: id, 
            userId,
            isActive: true 
        }).populate('pages');

        if (!project) {
            return res.status(404).json({
                success: false,
                error: "Project not found"
            });
        }

        res.json({
            success: true,
            data: project
        });
    } catch (error: any) {
        res.status(500).json({
            success: false,
            error: "Failed to fetch project",
            details: error.message
        });
    }
};

export const updateProject = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const userId = (req as any).userId;
        const updates = req.body;

        const project = await Project.findOneAndUpdate(
            { _id: id, userId },
            { ...updates, updatedAt: new Date() },
            { new: true }
        );

        if (!project) {
            return res.status(404).json({
                success: false,
                error: "Project not found"
            });
        }

        res.json({
            success: true,
            data: project
        });
    } catch (error: any) {
        res.status(500).json({
            success: false,
            error: "Failed to update project",
            details: error.message
        });
    }
};

export const deleteProject = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const userId = (req as any).userId;

        const project = await Project.findOneAndUpdate(
            { _id: id, userId },
            { isActive: false },
            { new: true }
        );

        if (!project) {
            return res.status(404).json({
                success: false,
                error: "Project not found"
            });
        }

        res.json({
            success: true,
            message: "Project deleted successfully"
        });
    } catch (error: any) {
        res.status(500).json({
            success: false,
            error: "Failed to delete project",
            details: error.message
        });
    }
};