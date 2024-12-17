export interface Size {
  length: number;
  width: number;
  thickness: number;
  height?: number;
}

export interface ICartItem {
  id: string;
  quantity: number;
  color?: string; // Optional if not all items are color-dependent
}

export interface IProduct {
  _id: number; // Assuming ObjectId is represented as a string
  name: string;
  description: string;
  category: string;
  pricing: number;
  stock: {
    total: number;
    status: "in_stock" | "out_of_stock";
  };
  images: string[]; // URLs or paths
  color: string[];
  rating: number;
  numReviews: number;
  metadata: {
    brand: string;
    weight: number;
    dimensions: {
      width: number;
      height: number;
      length: number;
    };
  };
}
