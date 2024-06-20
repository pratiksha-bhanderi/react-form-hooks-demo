// FormControl.tsx
import { FC, useEffect, useState } from "react";
import InputControl from "../InputControl";
import { Button, Grid, Stack } from "@mui/material";
import { FormItem, RootState, useAppDispatch } from "../../utils/types";
import { useSelector } from "react-redux";
import { defaultFormValue } from "../../utils/const";
import { addUser, updateUser } from "../../store/slice/userSlice";

const FormControl: FC = () => {
  const dispatch = useAppDispatch();
  const { user, userEdit } = useSelector(({ user }: RootState) => user);
  const [formValue, setFormValue] = useState<FormItem>(defaultFormValue);
  const [error] = useState({ name: "", message: "" });
  const [update, setUpdate] = useState(false);

  useEffect(() => {
    if (userEdit.id !== "") {
      setFormValue(userEdit);
      setUpdate(true);
    }
  }, [userEdit]);

  const onsubmit = () => {
    if (update) {
      let newArr = user.map((item) => {
        return item.id === formValue?.id ? formValue : item;
      });
      dispatch(updateUser(newArr));
    } else {
      const newObj = { ...formValue, id: user.length };
      dispatch(addUser(newObj));
    }
    setUpdate(false);

    setFormValue(defaultFormValue);
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
                setFormValue({ ...formValue, first_name: value })
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
              onChange={(value) =>
                setFormValue({ ...formValue, last_name: value })
              }
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
                setFormValue({ ...formValue, middle_name: value })
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
                setFormValue({ ...formValue, phone_number: value })
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
              onChange={(value) => setFormValue({ ...formValue, email: value })}
              type={"text"}
              required
              error={error}
            />
          </Grid>
          <Button
            variant="contained"
            sx={{ width: "110px", alignSelf: "center" }}
            onClick={onsubmit}
          >
            {update ? "Update" : "Submit"}
          </Button>
        </Grid>
      </form>
    </Stack>
  );
};

export default FormControl;
