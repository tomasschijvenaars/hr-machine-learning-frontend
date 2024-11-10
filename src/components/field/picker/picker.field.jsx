import { Controller } from "react-hook-form";
import PropTypes from "prop-types";
import React from "react";
import { Autocomplete, TextField as MuiTextField } from "@mui/material";

function PickerField(props) {
  const { 
    control, 
    name, 
    label, 
    placeholder = "",
    options = [], 
    fullWidth = true, 
    required = false,
    multiple = false,
    ...rest 
  } = props;

  return (
    <Controller
      name={name}
      control={control}
      render={({ field: { onChange, onBlur, value }, fieldState: { error } }) => (
        <Autocomplete
          multiple={multiple}
          options={options}
          value={value || []}
          onChange={(event, newValue) => onChange(newValue)}
          onBlur={onBlur}
          renderInput={(params) => (
            <MuiTextField
              {...params}
              label={label}
              placeholder={placeholder}
              fullWidth={fullWidth}
              required={required}
              error={!!error}
              helperText={error ? error.message : ""}
              variant="outlined"
            />
          )}
          {...rest}
        />
      )}
    />
  );
}

PickerField.propTypes = {
  control: PropTypes.object.isRequired,
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  fullWidth: PropTypes.bool,
  multiple: PropTypes.bool,
  required: PropTypes.bool,
};

export default PickerField;
