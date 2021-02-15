import React, { useContext } from "react";
import { useStyles } from "./Comps/AdminPage.style";
import { List, ListItem, ListItemText } from "@material-ui/core";
import RenderPage from "./Comps/RenderPage";
import AdminPageContext from "../../context/AdminPageContext";
const links = [
  { title: "Control Board", page: "controlboard" },
  { title: "Orders", page: "orders" },
  { title: "Customers", page: "customers" },
  { title: "Stock-Management", page: "stockmanagement" },
  { title: "Mail", page: "mail" },
  { title: "Stats", page: "stats" },
];
const AdminPage = () => {
  const { adminpageState, setPage } = useContext(AdminPageContext);

  const classes = useStyles();
  return (
    <div className={classes.root}>
      <List>
        {links.map(({ title, page }) => {
          return (
            <ListItem button onClick={() => setPage(page)} key={title}>
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
