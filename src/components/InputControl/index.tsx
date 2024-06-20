import { FC } from "react";
import { TextField } from "@mui/material";
import { InputControlProps } from "../../utils/types";

const InputControl: FC<InputControlProps> = ({
  value,
  name,
  label,
  required = false,
  error,
  type,
  onChange,
}) => {
  return (
    <TextField
      name={name}
      value={value}
      type={type}
      fullWidth
      onChange={(event) => onChange(event.target.value)}
      required={required}
      label={label}
      sx={{ mb: "10px" }}
    />
  );
};

export default InputControl;
