import { Router } from "express";
import { healthCheck, getComponents, getExample } from "../controllers/utility.controller";

const router = Router();

router.get('/health', healthCheck);
router.get('/components', getComponents);
router.get('/example', getExample);

export default router;