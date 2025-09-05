import { Router } from "express";

const router = Router();

// Full skills list
router.get("/", (_, res) => {
  res.json([
    { name: "python", level: "advanced" },
    { name: "typescript", level: "intermediate" },
    { name: "docker", level: "beginner" }
  ]);
});

// Only top skills (names only)
router.get("/top", (_, res) => {
  res.json(["python", "typescript", "docker"]);
});

export default router;
