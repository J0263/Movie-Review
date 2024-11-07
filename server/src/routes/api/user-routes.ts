import express from 'express';
import type { request, response } from 'express';
import { Router } from 'express';
import { User } from '../models/index.ts'

const router = express.Router();
router.get('/', async (_req: Request, res: Response) => {
    try {
      const users = await User.findAll({
        attributes: { exclude: ['password'] }
      });
      res.json(users);
    } catch (error: any) {
      res.status(500).json({ message: error.message });
    }
  });

  router.post('/', async (req: Request, res: Response) => {
    const { username, email, password } = req.body;
    try {
      const newUser = await User.create({ username, email, password });
      res.status(201).json(newUser);
    } catch (error: any) {
      res.status(400).json({ message: error.message });
    }
  });

  export { router as userRouter };