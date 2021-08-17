import React, { useEffect, useState } from "react";
import Table from "@material-ui/core/Table";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import { Button } from "@material-ui/core";
import axios from "axios";
import { Link } from "react-router-dom";
import { Alert, AlertTitle } from "@material-ui/lab";

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

const useStyles = makeStyles({
  table: {
    minWidth: 50,
    //  marginTop:"100px",
    //  marginBottom:"200px",
    margin: "100px auto 200px",
    width: "70%",
  },
  tableBody: {
    margin: "10px",
  },
});

export default function Transactions() {
  const classes = useStyles();
  const [transactions, setTransactions] = useState([]);
  useEffect(async () => {
    await axios.get("/gettransactions").then((res) => {
      setTransactions(res.data);
    });
  }, []);
  return (
    <div>
      <Table className={classes.table} aria-label="customized table">
        <TableBody>
          {transactions.map((data, index) => {
            return (
              <StyledTableRow key={index}>
                <Alert severity="success" className={classes.tableBody}>
                  <h6>
                    {data.userOne} transfered ₹{data.amount} to {data.userTwo}
                  </h6>
                </Alert>
              </StyledTableRow>
            );
          })}
        </TableBody>
      </Table>
    </div>
  );
}
