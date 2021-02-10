import React, { useState, useEffect } from "react";
import useGetAllProducts from "../../../hooks/useGetAllProducts";
import StockTable from "./StockTable";
import BootstrapInput from "../../../Components/BootstrapInput/BootstrapInput";
import Spinner from "../../../Components/Spinner/Spinner";
function StockManagementPage() {
  const [getAllProducts, arrivedProducts, spinner] = useGetAllProducts();
  const [search, setSearch] = useState("");
  const [prodList, setProdList] = useState([]);
  useEffect(() => {
    getAllProducts();
  }, []);
  useEffect(() => {
    setProdList(arrivedProducts);
  }, [arrivedProducts]);

  const handleSearch = () => {
    const found = prodList.find((p) => p.title === search);
    if (found) {
      setProdList([prodList.find((p) => p.title === search)]);
    }
    if (search === "") {
      getAllProducts();
    }
  };

  if (spinner) {
    return <Spinner width={200} height={200} />;
  }
  return (
    <div>
      <BootstrapInput
        InputAdor={"start"}
        onClickAdor={handleSearch}
        onChangeFunction={setSearch}
        value={search}
      />
      <StockTable products={prodList} />
    </div>
  );
}

export default StockManagementPage;
