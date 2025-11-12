export interface WishlistItemInput {
  shopifyDomain: string;
  customerId: string;
  productId: string;
  variantId: string;
  title: string;
  handle?: string;
  image?: string;
  price?: number;
}

export interface WishlistParams {
  shopifyDomain: string;
  customerId: string;
  variantId?: string;
}
