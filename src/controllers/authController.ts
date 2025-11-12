import { Request, Response } from "express";
import prisma from "../db/prisma";

export const getAuthInfo = async (
  req: Request,
  res: Response
): Promise<void> => {
  const { accessToken, shop } = req.body;

  if (!accessToken || !shop) {
    res
      .status(400)
      .json({ message: "access token and shop domain is required." });
    return;
  }

  console.log("req body: ", req.body);
  console.log("req header: ", req.headers);

  try {
    console.log("Authentication API");
    const existingShop = await prisma.shop.findUnique({
      where: { shopifyDomain: shop },
    });

    if (existingShop) {
      await prisma.shop.update({
        where: { shopifyDomain: shop },
        data: {
          accessToken,
          isActive: true,
          uninstalledAt: null,
        },
      });

      res.status(200).json({ message: "Shop Updated" });
      return;
    }

    const data = await prisma.shop.create({
      data: {
        shopifyDomain: shop,
        accessToken,
      },
    });

    res.status(201).json({ message: "shop installed", data });
  } catch (error) {
    console.error("Auth error:", error);
    res.status(500).json({ error: "Internal Server error" });
  }
};
