// FormControl.tsx
import { FC, useEffect, useState } from "react";
import InputControl from "../InputControl";
import { Button, Grid, Stack } from "@mui/material";
import {
  FormItem,
  RootState,
  handleOnChangeProps,
  useAppDispatch,
} from "../../utils/types";
import { v4 as uuidv4 } from "uuid";
import { useSelector } from "react-redux";
import { defaultFormValue } from "../../utils/constant";
import { addUser, updateUser } from "../../store/slice/userSlice";
import { checkObjectIsEmpty } from "../../utils/validation";

const FormControl: FC = () => {
  const dispatch = useAppDispatch();
  const { user, userEdit } = useSelector(({ user }: RootState) => user);
  const [formValue, setFormValue] = useState<FormItem>(defaultFormValue);
  const [error] = useState({ name: "", message: "" });
  const [disabled, setDisabled] = useState(true);
  useEffect(() => {
    if (checkObjectIsEmpty(formValue)) {
      setDisabled(true);
    } else {
      setDisabled(false);
    }
  }, [formValue]);
  console.log("user", user);

  useEffect(() => {
    if (userEdit.id !== "") {
      setFormValue(userEdit);
    }
  }, [userEdit]);

  const onsubmit = () => {
    if (formValue.id !== "") {
      let newArr = user.map((item) => {
        return item.id === formValue?.id ? formValue : item;
      });
      dispatch(updateUser(newArr));
    } else {
      const newObj = { ...formValue, id: uuidv4() };
      dispatch(addUser(newObj));
    }

    setFormValue(defaultFormValue);
  };
  const handleOnChange = ({ name, value }: handleOnChangeProps) => {
    setFormValue({ ...formValue, [name]: value });
  };
  return (
    <Stack sx={{ alignItems: "center" }}>
      <form onSubmit={onsubmit}>
        <Grid
          container
          width={"423px"}
          sx={{ justifyContent: "center", mt: 2 }}
          spacing={2}
        >
          <Grid item>
            <InputControl
              value={formValue.first_name}
              name={"First Name"}
              label={"First Name"}
              type={"text"}
              onChange={(value) =>
                handleOnChange({ name: "first_name", value })
              }
              required
              error={error}
            />
          </Grid>
          <Grid item>
            <InputControl
              value={formValue.last_name}
              name={"Last Name"}
              label={"Last Name"}
              type={"text"}
              onChange={(value) => handleOnChange({ name: "last_name", value })}
              required
              error={error}
            />
          </Grid>

          <Grid item>
            <InputControl
              value={formValue.middle_name}
              name={"Middle Name"}
              label={"Middle Name"}
              type={"text"}
              onChange={(value) =>
                handleOnChange({ name: "middle_name", value })
              }
              required
              error={error}
            />
          </Grid>
          <Grid item>
            <InputControl
              value={formValue.phone_number}
              name={"Phone Number"}
              label={"Phone Number"}
              type={"text"}
              onChange={(value) =>
                handleOnChange({ name: "phone_number", value })
              }
              required
              error={error}
            />
          </Grid>

          <Grid item width={"420px"}>
            <InputControl
              value={formValue.email}
              name={"Email"}
              label={"Email"}
              onChange={(value) => handleOnChange({ name: "email", value })}
              type={"text"}
              required
              error={error}
            />
          </Grid>
          <Button
            variant="contained"
            disabled={disabled}
            sx={{ width: "110px", alignSelf: "center" }}
            onClick={onsubmit}
          >
            {formValue.id !== "" ? "Update" : "Submit"}
          </Button>
        </Grid>
      </form>
    </Stack>
  );
};

export default FormControl;
