import React, { useContext, useEffect, useState } from "react";
import {
  Checkbox,
  FormControlLabel,
  Typography,
  Fade,
} from "@material-ui/core";
import AppContext from "../../../../context/AppContext";
import useGetControlPanel from "../../../../hooks/useGetControlPanel";
import asni_server from "../../../../api/asni_server";
const Switch = ({ label }) => {
  const { appState, setDeliveryAvailable } = useContext(AppContext);
  const { deliveryAvailable } = appState;
  const [error, setError] = useState(false);

  const handleChange = async (e) => {
    asni_server
      .post("/updateisdeliveryavail", { isDeliveryAvail: e.target.checked })
      .then((res) => {
        setDeliveryAvailable(!e.target.checked);
      })
      .catch((err) => {
        setError(true);
        console.log(err);
      });
  };
  return (
    <div style={{ display: "flex", flexDirection: "row" }}>
      <FormControlLabel
        control={
          <Checkbox
            checked={deliveryAvailable}
            onChange={handleChange}
            inputProps={{ "aria-label": "primary checkbox" }}
          />
        }
        label={label}
      />
      <div
        style={{
          width: 60,
          height: 50,
          fontSize: 30,
          backgroundColor: deliveryAvailable ? "#22e422" : "#ff0f0f",
          textAlign: "center",
        }}
      >
        {deliveryAvailable ? "ON" : "OFF"}
      </div>
      {error ? <Typography style={{ color: "red" }}>Error</Typography> : null}
    </div>
  );
};

const ControlBoardPage = () => {
  return (
    <div>
      <Switch label={"Available for delivers"} />
    </div>
  );
};

export default ControlBoardPage;
