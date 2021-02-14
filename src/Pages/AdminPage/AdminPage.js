import React, { useContext } from "react";
import { useStyles } from "./Comps/AdminPage.style";
import { List, ListItem, ListItemText, ListItemIcon } from "@material-ui/core";
import { Link, useParams } from "react-router-dom";
import StockManagementPage from "./Comps/StockManagementPage";
import RenderPage from "./Comps/RenderPage";
import AdminPageContext from "../../context/AdminPageContext";
const links = [
  { title: "Orders", page: "orders" },
  { title: "Customers", page: "customers" },
  { title: "Stock-Management", page: "stockmanagement" },
  { title: "Mail", page: "mail" },
];
const AdminPage = () => {
  const { adminpageState, setPage } = useContext(AdminPageContext);

  const classes = useStyles();
  return (
    <div className={classes.root}>
      <List>
        {links.map(({ title, page }) => {
          return (
            <ListItem button onClick={() => setPage(page)}>
              <ListItemText primary={title} />
            </ListItem>
          );
        })}
      </List>
      <div>
        <RenderPage page={adminpageState.page} />
      </div>
    </div>
  );
};

export default AdminPage;
