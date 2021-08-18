import { InputLabel, MenuItem, Select } from "@material-ui/core";
import React from "react";

const SelectDropDownWithoutBorder = () => {
  return (
    <div>     
      <Select
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        value={10} 
        disableUnderline      
      >
        <MenuItem value={10}>Ten</MenuItem>
        <MenuItem value={20}>Twenty</MenuItem>
      </Select>
    </div>
  );
};
export default SelectDropDownWithoutBorder;
