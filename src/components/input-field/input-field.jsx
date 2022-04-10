import TextField from '@mui/material/TextField';
import React from 'react';

export const InputField = ({
  inputRef,
  name,
  variant = 'outlined',
  label,
  type = 'text',
  error,
  isFocus,
  fullWidth,
}) => {

  return (
    <TextField
      name={name}
      type={type}
      variant={variant}
      label={label}
      inputRef={inputRef}
      helperText={error?.message}
      error={!!error?.message}
      autoFocus={isFocus}
      fullWidth={fullWidth}
    />
  );
};
