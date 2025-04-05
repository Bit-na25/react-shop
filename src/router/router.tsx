import { Routes, Route } from "react-router-dom";
import { memo } from "react";
import ErrorPage from "../views/ErrorPage";
import Index from "../views/Index";
import ProductListPage from "../views/ProductListPage";
import ProductPage from "../views/ProductPage";
import CartPage from "../views/CartPage";

const Router = () => {
  return (
    <Routes>
      <Route path="*" element={<ErrorPage />} />
      <Route path="/" element={<Index />} />
      <Route path="/products" element={<ProductListPage />} />
      <Route path="/product/:id" element={<ProductPage />} />
      <Route path="/cart" element={<CartPage />} />
    </Routes>
  );
};

export default memo(Router);
