import { Button } from "@mui/material";
import { useState } from "react";

import FormControl from "../../components/Form";
import UserTable from "../../components/UserTable";
import {useSelector} from 'react-redux'
import { FormItem } from "../../store/interface";
import { useAppDispatch, type RootState } from '../../store'
import { addUser, defaultFormValue } from "../../store/slice/FormSlice";

export default function Form() {
  const dispatch= useAppDispatch()
  const {user} = useSelector((state:RootState) => state.form);
  // state to manage the dark mode
  const [formValue, setFormValue] = useState<FormItem>(defaultFormValue);
  const [error, seterror] = useState({name:"", message: "" });
  console.log('user',user);
  
  const onsubmit = () => {
    // const { first_name, last_name, phone_number, email, password } = formValue;
    // if (first_name.length <= 0) {
    //   seterror({ name:'First Name' ,message: "Enter First Name" });
    // } else if (last_name.length <= 0) {
    //   seterror({ name:'Last Name' ,message: "Enter Last Name" });
    // } else if (phone_number.length <=0) {
    //   seterror({ name:'Phone Number' ,message: "Enter Phone Number" });
    // } else if (email.length <= 0) {
    //   seterror({ name:'Email' ,message: "Enter Email Address" });
    // } else if (password.length <= 0) {
    //   seterror({ name:'Password' ,message: "Enter Password" });
    // } else{
      console.log("formValue", formValue);
      dispatch(addUser({...formValue,id:user.length}))
    // }

  };

  return (
  
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <h2>Form</h2>
        <FormControl
          error={error}
          formValue={formValue}
          setFormValue={setFormValue}
        />
        <Button variant="contained" onClick={() => onsubmit()}>
          Contained
        </Button>
        <UserTable />
      </div>
  );
}


