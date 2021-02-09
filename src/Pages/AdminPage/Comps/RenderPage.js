import React from "react";
import EditProductPage from "../../EditProductPage/EditProductPage";
import StockManagementPage from "./StockManagementPage";

export default function RenderPage({ page }) {
  switch (page) {
    case "stockmanagement":
      return <StockManagementPage />;
    case "editproduct":
      return <EditProductPage />;
    default:
      return <div>Tomer</div>;
      break;
  }
}
