import React, { useContext,useState } from "react";
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
import { multiStepContext } from "../Context/StepContext";
import { Alert, AlertTitle } from "@material-ui/lab";
import InputAdornment from "@material-ui/core/InputAdornment";

export default function Second() {
  const { userData, setUserData, setCurrentStep } = useContext(multiStepContext);
  const [error , setError] = useState(false);
  const {name, email, employment, accountType, amount } = userData;

  function filledDetails() {
    if (name && email && employment && accountType && amount) {
      setCurrentStep(3);
    }else{
      setError(true);
    }
  }
  return (
    <div>
       {error ? <Alert severity="error">Please fill all the details</Alert> : null }
      <Grid container>
        <Grid item xs={6}>
          <TextField
            // className="feilds"
            margin="normal"
            label="Account Name"
            onChange={(e) => setUserData({ ...userData, name: e.target.value })}
            value={userData["name"]}
            color="white"
          />
          <TextField
            label="E-mail"
            type="email"
            onChange={(e) =>
              setUserData({ ...userData, email: e.target.value })
            }
            value={userData["email"]}
            color="secondary"
          />
          <FormControl>
            <FormLabel>Employment Status</FormLabel>
            <MuiRadioGroup
              row={true}
              onChange={(e) =>
                setUserData({ ...userData, employment: e.target.value })
              }
              value={userData["employment"]}
            >
              <FormControlLabel
                value="Student"
                control={<Radio />}
                label="Student"
              />
              <FormControlLabel
                value="Employed"
                control={<Radio />}
                label="Employed"
              />
              <FormControlLabel
                value="UnEmployed"
                control={<Radio />}
                label="UnEmployed"
              />
              <FormControlLabel
                value="Retired"
                control={<Radio />}
                label="Retired"
              />
            </MuiRadioGroup>
          </FormControl>
        </Grid>
        <Grid items xs={6}>
          <FormControl>
            <InputLabel>Account-Type</InputLabel>
            <MuiSelect
              onChange={(e) =>
                setUserData({ ...userData, accountType: e.target.value })
              }
              value={userData["accountType"]}
            >
              <MenuItem value="Current Account">Current Account</MenuItem>
              <MenuItem value="Savings Account">Savings Account</MenuItem>
            </MuiSelect>
          </FormControl>
          <TextField
            label="Deposit Amount"
            id="standard-start-adornment"
            onChange={(e) =>
              setUserData({ ...userData, amount: e.target.value })
            }
            value={userData["amount"]}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">₹</InputAdornment>
              ),
            }}
          />
        </Grid>
        <Button
          varient="contained"
          color="primary"
          onClick={() => setCurrentStep(1)}
        >
          Back
        </Button>
        <Button
          varient="contained"
          color="secondary"
          onClick={filledDetails}
        >
          Next
        </Button>
      </Grid>
    </div>
  );
}
