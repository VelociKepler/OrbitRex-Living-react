import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./pages/Home/HomePage";
import Login from "./pages/Login/Login.tsx";
import AdminPage from "./pages/adminpage/adminpage.tsx";
import ProductPage from "./pages/products/ProductPage.tsx";
import ProductScreen from "./pages/products/ProductScreen.tsx";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/admin" element={<AdminPage />} />
        <Route path="/products" element={<ProductPage />} />
        <Route path="/products/:id" element={<ProductScreen />} />
      </Routes>
    </Router>
  );
}

export default App;
