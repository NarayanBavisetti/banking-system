import React from 'react'
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

export default function Second() {
    return (
        <div>
                        <Grid container>
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
            />

            {/* <Stepper style={{width:'18%',color:'red'}} activeStep="1" orientation="horizontal">
                <Step>
                    <StepLabel></StepLabel>
                </Step>
                <Step>
                    <StepLabel></StepLabel>
                </Step>
                <Step>
                    <StepLabel></StepLabel>
                </Step>
            </Stepper>
            {showStep(2)} */}
          </Grid>
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
        </Grid>  
        </div>
    )
}
