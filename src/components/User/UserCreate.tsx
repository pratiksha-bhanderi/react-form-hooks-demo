// FormControl.tsx
import { FC, useEffect, useState } from "react";
import InputControl from "../InputControl";
import { Button, Grid, Stack } from "@mui/material";
import { FormItem, RootState, useAppDispatch } from "../../utils/types";
import { v4 as uuidv4 } from "uuid";
import { useSelector } from "react-redux";
import { defaultFormValue } from "../../utils/constant";
import { addUser, editUser, updateUser } from "../../store/slice/userSlice";
import { checkObjectIsEmpty } from "../../utils/validation";
import { FormProvider, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { userSchema } from "../../utils/schema";
const FormControl: FC = () => {
  const dispatch = useAppDispatch();
  const { user, userEdit } = useSelector(({ user }: RootState) => user);
  const [disabled, setDisabled] = useState(false);
  const methods = useForm<FormItem>({
    defaultValues: defaultFormValue,
    resolver: yupResolver(userSchema),
    mode: "all",
  });

  useEffect(() => {
    if (checkObjectIsEmpty(methods.watch())) {
      setDisabled(true);
    } else {
      setDisabled(false);
    }
  }, [methods, methods.watch]);

  useEffect(() => {
    if (userEdit.id !== "") {
      methods.reset(userEdit);
    }
  }, [methods, userEdit]);

  const onsubmit = (formValue: FormItem) => {
    if (formValue?.id) {
      let newArr = user.map((item) => {
        return item.id === formValue?.id ? formValue : item;
      });
      dispatch(updateUser(newArr));
      dispatch(editUser({}));
    } else {
      const newObj = { ...formValue, id: uuidv4() };
      dispatch(addUser(newObj));
    }

    methods.reset(defaultFormValue);
  };
  return (
    <FormProvider {...methods}>
      <Stack sx={{ alignItems: "center" }}>
        <form onSubmit={methods.handleSubmit(onsubmit)}>
          <Grid
            container
            width={"470px"}
            sx={{ justifyContent: "center", mt: 2 }}
            spacing={2}
          >
            <Grid item xs={6}>
              <InputControl name={"first_name"} label={"First Name"} required />
            </Grid>
            <Grid item xs={6}>
              <InputControl name={"last_name"} label={"Last Name"} required />
            </Grid>

            <Grid item xs={6}>
              <InputControl name={"middle_name"} label={"Middle Name"} />
            </Grid>
            <Grid item xs={6}>
              <InputControl
                name={"phone_number"}
                label={"Phone Number"}
                type={"number"}
                required
              />
            </Grid>

            <Grid item xs={12}>
              <InputControl
                name={"email"}
                label={"Email"}
                type={"email"}
                required
              />
            </Grid>
            <Button
              variant="contained"
              disabled={disabled}
              sx={{ width: "110px", alignSelf: "center", mt: 2 }}
              onClick={methods.handleSubmit(onsubmit)}
            >
              {userEdit?.id ? "Update" : "Submit"}
            </Button>
          </Grid>
        </form>
      </Stack>
    </FormProvider>
  );
};

export default FormControl;
