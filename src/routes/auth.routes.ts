import { Router } from "express";
import { getAuthInfo } from "../controllers/authController";

const router = Router();

router.post("/", getAuthInfo);

export default router;
