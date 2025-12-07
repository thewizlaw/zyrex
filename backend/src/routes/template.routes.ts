
// ============================================================================
// routes/template.routes.ts (NEW)
// ============================================================================
import { Router } from "express";
import { 
    getAllTemplateCategories, 
    getTemplatesByCategory,
    getTemplateDetails 
} from "../controllers/template.controller";

const router = Router();

router.get('/templates/categories', getAllTemplateCategories);
router.get('/templates/category/:category', getTemplatesByCategory);
router.get('/templates/:category/:slug', getTemplateDetails);

export default router;