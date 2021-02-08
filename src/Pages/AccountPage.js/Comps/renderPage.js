import OrdersPage from "./OrdersPage";

export default (page) => {
  switch (page) {
    case "orders":
      return <OrdersPage />;
      break;

    default:
      break;
  }
};
