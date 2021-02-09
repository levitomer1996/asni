import React, { useEffect, useContext } from "react";
import InputBase from "@material-ui/core/InputBase";
import InputLabel from "@material-ui/core/InputLabel";

import FormControl from "@material-ui/core/FormControl";
import {
  withStyles,
  fade,
  makeStyles,
  createMuiTheme,
  ThemeProvider,
} from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";
const theme = createMuiTheme({
  direction: "rtl", // Both here and <body dir="rtl">
});

const useStyles = makeStyles((theme) => ({
  root: {
    "label + &": {
      marginTop: theme.spacing(3),
    },
  },
  textArea: {
    borderRadius: 4,
    position: "relative",
    backgroundColor: theme.palette.common.white,
    border: "1px solid #ced4da",
    fontSize: 16,
    width: theme.width ? theme.width : "auto",
    padding: "10px 12px",

    transition: theme.transitions.create(["border-color", "box-shadow"]),
    // Use the system font instead of the default Roboto font.
    fontFamily: [
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(","),
    "&:focus": {
      boxShadow: `${fade(theme.palette.primary.main, 0.25)} 0 0 0 0.2rem`,
      borderColor: theme.palette.primary.main,
    },
  },
}));

const Input = withStyles((theme) => ({
  root: {
    "label + &": {
      marginTop: theme.spacing(3),
    },
  },
  input: {
    borderRadius: 4,
    position: "relative",
    backgroundColor: theme.palette.common.white,
    border: "1px solid #ced4da",
    fontSize: 16,
    padding: "10px 12px",

    transition: theme.transitions.create(["border-color", "box-shadow"]),
    // Use the system font instead of the default Roboto font.
    fontFamily: [
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(","),
    "&:focus": {
      boxShadow: `${fade(theme.palette.primary.main, 0.25)} 0 0 0 0.2rem`,
      borderColor: theme.palette.primary.main,
    },
  },
}))(InputBase);

export default function BootStrapInput({
  type,
  label,
  width,
  onChangeFunction,
  rows,
  textArea,
  autoComplete,
  required,
  value,
  direction,
}) {
  const classes = useStyles();
  if (textArea) {
    return (
      <FormControl>
        <label>
          <Typography
            style={{ color: "rgba(0, 0, 0, 0.54)", fontFamily: "revert" }}
          >
            {label}
          </Typography>
        </label>
        <textarea
          className={classes.textArea}
          row={rows}
          placeholder={label}
          onChange={(e) => {
            onChangeFunction(e.target.value);
          }}
        ></textarea>
      </FormControl>
    );
  } else {
    return (
      <ThemeProvider theme={theme}>
        {" "}
        <FormControl dir={direction ? direction : "rtl"}>
          <label>
            <Typography
              style={{ color: "rgba(0, 0, 0, 0.54)", fontFamily: "revert" }}
            >
              {label}
            </Typography>
          </label>
          <Input
            type={type}
            style={{ width: width ? width : "auto" }}
            onChange={
              type === "file"
                ? (e) => {
                    onChangeFunction(e);
                  }
                : (e) => {
                    onChangeFunction(e.target.value);
                  }
            }
            autoComplete={autoComplete}
            rows={rows ? rows : 1}
            required={required ? true : false}
            value={value}
          />
        </FormControl>
      </ThemeProvider>
    );
  }
}
