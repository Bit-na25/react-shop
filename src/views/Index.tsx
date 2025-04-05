import Slider from "../components/common/Slider";
import ProductList from "../components/products/ProductList";

const SHOW_COUNT = 4;
const Index = () => {
  return (
    <div>
      <Slider />
      <div className="inner-container">
        <ProductList category="fashion" limit={SHOW_COUNT} mode="scroll" />
        <ProductList category="accessory" limit={SHOW_COUNT} mode="scroll" />
        <ProductList category="digital" limit={SHOW_COUNT} mode="scroll" />
      </div>
    </div>
  );
};

export default Index;
