import React from "react";
import CustomersPage from "./CustomersPage";
import EditProductPage from "./EditProductPage";
import MailPage from "./MailPage/MailPage";
import StockManagementPage from "./StockManagementPage";
import ControlBoardPage from "./ControlBoardPage";
import StatsPage from "./StatsPage/StatsPage";
export default function RenderPage({ page }) {
  switch (page) {
    case "stockmanagement":
      return <StockManagementPage />;
    case "editproduct":
      return <EditProductPage />;
    case "customers":
      return <CustomersPage />;
    case "mail":
      return <MailPage />;
    case "controlboard":
      return <ControlBoardPage />;
    case "stats":
      return <StatsPage />;
    default:
      return <div>Tomer</div>;
      break;
  }
}
