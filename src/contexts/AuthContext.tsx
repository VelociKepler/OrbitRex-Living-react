// AuthContext.tsx
import { createContext, useState, useContext, ReactNode } from "react";
import axios from "axios";

interface User {
  username: string;
  // Add other user properties as needed (e.g., email, ID, etc.)
}

interface AuthContextValue {
  isSignIn: boolean;
  setIsSignIn: (value: boolean) => void;
  userData: User | null;
  setUserData: (data: User | null) => void;
  signIn: () => Promise<void>; // Sign-in function
  signOut: () => void;      // Sign-out function
}

const AuthContext = createContext<AuthContextValue>({
  isSignIn: false,
  setIsSignIn: () => {
  },
  userData: null,
  setUserData: () => {
  },
  signIn: async () => {
  }, // Placeholder, replace with your actual sign-in logic
  signOut: () => {
  }
});


interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [isSignIn, setIsSignIn] = useState<boolean>(false);
  const [userData, setUserData] = useState<User | null>(null);

  const signIn = async (email: string, password: string) => {
    try {
      const url = import.meta.env.VITE_BACKEND_URL; // Use environment variable for backend URL

      // Send login request with email and password
      const response = await axios.post(`${url}/api/user/login`, {
        email,
        password
      });

      // If login is successful, update global state
      if (response.status === 200) {
        setIsSignIn(true);
        setUserData(response.data.user || {}); // Assume response contains `data.user`
        localStorage.setItem("authToken", response.data.token); // Optional: store the token
      } else {
        console.error("Login failed:", response.data.message || "Unknown error");
        setIsSignIn(false);
      }
    } catch (error) {
      console.error("An error occurred during login:", error);
      setIsSignIn(false);
    }
  };

  const signOut = () => {
    setIsSignIn(false);
    setUserData(null);
    // other logout logic like clearing tokens or cookies
  };

  const value = { isSignIn, setIsSignIn, userData, setUserData, signIn, signOut };

  return (
    <AuthContext.Provider value = {value}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);