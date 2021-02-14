import React from "react";
import { Icon, Button } from "@material-ui/core";
import FacebookIcon from "@material-ui/icons/Facebook";
const CustomFacebook = ({ onClick }) => {
  return (
    <Button
      variant="contained"
      color="primary"
      size="large"
      style={{ backgroundColor: "#4267B2", fontWeight: "bold" }}
      startIcon={<FacebookIcon />}
      onClick={() => onClick()}
    >
      התחבר עם פייסבוק
    </Button>
  );
};

export default CustomFacebook;
