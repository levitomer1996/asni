import React from "react";
import { useStyles } from "./Comps/AdminPage.style";
import { List, ListItem, ListItemText } from "@material-ui/core";

const AdminPage = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <List>
        <ListItem button>
          <ListItemText primary="Tomer" />
        </ListItem>
      </List>
      <div>PAge</div>
    </div>
  );
};

export default AdminPage;
