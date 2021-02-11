import React, { useState, useEffect } from "react";
import useGetAllProducts from "../../../hooks/useGetAllProducts";
import StockTable from "./StockTable";
import BootstrapInput from "../../../Components/BootstrapInput/BootstrapInput";
import Spinner from "../../../Components/Spinner/Spinner";
import useGetProductByTitle from "../../../hooks/useGetProductByTitle";
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

  const [searchProduct, searchedProducts] = useGetProductByTitle();
  useEffect(() => {
    if (searchedProducts.length > 0) {
      setProdList(searchedProducts);
      console.log(prodList);
    }
  }, [searchedProducts]);
  const handleSearch = () => {
    searchProduct(prodList, search);
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
