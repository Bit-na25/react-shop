import Slider from "../components/common/Slider";
import ProductList from "../components/products/ProductList";

const Index = () => {
  return (
    <div>
      <Slider />
      <div className="inner-container">
        <ProductList category="fashion" limit="4" />
        <ProductList category="accessory" limit="4" />
        <ProductList category="digital" limit="4" />
      </div>
    </div>
  );
};

export default Index;
