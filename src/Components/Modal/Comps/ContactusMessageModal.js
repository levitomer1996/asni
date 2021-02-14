import React, { useState, useContext } from "react";
import { Button, Typography } from "@material-ui/core";
import BootstrapInput from "../../BootstrapInput/BootstrapInput";
import moment from "moment";
import "moment/locale/he";
import ModalContext from "../../../context/ModalContext";

function ContactusMessageModal({ params }) {
  const { name, email, message, isRead, dateCreated, id } = params;
  const { setModalContent } = useContext(ModalContext);
  const [replyMessage, setReplyMessage] = useState("");
  return (
    <div dir="rtl">
      <div style={{ padding: 20, display: "flex", flexDirection: "row" }}>
        <Typography style={{ marginLeft: 10 }}>
          {" "}
          מ: <strong style={{ color: "red" }}>{name}</strong>
        </Typography>
        <Typography> {moment(dateCreated).fromNow()}</Typography>
      </div>
      <Typography style={{ wordWrap: "break-word" }}>{message}</Typography>
      <Button
        variant="contained"
        color="primary"
        onClick={() => {
          setModalContent("sendmail", { email, name, id });
        }}
      >
        השב ל {name}
      </Button>
    </div>
  );
}

export default ContactusMessageModal;
