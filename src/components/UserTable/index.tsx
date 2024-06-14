// UserTable.tsx
import { FC, useState } from 'react'
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { RootState } from '../../store';
import {useSelector} from 'react-redux'
const columns: GridColDef[] = [
  { field: 'id', headerName: 'ID', width: 70 },
  { field: 'first_name', headerName: 'First name', width: 130 },
  { field: 'last_name', headerName: 'Last name', width: 130 },
  { field: 'middle_name', headerName: 'Middle name', width: 130 },
  { field: 'phone_number', headerName: 'Phone number', width: 100 },
  { field: 'email', headerName: 'Email', width: 150 },
  { field: 'password', headerName: 'Password', width: 130 },
];

const rows = [
  { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 },
  { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
  { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
  { id: 4, lastName: 'Stark', firstName: 'Arya', age: null },
];

const UserTable: FC = () => {
  const {user} = useSelector((state:RootState) => state.form);
  return (

    <DataGrid
    rows={user}
    columns={columns}
    initialState={{
      pagination: {
        paginationModel: { page: 0, pageSize: 5 },
      },
    }}
    onRowSelectionModelChange={itm => console.log(itm)}
    pageSizeOptions={[5, 10]}
    checkboxSelection
  />
  )
}

export default UserTable
