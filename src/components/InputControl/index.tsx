import { FC } from "react";
import { TextField } from "@mui/material";
import { InputControlProps } from "../../utils/types";
import { Controller, useFormContext } from "react-hook-form";

const InputControl: FC<InputControlProps> = ({
  name,
  label,
  type = "text",
  required = false,
}) => {
  const { control } = useFormContext();
  return (
    <Controller
      name={name}
      control={control}
      render={({
        field: { onChange, value, ref },
        fieldState: { error },
        formState,
      }) => (
        <TextField
          inputRef={ref}
          value={value}
          fullWidth
          type={type}
          onChange={onChange}
          required={required}
          label={label}
          error={!!error}
          helperText={error ? error.message : null}
        />
      )}
    />
  );
};

export default InputControl;
