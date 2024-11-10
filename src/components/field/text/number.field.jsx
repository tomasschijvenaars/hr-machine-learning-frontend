import { Controller } from "react-hook-form";
import PropTypes from "prop-types";
import React from "react";
import { TextField as MuiTextField } from "@mui/material";

function NumberField(props) {
  const { 
    control, 
    name, 
    label, 
    placeholder = "",
    fullWidth = true, 
    required = false,
    ...rest 
  } = props;

  return (
    <Controller
      name={name}
      control={control}
      render={({ field: { onChange, onBlur, value }, fieldState: { error } }) => (
        <MuiTextField
          {...rest}
          label={label}
          placeholder={placeholder}
          fullWidth={fullWidth}
          required={required}
          onChange={(event) => {
            const newValue = event.target.value;
            // Allow only integer values
            const parsedValue = parseInt(newValue, 10);
            if (!isNaN(parsedValue) || newValue === "") {
              onChange(parsedValue || null);
            }
          }}
          onBlur={onBlur}
          value={value || ""}
          error={!!error}
          helperText={error ? error.message : ""}
          variant="outlined"
          type="number"
          inputProps={{
            inputMode: "numeric",
            pattern: "[0-9]*" // Numeric keypad on mobile
          }}
        />
      )}
    />
  );
}

NumberField.propTypes = {
  control: PropTypes.object.isRequired,
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  fullWidth: PropTypes.bool,
  required: PropTypes.bool,
};

export default NumberField;
