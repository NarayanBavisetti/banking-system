import React, { useEffect, useState } from "react";
import Table from "@material-ui/core/Table";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";
import axios from "axios";
import { Alert } from "@material-ui/lab";


const useStyles = makeStyles({
  table: {
    minWidth: 50,
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
                <>
                <Alert severity="success" className={classes.tableBody}>
                  <h6>
                    {data.userOne} transfered ₹{data.amount} to {data.userTwo}
                  </h6>
                </Alert>
                <Alert severity="error" className={classes.tableBody}>
                  <h6>
                    {data.userOne} transfered ₹{data.amount} to {data.userTwo}
                  </h6>
                </Alert>
                </>
            );
          })}
        </TableBody>
      </Table>
    </div>
  );
}
