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
  cartCount: number;
  setCartCount: React.Dispatch<React.SetStateAction<number>>;
  cartItem: { id: string; color: string; quantity: number }[];
  setCartItem: React.Dispatch<React.SetStateAction<{ id: string; color: string; quantity: number }[]>>;
  updateCartItem: (id: string, updatedProperties: Partial<{ color: string; quantity: number }>) => void;
  removeCartItem: (id: string) => void; // Add the remove function to the context
  searchProduct: string;
  setSearchProduct: React.Dispatch<React.SetStateAction<string>>;
}

// Create the context with proper typing
export const ShopContext = createContext<ShopContextType | undefined>(undefined);

// Define the props type for the provider component
interface ShopContextProviderProps {
  children: ReactNode;
}

// Update ShopContextProvider
export const ShopContextProvider: React.FC<ShopContextProviderProps> = ({ children }) => {
  // Global State
  const backendUrl = import.meta.env.REACT_APP_BACKEND_URL || "http://localhost:3001"; // Set backend URL
  const [isSignIn, setIsSignIn] = useState<boolean>(false); // Sign-in status
  const [isLogin, setIsLogin] = useState<boolean>(false); // Login status
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false); // Menu state
  const [cartCount, setCartCount] = useState<number>(0); // Cart count
  const [cartItem, setCartItem] = useState<{ id: string; color: string; quantity: number }[]>([]); // Cart items
  const [searchProduct, setSearchProduct] = useState<string>("");

  /**
   * Update a cart item by `id` (e.g., change its `color` or `quantity` properties).
   */
  const updateCartItem = (id: string, updatedProperties: Partial<{ color: string; quantity: number }>) => {
    setCartItem((prevCartItems) =>
      prevCartItems.map((item) =>
        item.id === id
          ? {
            ...item, // Keep existing properties
            ...updatedProperties // Only update passed properties
          }
          : item
      )
    );
  };

  /**
   * Remove a cart item by `id`.
   */
  const removeCartItem = (id: string) => {
    setCartItem((prevCartItems) => prevCartItems.filter((item) => item.id !== id)); // Filter out the item
    // Optionally update the cart count
    setCartCount((prevCartCount) => Math.max(0, prevCartCount - 1));
  };

  // Context value
  const value: ShopContextType = {
    isSignIn,
    setIsSignIn,
    backendUrl,
    isLogin,
    setIsLogin,
    isMenuOpen,
    setIsMenuOpen,
    cartCount,
    setCartCount,
    cartItem,
    setCartItem,
    updateCartItem, // Add the update function to the context
    removeCartItem, // Add the remove function to the context
    searchProduct,
    setSearchProduct
  };

  return <ShopContext.Provider value = {value}>{children}</ShopContext.Provider>;
};

export default ShopContextProvider;