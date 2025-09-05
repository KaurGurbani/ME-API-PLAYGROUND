import { Router } from 'express';
const router = Router();
router.get('/', (req, res) => {
  const { skill } = req.query;
  const projects = [
    { title: "AI Bot", skills: ["python", "llm"] },
    { title: "Web API", skills: ["typescript", "node"] }
  ];
  if (skill) return res.json(projects.filter(p => p.skills.includes(skill as string)));
  res.json(projects);
});
export default router;