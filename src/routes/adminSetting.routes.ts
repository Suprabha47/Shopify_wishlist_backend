import express from "express";
import {
  saveSettings,
  getSettings,
} from "../controllers/adminSettingController";
import { verifyShopifyProxy } from "../middleware/auth.middleware";

const router = express.Router();
// router.use(verifyApiKey);
// router.use(verifyShopifyProxy);
router.post("/save", saveSettings);
router.get("/", getSettings);

export default router;
