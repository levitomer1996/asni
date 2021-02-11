import React, { useState, useEffect } from "react";
import useGetAllUsers from "../../../hooks/useGetAllUsers";
import CustomersTable from "./CustomersTable";
import Spinner from "../../../Components/Spinner/Spinner";

import BootstrapInput from "../../../Components/BootstrapInput/BootstrapInput";
import useGetUserByUserName from "../../../hooks/useGetUserByUserName";

const CustomersPage = () => {
  const [getUsers, arrivedUsers, spinner] = useGetAllUsers();
  const [search, setSearch] = useState("");
  const [usersList, setUsersList] = useState([]);
  const [searchUser, searchedUsers] = useGetUserByUserName();
  useEffect(() => {
    getUsers();
  }, []);
  useEffect(() => {
    setUsersList(arrivedUsers);
  }, [arrivedUsers]);

  const handleSearch = () => {
    searchUser(usersList, search);
    if (searchedUsers.length > 0) {
      setUsersList(searchedUsers);
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
      <CustomersTable customers={usersList} />
    </div>
  );
};

export default CustomersPage;
