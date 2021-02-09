import React, { useContext, useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Paper from "@material-ui/core/Paper";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import Button from "@material-ui/core/Button";
import Link from "@material-ui/core/Link";
import Typography from "@material-ui/core/Typography";
import AddressForm from "./Comps/AdressForm";
import PaymentForm from "./Comps/PaymentForm";
import Review from "./Comps/Review";
import PaymentContext from "../../context/PaymentContext";
import CartContext from "../../context/CartContext";
import ReactPaypal from "../../Components/ReactPaypal/ReactPaypal";
import { Redirect } from "react-router";
import AuthContext from "../../context/AuthContext";
function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  appBar: {
    position: "relative",
  },
  layout: {
    width: "auto",
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2),
    [theme.breakpoints.up(600 + theme.spacing(2) * 2)]: {
      width: 600,
      marginLeft: "auto",
      marginRight: "auto",
    },
  },
  paper: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(3),
    padding: theme.spacing(2),
    [theme.breakpoints.up(600 + theme.spacing(3) * 2)]: {
      marginTop: theme.spacing(6),
      marginBottom: theme.spacing(6),
      padding: theme.spacing(3),
    },
  },
  stepper: {
    padding: theme.spacing(3, 0, 5),
  },
  buttons: {
    display: "flex",
    justifyContent: "flex-end",
  },
  button: {
    marginTop: theme.spacing(3),
    marginLeft: theme.spacing(1),
    backgroundColor: "rgb(137, 6, 137)",
  },
}));

const steps = ["כתובת", "פרטי תשלום", "אישור הזמנה"];

function getStepContent(step) {
  switch (step) {
    case 0:
      return <AddressForm />;
    case 1:
      return <PaymentForm />;
    case 2:
      return <Review />;
    default:
      throw new Error("Unknown step");
  }
}

export default function PaymentPage() {
  const { cartState } = useContext(CartContext);
  const { paymentState } = useContext(PaymentContext);
  const { authState } = useContext(AuthContext);
  const [paypalDescription, setPaypalDescription] = useState([]);
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);

  useEffect(() => {
    let newList = [];
    for (let i = 0; i < cartState.products.length; i++) {
      newList.push({
        name: cartState.products[i].title,
        price: cartState.products[i].price,
        quantity: cartState.products[i].ammount,
        currency: "ILS",
      });
      setPaypalDescription(newList);
    }

    console.log(paypalDescription);
  }, []);
  const handleNext = () => {
    setActiveStep(activeStep + 1);
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };
  if (!authState.isLogged) {
    return <Redirect to="/signin" />;
  }
  return (
    <div dir="rtl">
      {paymentState.isPaypalTransectionComplete.isComplete ? (
        <Redirect to="/complete" />
      ) : null}
      <CssBaseline />
      <AppBar position="absolute" color="default" className={classes.appBar}>
        <Toolbar>
          <Typography variant="h6" color="inherit" noWrap>
            דף תשלום
          </Typography>
        </Toolbar>
      </AppBar>
      <main className={classes.layout}>
        <Paper className={classes.paper}>
          <Stepper activeStep={activeStep} className={classes.stepper}>
            {steps.map((label) => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>
          <React.Fragment>
            {activeStep === steps.length ? (
              <React.Fragment>
                <Typography variant="h5" gutterBottom>
                  תודה שהזמנת יא אסני
                </Typography>
                <Typography variant="subtitle1">
                  מספר ההזמנה שלך הוא <strong>#dsklandkslandksallkn</strong>{" "}
                  ההזמנה שלך התקבלה ומחכה לאישור בצד השני.
                </Typography>
              </React.Fragment>
            ) : (
              <React.Fragment>
                {getStepContent(activeStep)}
                <div className={classes.buttons}>
                  {activeStep !== 0 && (
                    <Button
                      onClick={handleBack}
                      className={classes.button}
                      variant="contained"
                      color="primary"
                    >
                      חזור
                    </Button>
                  )}
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={handleNext}
                    className={classes.button}
                    disabled={false}
                  >
                    {activeStep === steps.length - 1 ? "בצע הזמנה" : "המשך"}
                  </Button>
                </div>
                <Typography>שלם ב Paypal</Typography>
                <div style={{ width: "50%" }}>
                  <ReactPaypal
                    totalPrice={cartState.totalPrice}
                    description={paypalDescription}
                  />
                </div>
              </React.Fragment>
            )}
          </React.Fragment>
        </Paper>
        <Copyright />
      </main>
    </div>
  );
}
