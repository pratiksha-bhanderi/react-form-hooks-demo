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
  index,
}) => {
  const { control, register, setValue } = useFormContext();
  return (
    <Controller
      name={`product[${index}].${name}`}
      control={control}
      render={({ fieldState: { error } }) => (
        <CssTextField
          {...register(`product[${index}].${name}`)}
          className={"input"}
          fullWidth
          // onWheel={(event: any) => {
          //   event.preventDefault();
          // }}
          type={type}
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
