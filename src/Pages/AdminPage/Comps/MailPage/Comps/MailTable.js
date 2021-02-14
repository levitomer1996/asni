import React, { useContext } from "react";
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
import ModalContext from "../../../../../context/ModalContext";
import FiberNewIcon from "@material-ui/icons/FiberNew";
import asni_server from "../../../../../api/asni_server";
const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});
export default function MailTable({ mailList }) {
  const classes = useStyles();
  const { setIsModalOpen } = useContext(ModalContext);
  const handleRead = async (id, params) => {
    try {
      setIsModalOpen("contactus", params);

      const res = await asni_server.post(
        "/readmessage",
        { id },
        {
          headers: {
            //IsTokenExist = token.
            Authorization: `Bearer ${localStorage.getItem("ut")}`,
          },
        }
      );
    } catch (error) {}
  };
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
          {mailList.map(({ name, email, message, isRead, dateCreated, id }) => (
            <TableRow key={id}>
              <TableCell
                component="th"
                scope="row"
                style={{
                  fontWeight: isRead ? null : "bold",
                  color: isRead ? null : "red",
                }}
              >
                {isRead ? null : <FiberNewIcon />}
                {name}
              </TableCell>
              <TableCell
                align="left"
                style={{
                  fontWeight: isRead ? null : "bold",
                  color: isRead ? null : "red",
                }}
              >
                {email}
              </TableCell>
              <TableCell
                align="left"
                style={{
                  fontWeight: isRead ? null : "bold",
                  color: isRead ? null : "red",
                }}
              >
                {moment(dateCreated).format("LLLL")}
              </TableCell>
              <TableCell
                align="left"
                style={{
                  fontWeight: isRead ? null : "bold",
                  color: isRead ? null : "red",
                }}
              >
                <Button
                  variant="contained"
                  color="secondary"
                  style={{ backgroundColor: isRead ? "green" : "red" }}
                  onClick={() => {
                    handleRead(id, {
                      name,
                      email,
                      message,
                      isRead,
                      dateCreated,
                      id,
                    });
                  }}
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
