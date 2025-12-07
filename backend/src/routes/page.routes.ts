// ============================================================================
// routes/page.routes.ts (UPDATED with better endpoints)
// ============================================================================
import { Router } from "express";
import { 
    savePage,
    getPageById,
    getUserPages,
    deletePage,
    getProjectPages
} from "../controllers/page.controller";
import { authenticate } from "../middleware/auth.middleware";

const router = Router();

// Create/Update a page
router.post('/pages', authenticate, savePage);

// Get all pages for current user (with optional projectId query param)
router.get('/pages', authenticate, getUserPages);

// Get all pages for a specific project (NEW - more explicit endpoint)
router.get('/projects/:projectId/pages', authenticate, getProjectPages);

// Get single page by ID
router.get('/pages/:id', authenticate, getPageById);

// Delete a page
router.delete('/pages/:id', authenticate, deletePage);

export default router;