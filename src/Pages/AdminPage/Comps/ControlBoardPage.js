import React, { useState, useContext } from "react";
import { Checkbox, colors, FormControlLabel } from "@material-ui/core";
import AppContext from "../../../context/AppContext";

const Switch = ({ label }) => {
  const { appState, setDeliveryAvailable } = useContext(AppContext);
  const { deliveryAvailable } = appState;
  const handleChange = (e) => {
    setDeliveryAvailable(e.target.checked);
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
