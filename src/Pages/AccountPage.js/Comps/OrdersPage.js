import React, { useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";
import moment from "moment";
import "moment/locale/he";

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

const list = [
  {
    id: "dlwe24mgll356dss",
    date: 1612728686049,
    price: 200,
    adress: "שלום אש 16",
    products: ["Cocaine", "Snoopdoog Kush"],
  },
  {
    id: "dlwe24mgll356dss",
    date: 1612728686049,
    price: 200,
    adress: "הפרחים 1 רמת השרון",
    products: ["Cocaine", "Snoopdoog Kush"],
  },
  {
    id: "dlwe24mgll356dss",
    date: 1612728686049,
    price: 200,
    adress: "הפרחים 1 רמת השרון",
    products: ["Cocaine", "Snoopdoog Kush"],
  },
  {
    id: "dlwe24mgll356dss",
    date: 1612728686049,
    price: 200,
    adress: "הפרחים 1 רמת השרון",
    products: ["Cocaine", "Snoopdoog Kush"],
  },
  {
    id: "dlwe24mgll356dss",
    date: 1612728686049,
    price: 200,
    adress: "הפרחים 1 רמת השרון",
    products: ["Cocaine", "Snoopdoog Kush"],
  },
  {
    id: "dlwe24mgll356dss",
    date: 1612728686049,
    price: 200,
    adress: "הפרחים 1 רמת השרון",
    products: ["Cocaine", "Snoopdoog Kush"],
  },
  {
    id: "dlwe24mgll356dss",
    date: 1612728686049,
    price: 200,
    adress: "הפרחים 1 רמת השרון",
    products: ["Cocaine", "Snoopdoog Kush"],
  },
];

export default function OrdersPage() {
  const classes = useStyles();

  useEffect(() => {
    moment.locale("fr");
  });
  return (
    <TableContainer>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="right">מספר הזמנה</TableCell>
            <TableCell align="right">תאריך</TableCell>
            <TableCell align="right">כתובת</TableCell>
            <TableCell align="right">מחיר</TableCell>
            <TableCell align="right">מוצרים</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {list.map((row) => (
            <TableRow key={row.id}>
              <TableCell component="th" scope="row" align="right">
                {row.id}
              </TableCell>
              <TableCell align="right">
                {moment(row.date).format("LLLL")}
              </TableCell>
              <TableCell align="right">{row.adress}</TableCell>
              <TableCell align="right">{row.price}₪</TableCell>
              <TableCell align="right">
                <Button
                  variant="contained"
                  color="primary"
                  style={{ backgroundColor: "rgb(137, 6, 137)" }}
                >
                  צפה במוצרים
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
