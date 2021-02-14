import React, { useState, useContext } from "react";
import { Typography, Button } from "@material-ui/core";
import BootStrapInput from "../../BootstrapInput/BootstrapInput";
import asni_server from "../../../api/asni_server";
import Spinner from "../../Spinner/Spinner";
import ModalContext from "../../../context/ModalContext";

const SendMailModal = ({ params }) => {
  const [message, setMessage] = useState(params.message);
  const [email, setEmail] = useState(params.email);
  const [spinner, setSpinner] = useState(false);
  const { setIsModalOpen } = useContext(ModalContext);

  const handleSumbit = async () => {
    try {
      setSpinner(true);
      const res = await asni_server.post("/answermessage", {
        message,
        email,
        id: params.id,
      });
      setSpinner(false);
      setIsModalOpen();
    } catch (error) {
      setSpinner(false);
    }
  };

  return (
    <div dir="rtl">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleSumbit();
        }}
      >
        <Typography>השב ל-{params.name}</Typography>
        <BootStrapInput
          value={email}
          onChangeFunction={setEmail}
          label="אימייל"
        />

        <BootStrapInput
          label={"הודעה"}
          textArea
          rows={10}
          onChangeFunction={setMessage}
        />
        <Button variant="contained" color="primary" type="submit">
          השב
        </Button>
      </form>
      {spinner ? <Spinner width={40} height={40} color={"blue"} /> : null}
    </div>
  );
};

export default SendMailModal;
