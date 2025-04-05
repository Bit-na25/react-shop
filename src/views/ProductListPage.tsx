import { useNavigate } from "react-router";
import ProductList from "../components/products/ProductList";
import BreadCrumb from "../components/common/Breadcrumb";
import { MENUS } from "../constants/category";
import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";

const VALID_CATEGORIES = Object.keys(MENUS);

const ProductListPage = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const category = searchParams.get("category");

  useEffect(() => {
    if (!category || !VALID_CATEGORIES.includes(category.toUpperCase())) {
      navigate("/404");
    }
  }, [category, navigate]);

  return (
    <div className="inner-container">
      <BreadCrumb category={MENUS.HOME} crumb={category as string} />
      <ProductList category={category} />
    </div>
  );
};

export default ProductListPage;
