import React, { useState } from "react";
import { Grid } from "@material-ui/core";
import BootStrapInput from "../../Components/BootstrapInput/BootstrapInput";

const EditProductPage = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState(0);
  const [img_url, set_img_url] = useState("");
  const [quantity, setQuantity] = useState(0);
  return (
    <Grid
      container
      direction="row"
      justify="flex-start"
      alignItems="flex-start"
      spacing={2}
    >
      <Grid item>
        <Grid
          container
          direction="column"
          justify="flex-start"
          alignItems="flex-start"
          spacing={2}
        >
          <Grid item>
            <BootStrapInput
              onChangeFunction={setTitle}
              value={title}
              label="Title"
              direction={"ltr"}
            />
          </Grid>
          <Grid item>
            <BootStrapInput
              label="Description"
              onChangeFunction={setDescription}
              textArea
              direction={"ltr"}
            />
          </Grid>
          <Grid item>
            <BootStrapInput
              label="IMG URL"
              onChangeFunction={set_img_url}
              direction={"ltr"}
            />
          </Grid>
        </Grid>
      </Grid>
      <Grid item>
        <Grid
          container
          direction="column"
          justify="flex-start"
          alignItems="flex-start"
          spacing={2}
        >
          <Grid item>
            <BootStrapInput
              label="Price"
              onChangeFunction={setPrice}
              direction={"ltr"}
            />
          </Grid>
          <Grid item>
            <BootStrapInput
              label="Quantity"
              onChangeFunction={setQuantity}
              direction={"ltr"}
            />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default EditProductPage;
