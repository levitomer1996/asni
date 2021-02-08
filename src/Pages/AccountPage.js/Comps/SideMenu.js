import React, { useContext } from "react";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Divider from "@material-ui/core/Divider";
import HistoryIcon from "@material-ui/icons/History";
import DraftsIcon from "@material-ui/icons/Drafts";
import MonetizationOnIcon from "@material-ui/icons/MonetizationOn";
import { useStyles } from "./AccountPage.style";
import moduleName from "../../../";
import AuthContext from "../../../context/AuthContext";
function ListItemLink(props) {
  return <ListItem button component="a" {...props} />;
}

export default function SideMenu({ setRedirect }) {
  const classes = useStyles();
  const { Signout } = useContext(AuthContext);
  return (
    <div className={classes.root} dir="rtl">
      <List component="nav" aria-label="main mailbox folders">
        <ListItem
          button
          onClick={() => {
            setRedirect("orders");
          }}
        >
          <ListItemIcon>
            <HistoryIcon />
          </ListItemIcon>
          <ListItemText primary="הזמנות" />
        </ListItem>
        <ListItem button onClick={() => setRedirect("goodies")}>
          <ListItemIcon>
            <MonetizationOnIcon />
          </ListItemIcon>
          <ListItemText primary="הטבות" />
        </ListItem>
        <ListItem button onClick={() => Signout()}>
          <ListItemText primary="התנתק" />
        </ListItem>
      </List>
      <Divider />
    </div>
  );
}
