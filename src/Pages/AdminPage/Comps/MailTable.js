import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import { Button } from "@material-ui/core";
import moment from "moment";
import "moment/locale/he";
import FiberNewIcon from "@material-ui/icons/FiberNew";
const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});
export default function MailTable({ mailList }) {
  const classes = useStyles();

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="left">Name</TableCell>
            <TableCell align="left">Email</TableCell>
            <TableCell align="left">Time Sent</TableCell>
            <TableCell align="left">Message</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {mailList.map(({ name, email, message, isReaded, time_posted }) => (
            <TableRow key={name}>
              <TableCell
                component="th"
                scope="row"
                style={{
                  fontWeight: isReaded ? null : "bold",
                  color: isReaded ? null : "red",
                }}
              >
                {isReaded ? null : <FiberNewIcon />}
                {name}
              </TableCell>
              <TableCell
                align="left"
                style={{
                  fontWeight: isReaded ? null : "bold",
                  color: isReaded ? null : "red",
                }}
              >
                {email}
              </TableCell>
              <TableCell
                align="left"
                style={{
                  fontWeight: isReaded ? null : "bold",
                  color: isReaded ? null : "red",
                }}
              >
                {moment(time_posted).format("LLLL")}
              </TableCell>
              <TableCell
                align="left"
                style={{
                  fontWeight: isReaded ? null : "bold",
                  color: isReaded ? null : "red",
                }}
              >
                <Button
                  variant="contained"
                  color="secondary"
                  style={{ backgroundColor: isReaded ? "green" : "red" }}
                >
                  Read Message
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
