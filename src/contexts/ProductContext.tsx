import { createContext, useState, useEffect, ReactNode, useContext } from "react";
import { IProduct } from "../components/products/Product.type";
import { fetchProducts } from "../services/productService";
import { toast } from "react-toastify";
import { backendUrl } from "../App.tsx";

// Define ProductContext type
interface ProductContextType {
  products: IProduct[];
}

export const ProductContext = createContext<ProductContextType | undefined>(undefined);

// Product Provider to Wrap Application
export const ProductProvider = ({ children }: { children: ReactNode }) => {
  const [products, setProducts] = useState<IProduct[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (products.length === 0) {
          const productList = await fetchProducts(backendUrl); // Fetch products from API
          setProducts(productList);
        }
      } catch (error: any) {
        toast.error("Unable to fetch products!");
        console.error(error.message);
      }
    };

    fetchData();
  }, [products]);

  return (
    <ProductContext.Provider value = {{ products }}>
      {children}
    </ProductContext.Provider>
  );
};

// useProducts hook for easy access
export const useProducts = () => {
  const context = useContext(ProductContext);
  if (!context) {
    throw new Error("useProducts must be used within a ProductProvider");
  }
  return context;
};