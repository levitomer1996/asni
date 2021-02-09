import React from "react";
import CouponCard from "./CouponCard";
import { Grid } from "@material-ui/core";
import { useStyles } from "./AccountPage.style";
import { v4 as uuidv4 } from "uuid";
const GoodiesPage = () => {
  const classes = useStyles();
  const list = [
    { title: "20% הנחה", code: uuidv4() },
    { title: "OCB חינם", code: uuidv4() },
    { title: "100₪", code: uuidv4() },
  ];
  return (
    <Grid
      container
      direction="row"
      justify="flex-start"
      alignItems="flex-start"
      spacing={3}
    >
      {list.map((c) => {
        return (
          <Grid item>
            <CouponCard code={c.code} title={c.title} />
          </Grid>
        );
      })}
    </Grid>
  );
};

export default GoodiesPage;
