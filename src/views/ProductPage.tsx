import { useParams } from "react-router";
import BreadCrumb from "../components/common/Breadcrumb";
import { Category } from "../constants/category";
import ProductView from "../components/products/ProductView";
import { useProducts } from "../hooks/useProducts";

export default function ProductPage() {
  const { id } = useParams();

  const { getProductById, isLoading } = useProducts();
  const product = getProductById(Number(id));

  return (
    <div className="inner-container">
      {!isLoading && (
        <>
          <BreadCrumb category={Category[product?.category as string]} crumb={product?.title} />
          <ProductView product={product} />
        </>
      )}
    </div>
  );
}
