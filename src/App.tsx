import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./pages/Home/HomePage";
import Login from "./pages/Login/Login.tsx";
import AdminPage from "./pages/adminpage/adminpage.tsx";
import ProductPage from "./pages/products/ProductPage.tsx";
import UserProfilePage from "./pages/UserProfile/UserProfilePage.tsx";
import ChatWidget from "./components/ChatWidget.tsx";

function App() {
  return (
    <Router>
      <ChatWidget/>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/profile" element={<UserProfilePage />} />
        <Route path="/profile/:id" element={<UserProfilePage />} />
        <Route path="/admin" element={<AdminPage />} />
        <Route path="/products" element={<ProductPage />}>
          {/*<Route path="/product/:id" element={<ProductScreen />} />*/}
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
