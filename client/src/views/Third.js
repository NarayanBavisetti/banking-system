import React, { useContext } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import { multiStepContext } from "../Context/StepContext";
import { Grid, Button } from "@material-ui/core";



const useStyles = makeStyles({
  table: {
    // minWidth: 65,
  },
});


export default function Third() {
  const { userData, setUserData, setCurrentStep, submitData } = useContext(multiStepContext);
  const classes = useStyles();
  return (
    <div>
      <Grid container>
        <Grid item xs={6}>
          <TableContainer component={Paper}>
            <Table className={classes.table} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell>Categories</TableCell>
                  <TableCell align="right">Details</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow>
                  <TableCell component="th" scope="row">
                    First Name
                  </TableCell>
                  <TableCell align="right">{userData.firstName}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell component="th" scope="row">
                    Last Name
                  </TableCell>
                  <TableCell align="right">{userData.lastName}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell component="th" scope="row">
                    Address
                  </TableCell>
                  <TableCell align="right">{userData.Address}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell component="th" scope="row">
                    Gender
                  </TableCell>
                  <TableCell align="right">{userData.gender}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell component="th" scope="row">
                    Phone Number
                  </TableCell>
                  <TableCell align="right">{userData.Phone}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell component="th" scope="row">
                    DOB
                  </TableCell>
                  <TableCell align="right">{userData.DOB}</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
        </Grid>
        <Grid item xs={6}>
          <TableContainer component={Paper}>
            <Table className={classes.table} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell>Categories</TableCell>
                  <TableCell align="right">Details</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow>
                  <TableCell component="th" scope="row">
                    Account Name
                  </TableCell>
                  <TableCell align="right">{userData.name}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell component="th" scope="row">
                    Account - Type
                  </TableCell>
                  <TableCell align="right">{userData.accountType}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell component="th" scope="row">
                    E-mail
                  </TableCell>
                  <TableCell align="right">{userData.email}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell component="th" scope="row">
                    Deposit Amount
                  </TableCell>
                  <TableCell align="right">{userData.amount}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell component="th" scope="row">
                    Employment Status
                  </TableCell>
                  <TableCell align="right">{userData.employment}</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
        </Grid>
        <Button
          varient="contained"
          color="primary"
          onClick={() => setCurrentStep(2)}
        >
          Back
        </Button>
        <Button varient="contained" color="secondary" onClick={submitData}>
          Submit
        </Button>
      </Grid>
    </div>
  );
}
