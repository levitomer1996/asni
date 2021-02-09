import React from "react";
import { Grid } from "@material-ui/core";
import CouponMobileCard from "./CouponMobileCard";
import { v4 as uuidv4 } from "uuid";
const GoodiesPage = () => {
  const list = [
    { title: "20% הנחה", code: uuidv4() },
    { title: "OCB חינם", code: uuidv4() },
    { title: "100₪", code: uuidv4() },
  ];
  return (
    <Grid
      container
      direction="column"
      justify="flex-start"
      alignItems="flex-start"
      stlye={{ marginTop: 20 }}
    >
      {list.map((c) => {
        return (
          <Grid item style={{ width: "100%", marginBottom: 40 }}>
            <CouponMobileCard title={c.title} code={c.code} />
          </Grid>
        );
      })}
    </Grid>
  );
};

export default GoodiesPage;
