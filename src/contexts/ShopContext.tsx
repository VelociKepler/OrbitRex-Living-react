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
}

// Create the context with proper typing
export const ShopContext = createContext<ShopContextType | undefined>(undefined);

// Define the props type for the provider component
interface ShopContextProviderProps {
  children: ReactNode;
}

export const ShopContextProvider: React.FC<ShopContextProviderProps> = ({ children }) => {
  // Global State
  const backendUrl = import.meta.env.REACT_APP_BACKEND_URL || "http://localhost:3001";
  const [isSignIn, setIsSignIn] = useState<boolean>(false);
  const [isLogin, setIsLogin] = useState<boolean>(false);
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  //จะทำอะไรเพิ่ม

  // Context value
  const value: ShopContextType = {
    isSignIn,
    setIsSignIn,
    backendUrl,
    isLogin,
    setIsLogin,
    isMenuOpen,
    setIsMenuOpen
  };

  return (
    <ShopContext.Provider value = {value}>
      {children}
    </ShopContext.Provider>
  );
};

export default ShopContextProvider;