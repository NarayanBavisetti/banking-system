import React from "react";
// import "./Customers.css";
import First from "./First";
import Second from "./Second";
import Third from "./Third";
import {
  Grid,
  Stepper,
  Step,
  Paper,
  makeStyles,
  StepLabel,
  TextField,
  FormControl,
  FormLabel,
  RadioGroup as MuiRadioGroup,
  FormControlLabel,
  InputLabel,
  Radio,
  MenuItem,
  Select as MuiSelect,
  Button,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    // "& > *": {
    //   margin: theme.spacing(1),
    //   width: theme.spacing(32),
    //   // height: theme.spacing(16)
    // },
    "& .MuiFormControl-root": {
      width: "80%",
      margin: theme.spacing(1),
      testTransform: 'none',
      
    },
  },
  pageContent: {
    margin: theme.spacing(15),
    // marginLeft:"100px",
    padding: theme.spacing(5),
    // width: theme.spacing(90),
    // [theme.breakpoints.down('sm')]: {
    //   width: theme.spacing(30),
    // },
    // [theme.breakpoints.up('md')]: {
    //   width: theme.spacing(60),
    // },
    // [theme.breakpoints.up('lg')]: {
    //   width: theme.spacing(90),
    // },
    // margin:"80px 20% 100px 20%"
  },

}));
export default function AddCustomer() {
  const classes = useStyles();
    function showStep(step) {
      if (step === 1) {
        return <First />;
      } else if (step === 2) {
        return <Second />;
      } else {
        return <Third />;
      }
    }
  return (
    <Paper  elevation={6} className={classes.pageContent}>
      <form className={classes.root}>
        {/* <Grid container>
          <Grid item xs={6}>
            <TextField
              className="feilds"
              label="2First Name"
              varient="outlined"
              color="white"
            />
            <TextField
              label="First Name"
              varient="outlined"
              color="secondary"
            /> */}

            <Stepper style={{width:'18%',color:'red'}} activeStep="1" orientation="horizontal">
                <Step>
                    <StepLabel>Your Details</StepLabel>
                </Step>
                <Step>
                    <StepLabel>Bank Details</StepLabel>
                </Step>
                <Step>
                    <StepLabel> Confirmation</StepLabel>
                </Step>
            </Stepper>
            {showStep(1)}
          {/* </Grid>
          <Grid items xs={6}>
            <FormControl>
              <FormLabel>Gender</FormLabel>
              <MuiRadioGroup row={true}>
                <FormControlLabel
                  value="male"
                  control={<Radio />}
                  label="male"
                />
                <FormControlLabel
                  value="male"
                  control={<Radio />}
                  label="male"
                />
                <FormControlLabel
                  value="male"
                  control={<Radio />}
                  label="male"
                />
              </MuiRadioGroup>
            </FormControl>
            <FormControl>
              <InputLabel>Label</InputLabel>
              <MuiSelect>
                <MenuItem>none</MenuItem>
                <MenuItem>none</MenuItem>
                <MenuItem>none</MenuItem>
                <MenuItem>none</MenuItem>
              </MuiSelect>
            </FormControl>
          </Grid>
          <Button varient="contained" color="primary" >Back</Button>
          <Button varient="contained" color="secondary" >Next</Button>
        </Grid> */}
      </form>
    </Paper>
  );
}
