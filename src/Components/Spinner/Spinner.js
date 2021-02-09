import React from "react";
import CircularProgress from "@material-ui/core/CircularProgress";
const Spinner = ({ width, height, color }) => {
  return (
    <CircularProgress
      style={{
        width: width ? width : null,
        height: height ? height : null,
        color: color ? color : null,
      }}
    />
  );
};

export default Spinner;
