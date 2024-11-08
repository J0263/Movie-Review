import { Router } from 'express';
import apiRoutes from './api/login';
//./api/login.js
const router = Router();

// Prefix all routes defined in the api directory with `/api`
router.use('/api', apiRoutes);

export default router;