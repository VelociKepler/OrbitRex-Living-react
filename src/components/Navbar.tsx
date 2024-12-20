import { Link } from "react-router-dom";
import React, { useState, useContext } from "react";
import { ShopContext, ShopContextType } from "../contexts/ShopContext";
import { toast } from "react-toastify";

function Navbar() {


  // const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isUserMenuOpen, setUserMenuOpen] = useState(false);

  const useShopContext = (): ShopContextType => {
    const context = useContext(ShopContext);
    if (!context) {
      throw new Error("useShopContext must be used within a ShopContextProvider");
    }
    return context;
  };

  const {
    isLogin,
    isMenuOpen,
    setIsMenuOpen,
    cartCount,
    setIsLogin,
    setSearchProduct,
    searchProduct
  } = useShopContext();

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchProduct(event.target.value); // Update context with the input value
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleUserMenu = () => {
    setUserMenuOpen(!isUserMenuOpen);
  };
  return (
    <>
      {/* Desktop */}
      <nav className = " fixed bg-white top-0 hidden lg:w-full lg:h-20 lg:flex lg:items-center lg:justify-around lg:z-10 lg:text-black shadow-md">
        {/* Logo */}
        <Link to = "/">
          <div className = "lg:text-3xl lg:font-bold">OrbitRex Living</div>
        </Link>

        {/* Menu */}
        <ul className = "lg:flex lg:gap-10 lg:font-bold">
          <li>
            <Link
              to = "/"
              className = "lg:border-b-2 lg:border-transparent lg:hover:border-orange-500 lg:transition-all lg:duration-200"
            >
              HOME
            </Link>
          </li>
          <li>
            <Link
              to = "/products"
              className = "lg:border-b-2 lg:border-transparent lg:hover:border-orange-500 lg:transition-all lg:duration-200"
            >
              SHOP
            </Link>
          </li>
          <li>
            <Link
              to = "/contact"
              className = "lg:border-b-2 lg:border-transparent lg:hover:border-orange-500 lg:transition-all lg:duration-200"
            >
              CONTACT
            </Link>
          </li>
          <li>
            <Link
              to = "/about"
              className = "lg:border-b-2 lg:border-transparent lg:hover:border-orange-500 lg:transition-all lg:duration-200"
            >
              ABOUT
            </Link>
          </li>
        </ul>

        {/* Search bar & Profile */}
        <div className = "lg:relative">
          <input
            type = "text"
            className = "lg:px-5 lg:py-2 lg:rounded-full lg:pr-10 lg:text-black lg:outline-none border-2"
            placeholder = "Search"
            onChange = {handleInputChange}
            value = {searchProduct}
          />
          <button className = "lg:absolute lg:top-1/2 lg:right-28 lg:transform lg:-translate-y-2.5 lg:text-gray-300 lg:px-5 lg:rounded-full">
            <i className = "fa-solid fa-magnifying-glass"></i>
          </button>
          <Link
            to = "/cart"
            className = "relative"
          >
            <i className = "fa-solid fa-cart-shopping lg:text-3xl lg:ml-7 lg:translate-y-1"></i>
            {cartCount > 0 && (
              <span className = "absolute top-[-12px] right-[-10px] bg-orange-500 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                {cartCount}
              </span>
            )}
          </Link>
          <Link to = "/login">
            <i className = {`fa-solid fa-circle-user lg:text-3xl lg:ml-7 lg:translate-y-1 ${isLogin ? "hidden" : ""}`}></i>
          </Link>
          {isLogin && (
            <>
              <button onClick = {toggleUserMenu}>
                <i className = "fa-solid fa-circle-user lg:text-3xl lg:ml-7 lg:translate-y-1"></i>
              </button>
              <div
                className = {`absolute top-12 right-0 rounded-lg shadow-black shadow-2xl h-60 w-60 bg-white text-black p-8 transition-transform duration-1000 z-40 ${
                  isUserMenuOpen ? "" : "hidden"
                }`}
              >
                <ul className = "flex flex-col gap-2">
                  <li className = "font-bold">
                    <Link to = "/profile">Profile</Link>
                  </li>
                  <li className = "font-bold">
                    <button
                      onClick = {() => {
                        setIsLogin(false); // Set isLogin to false
                        toast.success("Logged out successfully!"); // Optional toast notification
                      }}
                      className = "text-red-500 hover:text-red-700"
                    >
                      Logout
                    </button>
                  </li>
                </ul>
              </div>
            </>
          )}
        </div>
      </nav>

      {/* Tablet & Moblie */}
      <nav className = "fixed lg:hidden top-0 w-full h-20 z-10 bg-white flex items-center justify-between px-2 text-black shadow-md">

        {/* Logo */}
        <Link
          to = "/"
          className = "hidden md:block"
        >
          <div className = "w-full">
            <h1 className = "flex text-2xl font-bold whitespace-nowrap">
              OrbitRex Living
            </h1>
          </div>
        </Link>

        {/* Search bar */}
        <div className = "relative flex items-center w-[250px] md:w-[300px]">
          <input
            type = "text"
            className = "py-2 rounded-full w-full text-black outline-none pl-10 border-2"
            placeholder = "Search"
          />
          <button className = "absolute right-5 text-gray-300">
            <i className = "fa-solid fa-magnifying-glass"></i>
          </button>
        </div>

        {/* Right Button */}
        <div className = "flex gap-4">
          <Link to = "">
            <i className = "fa-solid fa-cart-shopping text-3xl md:text-4xl"></i>
          </Link>
          <button onClick = {toggleMenu}>
            <i className = "fa-solid fa-bars text-3xl md:text-4xl"></i>
          </button>
        </div>

        {/* Dropdown Menu */}
        <div
          className = {`fixed top-0 right-0 h-full w-60 bg-white text-black rounded-md p-8 transition-transform duration-300 z-40 ${isMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          {/* Close Button */}
          <button
            onClick = {toggleMenu}
            className = "absolute top-5 right-5 text-3xl text-gray-300 hover:text-black"
          >
            <i className = "fa-solid fa-times"></i>
          </button>

          {/* Menu Items */}
          <ul className = "mt-16 space-y-8 text-center">
            <li>
              <Link
                to = "/profile"
                className = "text-2xl hover:text-orange-500"
              >
                Profile
              </Link>
            </li>
            <li>
              <Link
                to = "/"
                className = "text-2xl hover:text-orange-500"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to = "/"
                className = "text-2xl hover:text-orange-500"
              >
                Shop
              </Link>
            </li>
            <li>
              <Link
                to = "/contact"
                className = "text-2xl hover:text-orange-500"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
