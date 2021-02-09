import GoodiesPage from "./GoodiesPage";
import OrdersPage from "./OrdersPage";

export default (page) => {
  switch (page) {
    case "orders":
      return <OrdersPage />;
    case "goodies":
      return <GoodiesPage />;

    default:
      break;
  }
};
