import { Button } from "@mui/material";
import { useState } from "react";

import FormControl from "../../components/Form";
import UserTable from "../../components/UserTable";
import { useSelector } from "react-redux";
import { useAppDispatch, type RootState } from "../../store";
import {
  addUser,
  defaultFormValue,
  removerUser,
  updateUser,
} from "../../store/slice/FormSlice";
import { GridRowSelectionModel } from "@mui/x-data-grid";
import { FormItem } from "../../utils/types";

export default function Form() {
  const dispatch = useAppDispatch();
  const { user } = useSelector((state: RootState) => state.form);
  // state to manage the dark mode
  const [formValue, setFormValue] = useState<FormItem>(defaultFormValue);
  const [error, seterror] = useState({ name: "", message: "" });
  const [update, setUpdate] = useState(false);
  console.log("user", user);

  const onsubmit = () => {
    if (update) {
      let newArr = user.map((item) => {
        return item.id === formValue?.id ? formValue : item;
      });
      dispatch(updateUser(newArr));
    } else {
      dispatch(addUser({ ...formValue, id: user.length }));
    }
    setUpdate(false);

    setFormValue(defaultFormValue);
  };

  const onEdit = (id: number | string) => {
    const newArr = user.filter((item) => item.id === id);
    setFormValue(newArr[0]);
    setUpdate(true);
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
      }}
    >
      <h2 style={{ alignSelf: "center" }}>Form</h2>
      <FormControl
        error={error}
        formValue={formValue}
        setFormValue={setFormValue}
      />
      <Button
        variant="contained"
        sx={{ width: "110px", alignSelf: "center" }}
        onClick={() => onsubmit()}
      >
        {update ? "Update" : "Submit"}
      </Button>

      <UserTable onEdit={onEdit} />
    </div>
  );
}
