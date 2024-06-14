// FormControl.tsx
import { FC, useState } from 'react'
import InputControl  from '../InputControl'
import { Grid } from "@mui/material";
import { FormItem } from '../../store/interface';

interface Error {
  name: string,
  message: string, 
}
interface FormProps {
  formValue:FormItem
  setFormValue:  React.Dispatch<React.SetStateAction<FormItem>>
  error:Error
}

const FormControl: FC<FormProps> = ({formValue,setFormValue,error}) => {
  return (

       <>
       <Grid container sx={{justifyContent:'center',mt:2}}  spacing={2}>
          <Grid item   >
              <InputControl
                name={"First Name"}
                label={"First Name"}
                type={"text"}
                onChange={(value)=>setFormValue({...formValue,first_name:value})}
                required
                error={error}
                
              />
          </Grid>
          <Grid item >
              <InputControl
                name={"Last Name"}
                label={"Last Name"}
                type={"text"}
                onChange={(value)=>setFormValue({...formValue,last_name:value})
                }
                required
                error={error}
              />
          </Grid>
        </Grid>
        <Grid container sx={{justifyContent:'center',mt:1,width:'100%'}}  spacing={2}>
          <Grid item   >
              <InputControl
                name={"Middle Name"}
                label={"Middle Name"}
                type={"text"}
                onChange={(value)=>setFormValue({...formValue,middle_name:value})}
                error={error}
              />
          </Grid>
          <Grid item >
              <InputControl
                name={"Phone Number"}
                label={"Phone Number"}
                type={'tel'}
                onChange={(value)=>setFormValue({...formValue,phone_number:value})}
                required
                error={error}
              />
          </Grid>
        </Grid>
        <Grid container sx={{justifyContent:'center',mt:1}}  spacing={2}>
          <Grid item xs={3.5}  >
              <InputControl
                name={"Email"}
                label={"Email"}
                onChange={(value)=>setFormValue({...formValue,email:value})}
                type={"text"}
                required
                error={error}
              />
          </Grid>
          
        </Grid>
        <Grid container sx={{justifyContent:'center',mt:0.5}}  spacing={2}>
          <Grid item xs={3.5} >
              <InputControl
                name={"Password"}
                label={"Password"}
                type={"text"}
                onChange={(value)=>setFormValue({...formValue,password:value})}
                required
                error={error}
              />
          </Grid>
         
        </Grid></>
  )
}

export default FormControl
