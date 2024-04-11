export type Product = {
  id: number;
  thumbnail: string;
  brand: string;
  title: string;
  price: number;
};

export type ProductDetail = {
  description: string;
  images: string[];
} & Product;
