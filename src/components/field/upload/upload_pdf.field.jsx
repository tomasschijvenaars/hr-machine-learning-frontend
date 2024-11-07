import { Controller } from "react-hook-form";
import PropTypes from "prop-types";
import React from "react";

// Core
import { Box, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { Button } from "@components";

// Style
import styles from "./upload_pdf.field.style";

function UploadPdfField(props) {
  const theme = useTheme();
  const classes = styles(theme);

  const { control, name } = props;

  return (
    <Controller
      name={name}
      control={control}
      render={({ field: { onChange, onBlur, value } }) => (
        <Box style={classes.box}>
          <input
            type="file"
            accept="application/pdf"
            onChange={(e) => {
              onChange(e.target.files); // Update the field value
            }}
            onBlur={onBlur} // Set blur state
            style={{ display: "none" }}
            id={`${name}-file-upload`}
          />
          <label htmlFor={`${name}-file-upload`}>
            <Button variant="outlined" component="span">
              Upload CV
            </Button>
          </label>
          {value?.length > 0 && (
            <Typography variant="body2">
              Selected file: {value[0].name}
            </Typography>
          )}
        </Box>
      )}
    />
  );
}

UploadPdfField.propTypes = {
  control: PropTypes.object.isRequired,
  name: PropTypes.string.isRequired,
};

export default UploadPdfField;
