import { Controller } from "react-hook-form";
import PropTypes from "prop-types";
import React from "react";

// Core
import { Box, Typography } from '@mui/material';
import { Button } from '@components';


function UploadPdfField(props) {
  const { 
    control, 
    name 
  } = props;

  return (
    <Controller
      name={name}
      control={control}
      render={({ field: { onChange, onBlur, value } }) => (
        <Box
          sx={{ // TODO make use of style file
            border: '2px dashed #1976d2',
            borderRadius: '8px',
            padding: '16px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            marginBottom: '16px',
          }}
        >
          <input
            type="file"
            accept="application/pdf"
            onChange={(e) => {
              onChange(e.target.files); // Update the field value
            }}
            onBlur={onBlur} // Set blur state
            style={{ display: 'none' }}
            id={`${name}-file-upload`}
          />
          <label htmlFor={`${name}-file-upload`}>
            <Button variant="outlined" component="span">
              Choose PDF
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
};

UploadPdfField.propTypes = {
  control: PropTypes.object.isRequired,
  name: PropTypes.string.isRequired,
};

export default UploadPdfField;
