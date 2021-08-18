import React from "react";
import DateFnsUtils from "@date-io/date-fns";
import {
  KeyboardDatePicker,
  MuiPickersUtilsProvider,
} from "@material-ui/pickers";

const PatientsLabResultsDateComponents = () => {
  return (
    <div className="patients-date-container">
      <div className="patients-date-selector-div">
        <label>View Tests By Date/ All Tests for pet</label>
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
          <KeyboardDatePicker
            autoOk
            variant="inline"
            inputVariant="outlined"
            format="MM/dd/yyyy"
            value={Date.now()}
            InputAdornmentProps={{ position: "start" }}
            //onChange={date => handleDateChange(date)}
          />
        </MuiPickersUtilsProvider>
      </div>
      <div className="staus-icon-container">
      <div className="patients-status-container">
          <span className="status-span">Partial</span>
          <span className="eta-span">Approx ETA: Thur, Jul 15,2021</span>
      </div>
      <div className="patients-download-icons-container">
          images will be displayed here 
      </div>     
      </div>
    </div>
  );
};
export default PatientsLabResultsDateComponents;
