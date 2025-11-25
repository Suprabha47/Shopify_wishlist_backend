import axios, { AxiosInstance } from "axios";

/**
 * Creates a configured Axios instance for Shopify API requests
 * @param shopifyStoreUrl - The Shopify store URL
 * @param shopifyAccessToken - The Shopify access token
 * @returns Configured Axios instance
 */
export const shopifyApiClient = (
  shopifyStoreUrl: string,
  shopifyAccessToken: string
): AxiosInstance => {
  if (!shopifyStoreUrl || !shopifyAccessToken) {
    throw new Error("Shopify store URL and access token are required");
  }

  return axios.create({
    baseURL: shopifyStoreUrl,
    headers: {
      "X-Shopify-Access-Token": shopifyAccessToken,
      "Content-Type": "application/json",
    },
    timeout: 30000,
  });
};
