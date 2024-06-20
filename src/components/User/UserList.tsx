// UserTable.tsx
import { FC, useState } from "react";
import {
  DataGrid,
  GridActionsCellItem,
  GridColDef,
  GridRowId,
  GridRowSelectionModel,
} from "@mui/x-data-grid";

import { useSelector } from "react-redux";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/DeleteOutlined";
import { Button } from "@mui/material";
import CheckBoxIcon from "@mui/icons-material/CheckBox";
import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank";
import { RootState, useAppDispatch } from "../../utils/types";
import { editUser, removerUser } from "../../store/slice/userSlice";

const UserList: FC = () => {
  const dispatch = useAppDispatch();
  const { user } = useSelector(({ user }: RootState) => user);

  const [selectedUser, setSelectedUser] = useState<GridRowSelectionModel>([]);

  const onCheckUser = (id: GridRowId) => {
    if (selectedUser.includes(id)) {
      const newArr = selectedUser.filter((item) => item !== id);
      return setSelectedUser(newArr);
    }
    const newArr = [...selectedUser, id];
    return setSelectedUser(newArr);
  };
  const onCheckAllUser = () => {
    let newArr: GridRowId[] = [];
    if (selectedUser.length !== user.length) {
      user.forEach((item) => newArr.push(item.id));
    }
    setSelectedUser(newArr);
  };

  const columns: GridColDef[] = [
    {
      field: "ischeck",
      type: "actions",
      width: 50,
      renderHeader: () => (
        <GridActionsCellItem
          icon={
            user.length !== 0 && selectedUser.length === user.length ? (
              <CheckBoxIcon />
            ) : (
              <CheckBoxOutlineBlankIcon />
            )
          }
          label="Edit"
          className="textPrimary"
          onClick={() => onCheckAllUser()}
          color="inherit"
        />
      ),

      renderCell: ({ id }) => {
        return [
          <GridActionsCellItem
            icon={
              selectedUser.includes(id) ? (
                <CheckBoxIcon />
              ) : (
                <CheckBoxOutlineBlankIcon />
              )
            }
            label="Edit"
            className="textPrimary"
            onClick={() => onCheckUser(id)}
            color="inherit"
          />,
        ];
      },
    },
    {
      field: "first_name",
      headerName: "First name",
      width: 230,
    },
    {
      field: "last_name",
      headerName: "Last name",
      width: 230,
    },
    {
      field: "middle_name",
      headerName: "Middle name",
      width: 230,
    },
    {
      field: "phone_number",
      headerName: "Phone number",
      width: 230,
    },
    { field: "email", headerName: "Email", width: 230 },
    {
      field: "actions",
      type: "actions",
      headerName: "Actions",
      width: 230,
      cellClassName: "actions",
      renderCell: ({ id }) => {
        return (
          <>
            <GridActionsCellItem
              icon={<EditIcon />}
              label="Edit"
              className="textPrimary"
              onClick={handleEditClick(id)}
              color="inherit"
            />
            <GridActionsCellItem
              icon={<DeleteIcon />}
              label="Delete"
              onClick={handleDeleteClick(id)}
              color="inherit"
            />
          </>
        );
      },
    },
  ];
  const handleDeleteClick = (id: GridRowId) => () => {
    const newArr = user.filter((item) => item.id !== id);
    dispatch(removerUser(newArr));
  };
  const handleEditClick = (id: GridRowId) => () => {
    const newArr = user.filter((item) => item.id === id);
    dispatch(editUser(newArr[0]));
    // onEdit(id);
  };
  const handleDeleteSelectedClick = () => {
    const newArr = user.filter((item) => !selectedUser.includes(item.id));
    dispatch(removerUser(newArr));
    setSelectedUser([]);
  };
  return (
    <>
      <Button
        variant="contained"
        sx={{ width: "250px", mt: 1, mb: 1 }}
        onClick={() => handleDeleteSelectedClick()}
      >
        Delete Selected User
      </Button>
      <DataGrid
        rows={user}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 5 },
          },
        }}
        onRowSelectionModelChange={(rowSelectionModel: GridRowSelectionModel) =>
          setSelectedUser(rowSelectionModel)
        }
        pageSizeOptions={[5, 10, 15, 20, 25]}
      />
    </>
  );
};

export default UserList;
