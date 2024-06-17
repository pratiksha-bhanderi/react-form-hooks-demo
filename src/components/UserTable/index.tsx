// UserTable.tsx
import { FC, useState } from "react";
import {
  DataGrid,
  GridActionsCellItem,
  GridColDef,
  GridRowId,
  GridRowSelectionModel,
} from "@mui/x-data-grid";
import { RootState, useAppDispatch } from "../../store";
import { useSelector } from "react-redux";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/DeleteOutlined";
import { removerUser } from "../../store/slice/FormSlice";
import { Button } from "@mui/material";
import { UserTableProps } from "../../utils/types";

const UserTable: FC<UserTableProps> = ({ onEdit, setSelectedUser }) => {
  const dispatch = useAppDispatch();
  const { user } = useSelector((state: RootState) => state.form);
  const columns: GridColDef[] = [
    { field: "id", headerName: "ID", width: 70 },
    { field: "first_name", headerName: "First name", width: 130 },
    { field: "last_name", headerName: "Last name", width: 130 },
    { field: "middle_name", headerName: "Middle name", width: 130 },
    { field: "phone_number", headerName: "Phone number", width: 130 },
    { field: "email", headerName: "Email", width: 150 },
    { field: "password", headerName: "Password", width: 130 },
    {
      field: "actions",
      type: "actions",
      headerName: "Actions",
      width: 100,
      cellClassName: "actions",
      getActions: ({ id }) => {
        return [
          <GridActionsCellItem
            icon={<EditIcon />}
            label="Edit"
            className="textPrimary"
            onClick={handleEditClick(id)}
            color="inherit"
          />,
          <GridActionsCellItem
            icon={<DeleteIcon />}
            label="Delete"
            onClick={handleDeleteClick(id)}
            color="inherit"
          />,
        ];
      },
    },
  ];
  const handleDeleteClick = (id: GridRowId) => () => {
    dispatch(removerUser(user.filter((item) => item.id !== id)));
  };
  const handleEditClick = (id: GridRowId) => () => {
    onEdit(id);
  };

  return (
    <DataGrid
      rows={user}
      columns={columns}
      sx={{ mt: 1, alignContent: "center" }}
      initialState={{
        pagination: {
          paginationModel: { page: 0, pageSize: 5 },
        },
      }}
      onRowSelectionModelChange={(rowSelectionModel: GridRowSelectionModel) =>
        setSelectedUser(rowSelectionModel)
      }
      pageSizeOptions={[5, 10]}
      checkboxSelection
    />
  );
};

export default UserTable;
