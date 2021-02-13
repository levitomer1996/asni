import React, { useState } from "react";
import { Grid, Typography, Button } from "@material-ui/core";
import BootStrapInput from "../../Components/BootstrapInput/BootstrapInput";
import asni_server from "../../api/asni_server";
import Spinner from "../../Components/Spinner/Spinner";
import { Link } from "react-router-dom";
function ContactusPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isMessageSent, setIsMessageSent] = useState(false);
  const [spinner, setSpinner] = useState(false);
  const handleSumbit = async () => {
    try {
      console.log({
        name,
        email,
        message,
      });
      setSpinner(true);
      const res = await asni_server.post("/sendcontactmessage", {
        name,
        email,
        message,
      });
      setSpinner(false);
      setIsMessageSent(true);
    } catch (er) {
      setSpinner(false);
    }
  };

  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleSumbit();
        }}
      >
        <Grid
          container
          direction="column"
          justify="center"
          alignItems="center"
          spacing={2}
        >
          <Grid item>
            {" "}
            <Typography>צור קשר</Typography>
          </Grid>
          <Grid item>
            <BootStrapInput
              type="text"
              onChangeFunction={setName}
              label="שם"
              value={name}
            />
          </Grid>
          <Grid item>
            <BootStrapInput
              type="email"
              onChangeFunction={setEmail}
              label="אימייל"
              value={email}
            />
          </Grid>
          <Grid item>
            <BootStrapInput
              type="text"
              onChangeFunction={setMessage}
              label="הודעה"
              textArea
              value={message}
              rows={10}
              width={300}
            />
          </Grid>
          <Grid item>
            <Button
              variant="contained"
              color="primary "
              style={{ backgroundColor: "rgb(137, 6, 137)", color: "white" }}
              type="submit"
            >
              שלח
            </Button>
          </Grid>
          {spinner ? (
            <Grid item>
              <Spinner width={40} height={40} />
            </Grid>
          ) : null}
          {isMessageSent ? (
            <Grid item>
              <Typography style={{ color: "#6023e6" }}>
                .ההודעה שלך נשלחה בהצלחה. נחזור אל כתובת המייל שלך בהקדם האפשרי
              </Typography>
            </Grid>
          ) : null}{" "}
          {isMessageSent ? (
            <Grid item>
              <Link to="/">
                <Typography style={{ color: "#6023e6" }}>
                  חזור אל הדף הראשי
                </Typography>
              </Link>
            </Grid>
          ) : null}
        </Grid>
      </form>
    </div>
  );
}

export default ContactusPage;
