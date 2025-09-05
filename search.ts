import { Router } from 'express';
const router = Router();
router.get('/', (req, res) => {
  const { q } = req.query;
  res.json({ results: [`Searching for ${q}`] });
});
export default router;