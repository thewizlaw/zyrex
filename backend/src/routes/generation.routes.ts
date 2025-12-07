import { Router } from "express";
import { 
    generateWebsite, 
    renderFromJSON
} from "../controllers/generation.controller";
import { authenticate } from "../middleware/auth.middleware";

const router = Router();

router.post('/generate', authenticate, generateWebsite);
router.post('/render', authenticate, renderFromJSON);

export default router;