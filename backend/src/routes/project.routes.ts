import { Router } from "express";
import { 
    createProject,
    getUserProjects,
    getProjectById,
    updateProject,
    deleteProject
} from "../controllers/project.controller";
import { authenticate } from "../middleware/auth.middleware";

const router = Router();

router.post('/projects', authenticate, createProject);
router.get('/projects', authenticate, getUserProjects);
router.get('/projects/:id', authenticate, getProjectById);
router.put('/projects/:id', authenticate, updateProject);
router.delete('/projects/:id', authenticate, deleteProject);

export default router;