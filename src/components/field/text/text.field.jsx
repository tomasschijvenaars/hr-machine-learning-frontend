import { Controller } from "react-hook-form";
import PropTypes from "prop-types";
import React from "react";

// Core
import { TextField as MuiTextField } from '@mui/material';

function TextField(props) {
  const { 
    control, 
    name, 
    label, 
    placeholder = "",
    type = "text",
    fullWidth = true, 
    required = false 
  } = props;

  return (
    <Controller
      name={name}
      control={control}
      render={({ field: { onChange, onBlur, value }, fieldState: { error } }) => (
        <MuiTextField
          label={label}
          type={type}
          placeholder={placeholder}
          fullWidth={fullWidth}
          required={required}
          onChange={onChange}
          onBlur={onBlur}
          value={value || ""}
          error={!!error}
          helperText={error ? error.message : ""}
          variant="outlined"
        />
      )}
    />
  );
}

TextField.propTypes = {
  control: PropTypes.object.isRequired,
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  type: PropTypes.string,
  placeholder: PropTypes.string,
  fullWidth: PropTypes.bool,
  required: PropTypes.bool,
};

export default TextField;
