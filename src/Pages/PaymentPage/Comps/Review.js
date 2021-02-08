import React, { useContext } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Grid from "@material-ui/core/Grid";
import PaymentContext from "../../../context/PaymentContext";
import CartContext from "../../../context/CartContext";

const useStyles = makeStyles((theme) => ({
  listItem: {
    padding: theme.spacing(1, 0),
  },
  total: {
    fontWeight: 700,
  },
  title: {
    marginTop: theme.spacing(2),
  },
}));

export default function Review() {
  const classes = useStyles();
  const { cartState } = useContext(CartContext);
  const { paymentState } = useContext(PaymentContext);
  const { adressForm, paymentForm } = paymentState;
  const {
    firstName,
    lastName,
    houseNumber,
    street,
    floor,
    appartment,
  } = adressForm;
  const {
    nameOnCard,
    cardNumber,
    expiryMonth,
    expiryYear,
    cvv,
    type,
  } = paymentForm;
  const { products, totalPrice } = cartState;

  const payments = [
    { name: "סוג כרטיס", detail: type },
    { name: "בעל הכרטיס", detail: nameOnCard },
    {
      name: "מספר כרטיס",
      detail: `xxxx-xxxx-xxxx-${cardNumber.substring(cardNumber.length - 4)}`,
    },
    { name: "תוקף כרטיס", detail: `${expiryMonth}/${expiryYear}` },
  ];

  return (
    <div dir="rtl">
      <Typography variant="h6" gutterBottom>
        סיכום הזמנה
      </Typography>
      <List disablePadding>
        {products.map((product) => (
          <ListItem className={classes.listItem} key={product.name}>
            <ListItemText primary={product.title} secondary={product.desc} />
            <Typography variant="body2">{product.price}</Typography>
          </ListItem>
        ))}
        <ListItem className={classes.listItem}>
          <ListItemText primary="מחיר סופי" />
          <Typography variant="subtitle1" className={classes.total}>
            {totalPrice + " "} ₪
          </Typography>
        </ListItem>
      </List>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <Typography variant="h6" gutterBottom className={classes.title}>
            פרטי כתובת
          </Typography>
          <Typography gutterBottom>{firstName + " " + lastName}</Typography>
          <Typography gutterBottom>
            {street + " " + houseNumber + ` דירה ${floor} קומה ${appartment}`}
          </Typography>
        </Grid>
        <Grid item container direction="column" xs={12} sm={6}>
          <Typography variant="h6" gutterBottom className={classes.title}>
            פרטי תשלום
          </Typography>
          <Grid container>
            {payments.map((payment) => (
              <React.Fragment key={payment.name}>
                <Grid item xs={6}>
                  <Typography gutterBottom>{payment.name}</Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography gutterBottom>{payment.detail}</Typography>
                </Grid>
              </React.Fragment>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}
