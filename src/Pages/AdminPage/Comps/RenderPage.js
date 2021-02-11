import React from "react";
import CustomersPage from "./CustomersPage";
import EditProductPage from "./EditProductPage";
import MailPage from "./MailPage";
import StockManagementPage from "./StockManagementPage";

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
    default:
      return <div>Tomer</div>;
      break;
  }
}
