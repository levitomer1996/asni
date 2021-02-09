import React, { useContext } from "react";
import { Button, Paper, Typography, Grid } from "@material-ui/core";
import ModalContext from "../../../context/ModalContext";
import { useStyles } from "./AccountPage.style";
function CouponCard({ title, code }) {
  const { setIsModalOpen } = useContext(ModalContext);
  const classes = useStyles();
  return (
    <Paper className={classes.coupon_card_root}>
      <Grid
        container
        direction="column"
        justify="center"
        alignItems="center"
        spacing={3}
      >
        <Grid item>
          <Typography variant="h5" style={{ fontFamily: "revert" }}>
            {title}
          </Typography>
        </Grid>
        <Grid item>
          <Button
            variant="contained"
            color="primary"
            style={{ backgroundColor: "#d92c4b" }}
            onClick={() => {
              setIsModalOpen("coupon", { code });
            }}
          >
            קבל קוד
          </Button>
        </Grid>
      </Grid>
    </Paper>
  );
}

export default CouponCard;
