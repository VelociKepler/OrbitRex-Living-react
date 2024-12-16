import axios from "axios";
import React, { createContext, useState, ReactNode } from "react";

// Define the context state type
export interface ShopContextType {
  isSignIn: boolean;
  setIsSignIn: React.Dispatch<React.SetStateAction<boolean>>;
  backendUrl: string;
  isLogin: boolean;
  setIsLogin: React.Dispatch<React.SetStateAction<boolean>>;
  isMenuOpen: boolean;
  setIsMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
  cartItems: CartItem[]; // เพิ่ม cartItems เพื่อให้สามารถเข้าถึงตะกร้าสินค้าได้
  setCartItems: React.Dispatch<React.SetStateAction<CartItem[]>>;
  addToCart: (itemId: string, color: string) => Promise<void>; // เพิ่ม addTocart ฟังก์ชัน
}

// Create the context with proper typing
export const ShopContext = createContext<ShopContextType | undefined>(undefined);

// Define the props type for the provider component
interface ShopContextProviderProps {
  children: ReactNode;
}

interface CartItem {
  productId: string;
  name: string;
  price: number;
  quantity: number;
  color: string;
}

export const ShopContextProvider: React.FC<ShopContextProviderProps> = ({ children }) => {
  // Global State
  const backendUrl = import.meta.env.REACT_APP_BACKEND_URL || "http://localhost:3001";
  const [isSignIn, setIsSignIn] = useState<boolean>(false);
  const [isLogin, setIsLogin] = useState<boolean>(false);
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  const addToCart = async (productId: string, color: string) => {
    const userId = "user123"; // หรือนำข้อมูล userId จาก context หรือ state ที่มีอยู่
    try {
      await axios.post(`${backendUrl}/api/cart/add-to-cart`, { userId, productId, color });
      
      // เพิ่มสินค้าไปใน cartItems
      setCartItems((prevItems) => {
        const itemExists = prevItems.some(item => item.productId === productId && item.color === color);
        if (itemExists) {
          return prevItems.map(item =>
            item.productId === productId && item.color === color
              ? { ...item, quantity: item.quantity + 1 }
              : item
          );
        } else {
          return [...prevItems, { productId, name: "Product Name", price: 100, quantity: 1, color }];
        }
      });
    } catch (error) {
      console.error("Error adding to cart:", error);
    }
  };

  //จะทำอะไรเพิ่ม

  // Context value
  const value: ShopContextType = {
    isSignIn,
    setIsSignIn,
    backendUrl,
    isLogin,
    setIsLogin,
    isMenuOpen,
    setIsMenuOpen,
    cartItems,
    setCartItems,
    addToCart
  };

  return (
    <ShopContext.Provider value = {value}>
      {children}
    </ShopContext.Provider>
  );
};

export default ShopContextProvider;