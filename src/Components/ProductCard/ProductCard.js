import React, { useContext } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Icon from "@material-ui/core/Icon";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import { CircularProgress, IconButton } from "@material-ui/core";
import CartContext from "../../context/CartContext";
import useStyles from "./Comps/Card.style";
import ShareIcon from "@material-ui/icons/Share";
import ModalContext from "../../context/ModalContext";
export default function ProductCard(props) {
  const { title, price, img_url, description, id, spinner, share_link } = props;
  const { setIsModalOpen } = useContext(ModalContext);
  const { addProduct } = useContext(CartContext);
  const classes = useStyles();
  if (spinner) {
    return <CircularProgress />;
  }
  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={img_url}
          title="Contemplative Reptile"
        />
        <div className={classes.title_description_cotainer}>
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {title}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              {description}
            </Typography>
          </CardContent>
        </div>
      </CardActionArea>
      <CardActions className={classes.price_container}>
        <Typography>{price}₪</Typography>
      </CardActions>
      <CardActions
        style={{
          display: "flex",
          flexDirection: "row-reverse",
          alignItems: "flex-start",
          justifyContent: "flex-start",
          width: "80%",
        }}
      >
        {share_link ? (
          <IconButton
            onClick={() => {
              setIsModalOpen("share", {
                url: `${window.location}productdetails/${share_link}`,
              });
            }}
          >
            <ShareIcon />
          </IconButton>
        ) : null}
        <Button variant="contained" color="primary" style={{ marginLeft: 20 }}>
          צפה במוצר
        </Button>
        <Button
          variant="contained"
          color="primary"
          endIcon={<ShoppingCartIcon />}
          style={{ backgroundColor: "#890689" }}
          onClick={() => {
            addProduct({ title, price, img_url, description });
          }}
        >
          הוסף לעגלה
        </Button>
      </CardActions>
    </Card>
  );
}
