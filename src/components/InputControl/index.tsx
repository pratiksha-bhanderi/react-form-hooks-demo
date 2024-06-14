import { FC } from 'react'
import { TextField, TextFieldProps } from '@mui/material'

interface Props {
  name: string
  label: string
  type: 'text' | 'number' | 'email' | 'password' | 'tel'
  required?: boolean
  error:{
    name:string
    message:string
  }
  onChange:(value:string)=>void,
}

const InputControl: FC<Props> = ({ name, label, required = false, error,type,onChange }) => {
  return (

        <TextField
          name={name}
          
          type={type}
          fullWidth
          onChange={(event)=>onChange(event.target.value)
          }
          error={error.name===name}
          required={required}
          helperText={error.name===name?error?.message:'' }
          label={label}
          sx={{ mb: '10px' }}
        />
  )
}

export default InputControl
