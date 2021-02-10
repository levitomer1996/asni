import React, { useState, useEffect, useContext } from "react";
import { Grid } from "@material-ui/core";
import BootStrapInput from "../../../Components/BootstrapInput/BootstrapInput";
import AdminPageContext from "../../../context/AdminPageContext";
import Button from "@material-ui/core/Button";
import Spinner from "../../../Components/Spinner/Spinner";
import asni_server from "../../../api/asni_server";
const EditProductPage = () => {
  const { adminpageState } = useContext(AdminPageContext);
  const { productPageState } = adminpageState;
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState(0);
  const [img_url, set_img_url] = useState("");
  const [quantity, setQuantity] = useState(0);
  const [spinner, setSpinner] = useState(false);
  const [productUpdated, setProductUpdated] = useState(false);
  useEffect(() => {
    setTitle(productPageState.title);
    setDescription(productPageState.description);
    setPrice(productPageState.price);
    set_img_url(productPageState.img_url);
    setQuantity(productPageState.quantity);
  }, [productPageState]);

  const handleSubmit = async () => {
    const update = { title, description, price, quantity, img_url };
    try {
      setSpinner(true);
      const res = await asni_server.post(
        "/updateproduct",
        { update },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("ut")}`,
          },
        }
      );
      setSpinner(false);
      setProductUpdated(true);
    } catch (error) {
      setSpinner(false);
    }
  };
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        handleSubmit();
      }}
    >
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
                value={title}
                type="text"
              />
            </Grid>
            <Grid item>
              <BootStrapInput
                label="Description"
                onChangeFunction={setDescription}
                textArea
                direction={"ltr"}
                value={description}
                type="text"
              />
            </Grid>
            <Grid item>
              <BootStrapInput
                label="IMG URL"
                onChangeFunction={set_img_url}
                direction={"ltr"}
                value={img_url}
                type="text"
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
                value={price}
                width={100}
                type="number"
              />
            </Grid>
            <Grid item>
              <BootStrapInput
                label="Quantity"
                onChangeFunction={setQuantity}
                direction={"ltr"}
                value={quantity}
                width={100}
                type="number"
              />
            </Grid>
            <Grid item>
              <Button variant="contained" color="secondary" type="submit">
                Update
              </Button>
            </Grid>
            {spinner ? (
              <Grid item>
                <Spinner width={40} height={40} />
              </Grid>
            ) : null}
          </Grid>
        </Grid>
      </Grid>
    </form>
  );
};

export default EditProductPage;
