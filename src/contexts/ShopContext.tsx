/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-refresh/only-export-components */
import { createContext, useEffect, useState, useCallback } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export const ShopContext = createContext();

const ShopContextProvider = ({ children }) => {
  const [search, setSearch] = useState("");
  const [showSearch, setShowSearch] = useState(false);
  const [cartItems, setCartItems] = useState({});
  const [products, setProducts] = useState([]);
  const [token, setToken] = useState("");
  const navigate = useNavigate();

  // Constants
  const currency = "฿";
  const deliveryFee = 10;
  const backendUrl = import.meta.env.VITE_BACKEND_URL;

  /**
   * Handles API response errors gracefully
   */
  const handleError = (error) => {
    console.error(error);
    toast.error(error.message || "Something went wrong.");
  };

  // Add to Cart Functionality
  const addToCart = useCallback(
    async (itemId, size) => {
      if (!size) {
        toast.error("Please select a product size.");
        return;
      }

      // Update local cart state
      setCartItems((prevCart) => {
        const updatedCart = structuredClone(prevCart);
        if (!updatedCart[itemId]) updatedCart[itemId] = {};
        updatedCart[itemId][size] = (updatedCart[itemId][size] || 0) + 1;
        return updatedCart;
      });

      // Sync with server
      if (token) {
        try {
          await axios.post(
            `${backendUrl}/api/cart/add`,
            { itemId, size },
            { headers: { token } }
          );
        } catch (error) {
          handleError(error);
        }
      }
    },
    [token, backendUrl]
  );

  // Get Total Cart Item Count
  const getCartCount = useCallback(() => {
    return Object.values(cartItems).reduce(
      (total, itemData) => total + Object.values(itemData).reduce((sum, qty) => sum + qty, 0),
      0
    );
  }, [cartItems]);

  // Update Cart Item Quantity
  const updateQuantity = useCallback(
    async (itemId, size, quantity) => {
      // Update local cart state
      setCartItems((prevCart) => {
        const updatedCart = structuredClone(prevCart);
        if (updatedCart[itemId]) updatedCart[itemId][size] = quantity;
        return updatedCart;
      });

      // Sync with server
      if (token) {
        try {
          await axios.post(
            `${backendUrl}/api/cart/update`,
            { itemId, size, quantity },
            { headers: { token } }
          );
        } catch (error) {
          handleError(error);
        }
      }
    },
    [token, backendUrl]
  );

  // Get Total Price of Cart Items
  const getCartAmount = useCallback(() => {
    return Object.entries(cartItems).reduce((total, [itemId, sizes]) => {
      const item = products.find((product) => product._id === itemId);
      if (item) {
        total += Object.values(sizes).reduce((sum, qty) => sum + qty * item.price, 0);
      }
      return total;
    }, 0);
  }, [cartItems, products]);

  // Fetch Product Data
  const getProductsData = useCallback(async () => {
    try {
      const response = await axios.get(`${backendUrl}/api/product/list`);
      if (response.data.success) {
        setProducts(response.data.products.reverse());
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      handleError(error);
    }
  }, [backendUrl]);

  // Fetch User Cart Data
  const getUserCart = useCallback(
    async (userToken) => {
      try {
        const response = await axios.post(
          `${backendUrl}/api/cart/get`,
          {},
          { headers: { token: userToken } }
        );
        if (response.data.success) {
          setCartItems(response.data.cartData);
        }
      } catch (error) {
        handleError(error);
      }
    },
    [backendUrl]
  );

  // Initialize Products and Cart Data on Load
  useEffect(() => {
    getProductsData();
  }, [getProductsData]);

  // Sync Token and Fetch Cart Data
  useEffect(() => {
    const storedToken = localStorage.getItem("token");
    if (!token && storedToken) {
      setToken(storedToken);
    }
    if (token) {
      getUserCart(token);
    }
  }, [token, getUserCart]);

  const contextValue = {
    products,
    currency,
    deliveryFee,
    search,
    setSearch,
    showSearch,
    setShowSearch,
    cartItems,
    addToCart,
    setCartItems,
    getCartCount,
    updateQuantity,
    getCartAmount,
    navigate,
    backendUrl,
    setToken,
    token
  };

  return <ShopContext.Provider value = {contextValue}>{children}</ShopContext.Provider>;
};

export default ShopContextProvider;