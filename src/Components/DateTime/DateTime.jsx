import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import DateTimePicker from "@mui/lab/DateTimePicker";

function DateTime(props) {
  const [value, setValue] = useState(new Date());

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <DateTimePicker
        renderInput={(props) => <TextField {...props} />}
        label={props.label}
        value={value}
        onChange={(newValue) => {
          setValue(newValue);
          let time = Date.parse(newValue);
          props.alert(time, props.name);
        }}
      />
    </LocalizationProvider>
  );
}

export default DateTime;
