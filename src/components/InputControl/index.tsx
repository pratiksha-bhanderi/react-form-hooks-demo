import { FC } from "react";
import { styled, TextField } from "@mui/material";
import { InputControlProps } from "../../utils/types";
import { Controller, useFormContext } from "react-hook-form";
import "./style.css";
const CssTextField = styled(TextField)(({ inputColor }: any) => ({
  "& .MuiInputLabel-root": {
    color: inputColor ?? "gray",
  },

  "&:hover label": {
    color: "#01a0e1",
  },
  "& .MuiOutlinedInput-root": {
    "&:hover fieldset": {
      borderColor: "#01a0e1",
    },
    "&.Mui-focused fieldset": {
      borderColor: "#01a0e1",
    },
  },
}));
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
        <CssTextField
          className={"input"}
          inputRef={ref}
          value={value}
          fullWidth
          onWheel={(event: { preventDefault: () => void }) => {
            event.preventDefault();
          }}
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
