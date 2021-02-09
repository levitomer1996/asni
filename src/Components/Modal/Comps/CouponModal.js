import React from "react";
import { Grid, Typography } from "@material-ui/core";
const CouponModal = ({ code }) => {
  return (
    <Grid
      container
      direction="column"
      justify="center"
      alignItems="center"
      dir={"rtl"}
      spacing={3}
    >
      <Grid item>הקוד שלך:</Grid>
      <Grid item>
        <Typography style={{ fontWeight: "bold", color: "red" }}>
          {code}
        </Typography>
      </Grid>
      <Grid item>
        <Typography paragraph>
          בעת מילואי פרטי ההזמנה יש להקליד את קוד את הקופון בשורה המיועדת לכך.
          מיד לאחר ביצוע ואישור ההזמנה ירד יעלם הקופון מן המשתמש שלכם.
        </Typography>
      </Grid>
    </Grid>
  );
};

export default CouponModal;
