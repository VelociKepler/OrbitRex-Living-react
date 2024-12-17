import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./pages/Home/HomePage";
import Login from "./pages/Login/Login.tsx";
import AdminPage from "./pages/adminpage/adminpage.tsx";
import ProductPage from "./pages/products/ProductPage.tsx";
import UserProfilePage from "./pages/UserProfile/UserProfilePage.tsx";
import ChatWidget from "./components/ChatWidget.tsx";
import Contact from "./pages/Contact/Contact.tsx";
import ProductScreen from "./pages/products/ProductScreen.tsx";
import { ToastContainer } from "react-toastify";
import Cart from "./pages/Cart/Cart.tsx";
import CheckoutPage from "./pages/Checkout/CheckoutPage.tsx";

export const backendUrl = import.meta.env.VITE_BACKEND_URL;

function App() {
  return (
    <>
      <ToastContainer autoClose = {500} />
      <Router>
        <ChatWidget />
        <Routes>
          <Route
            path = "/"
            element = {<HomePage />}
          />
          <Route
            path = "/login"
            element = {<Login />}
          />
          <Route
            path = "/contact"
            element = {<Contact />}
          />
          <Route
            path = "/profile"
            element = {<UserProfilePage />}
          />
          <Route
            path = "/profile/:id"
            element = {<UserProfilePage />}
          />
          <Route
            path = "/admin"
            element = {<AdminPage />}
          />
          <Route
            path = "/products"
            element = {<ProductPage />}
          />
          <Route
            path = "/products/:id"
            element = {<ProductScreen />}
          />
          <Route
            path = "/cart"
            element = {<Cart />}
          />
          <Route
            path = "/checkout"
            element = {<CheckoutPage />}
          />
        </Routes>
      </Router>
    </>
  );
}

export default App;
