import React from "react";
import { Link } from "react-router-dom";
import { useStyles } from "./Header.style";

const NavLink = ({ title, link }) => {
  const classes = useStyles();
  return (
    <Link to={link} className={classes.link}>
      <div className={classes.inner_link}>{title}</div>
    </Link>
  );
};
export const NavList = [
  { title: "מוצרים", link: "/products" },
  { title: "מיוחדים", link: "/special" },
  { title: "צור קשר", link: "/contact" },
];
export default NavLink;
