import { Router } from "express";
import {
  addWishlistItem,
  getWishlistItems,
  removeItemFromWishlist,
} from "../controllers/wishlistController";

const router = Router();

router.post("/", addWishlistItem);

router.get("/:shopifyDomain/:customerId", getWishlistItems);

router.delete("/:shopifyDomain/:customerId/:variantId", removeItemFromWishlist);

export default router;
