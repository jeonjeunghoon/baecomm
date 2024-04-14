export type Product = {
  id: number;
  thumbnail: string;
  brand: string;
  title: string;
  price: number;
};

export type ProductDetails = {
  description: string;
  images: string[];
} & Product;
