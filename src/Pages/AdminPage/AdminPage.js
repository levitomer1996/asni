import React from "react";
import { useStyles } from "./Comps/AdminPage.style";
import { List, ListItem, ListItemText, ListItemIcon } from "@material-ui/core";
import { Link, useParams } from "react-router-dom";
import StockManagementPage from "./Comps/StockManagementPage";
import RenderPage from "./Comps/RenderPage";
const links = [
  { title: "Orders", link: "orders" },
  { title: "Customers", link: "customers" },
  { title: "Stock-Management,", link: "stockmanagement" },
];
const AdminPage = () => {
  const { page } = useParams();

  const classes = useStyles();
  return (
    <div className={classes.root}>
      <List>
        {links.map(({ title, link }) => {
          return (
            <Link to={link} className={classes.menu_link}>
              <ListItem button>
                <ListItemText primary={title} />
              </ListItem>
            </Link>
          );
        })}
      </List>
      <div>
        <RenderPage page={page} />
      </div>
    </div>
  );
};

export default AdminPage;
