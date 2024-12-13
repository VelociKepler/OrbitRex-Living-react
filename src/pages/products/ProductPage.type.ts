export interface Size {
  length: number;
  width: number;
  thickness: number;
  height?: number;
}

export interface Product {
  _id: number;
  id: number;
  name: string;
  image: string[];
  description: string;
  detail?: string;
  brand: string;
  category: string;
  price: number;
  countInStock: number;
  rating: number;
  numReviews: number;
  productNumber?: string;
  size: Size;
}
