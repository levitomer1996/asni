import React from "react";
import { Typography } from "@material-ui/core";
import { useStyles } from "./IndexPage.style";
function ParallexImage() {
  const styleProps = {
    img_url: "https://i.ibb.co/D5KG2BW/pexels-daria-shevtsova-1054974.jpg",
  };
  const classes = useStyles(styleProps);
  return (
    <div className={classes.parallex}>
      <div style={{ padding: 30 }}>
        <Typography>Notimp</Typography>
        <Typography>
          There are many variations of passages of Lorem Ipsum available, but
          the majority have suffered alteration in some form, by injected
          humour, or randomised words which don't look even slightly believable.
          If you are going to use a passage of Lorem Ipsum, you need to be sure
          there isn't anything embarrassing hidden in the middle of text. All
          the Lorem Ipsum generators on the Internet tend to repeat predefined
          chunks as necessary, making this the first true generator on the
          Internet. It uses a dictionary of over 200 Latin words, combined with
          a handful of model sentence structures, to generate Lorem Ipsum which
          looks reasonable. The generated Lorem Ipsum is therefore always free
          from repetition, injected humour, or non-characteristic words etc.
          paragraphs words bytes lists Start with 'Lorem ipsum dolor sit
          amet...'
        </Typography>
      </div>
    </div>
  );
}

export default ParallexImage;
