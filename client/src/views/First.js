import React, { useContext, useState } from "react";
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
import InputAdornment from "@material-ui/core/InputAdornment";
import { multiStepContext } from "../Context/StepContext";
import { Alert, AlertTitle } from "@material-ui/lab";

export default function First() {
  const { userData, setUserData, setCurrentStep } = useContext(multiStepContext);
  const [error , setError] = useState(false);
  const {firstName, lastName, Phone, DOB, gender, Address  } = userData;

  function filledDetails() {
    if (firstName && lastName && Phone && DOB && gender && Address) {
      setCurrentStep(2);
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
            className="feilds"
            label="First Name"
            type="text"
            color="white"
            onChange={(e) =>
              setUserData({ ...userData, firstName: e.target.value })
            }
            value={userData["firstName"]}
          />

          <TextField style={{outline:'none'}}
            label="Address"
            // outline="none"
            color="secondary"
            onChange={(e) =>
              setUserData({ ...userData, Address: e.target.value })
            }
            value={userData["Address"]}
          />
          <TextField
            label="Phone Number"
            id="standard-start-adornment"
            onChange={(e) =>
              setUserData({ ...userData, Phone: e.target.value })
            }
            value={userData["Phone"]}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">+91</InputAdornment>
              ),
            }}
          />
        </Grid>
        <Grid items xs={6}>
          <FormControl>
            <TextField
              label="Last Name"
              color="secondary"
              onChange={(e) =>
                setUserData({ ...userData, lastName: e.target.value })
              }
              value={userData["lastName"]}
            />
            <FormLabel>Gender</FormLabel>
            <MuiRadioGroup
              onChange={(e) =>
                setUserData({ ...userData, gender: e.target.value })
              }
              value={userData["gender"]}
              row={true}
            >
              <FormControlLabel value="male" control={<Radio />} label="Male" />
              <FormControlLabel
                value="female"
                control={<Radio />}
                label="Female"
              />
            </MuiRadioGroup>
          </FormControl>
          <TextField
            type="date"
            color="secondary"
            onChange={(e) => setUserData({ ...userData, DOB: e.target.value })}
            value={userData["DOB"]}
          />
          {/* <FormControl>
            <InputLabel>Label</InputLabel>
            <MuiSelect>
              <MenuItem>none</MenuItem>
              <MenuItem>none</MenuItem>
              <MenuItem>none</MenuItem>
              <MenuItem>none</MenuItem>
            </MuiSelect>
          </FormControl> */}
        </Grid>
        <Button varient="contained" color="secondary" onClick={filledDetails}>
          Next
        </Button>
      </Grid>
    </div>
  );
}
