import CartView from "../components/carts/CartView";
import BreadCrumb from "../components/common/Breadcrumb";
import { MENUS } from "../constants/category";

export default function CartPage() {
  return (
    <div className="inner-container">
      <BreadCrumb category={MENUS.HOME} crumb={"장바구니"} />
      <CartView />
    </div>
  );
}
