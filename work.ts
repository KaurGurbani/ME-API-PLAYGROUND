import { Router } from 'express';
const router = Router();
router.get('/', (_, res) => res.json([{ company: "Predusk Technology", role: "Intern" }]));
export default router;