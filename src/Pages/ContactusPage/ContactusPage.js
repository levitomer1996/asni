import React, { useState } from "react";
import { Grid, Typography, Button } from "@material-ui/core";
import BootStrapInput from "../../Components/BootstrapInput/BootstrapInput";
function ContactusPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  return (
    <div>
      <form>
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
            <BootStrapInput type="text" onChangeFunction={setName} label="שם" />
          </Grid>
          <Grid item>
            <BootStrapInput
              type="email"
              onChangeFunction={setEmail}
              label="אימייל"
            />
          </Grid>
          <Grid item>
            <BootStrapInput
              type="text"
              onChangeFunction={setMessage}
              label="הודעה"
              textArea
              rows={10}
            />
          </Grid>
          <Grid item>
            <Button
              variant="contained"
              color="primary "
              style={{ backgroundColor: "rgb(137, 6, 137)", color: "white" }}
            >
              שלח
            </Button>
          </Grid>
        </Grid>
      </form>
    </div>
  );
}

export default ContactusPage;
