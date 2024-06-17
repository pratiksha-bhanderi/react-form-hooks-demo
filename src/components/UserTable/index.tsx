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
import { FormItem, UserTableProps } from "../../utils/types";
import CheckBoxIcon from "@mui/icons-material/CheckBox";
import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank";
const UserTable: FC<UserTableProps> = ({ onEdit }) => {
  const dispatch = useAppDispatch();
  const { user } = useSelector((state: RootState) => state.form);

  const [selectedUser, setSelectedUser] = useState<GridRowSelectionModel>([]);

  const onCheckUser = (id: GridRowId) => {
    if (selectedUser.includes(id)) {
      return setSelectedUser(selectedUser.filter((item) => item !== id));
    }
    return setSelectedUser([...selectedUser, id]);
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
      headerName: "",
      width: 50,
      // cellClassName: "actions",
      renderHeader: ({}) => {
        return [
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
          />,
        ];
      },
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
      renderCell: ({ id }) => {
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
  const handleDeleteSelectedClick = () => {
    const newArr = user.filter((item) => !selectedUser.includes(item.id));
    dispatch(removerUser(newArr));
    setSelectedUser([]);
  };
  return (
    <>
      <Button
        variant="contained"
        sx={{ width: "250px", mt: 1 }}
        onClick={() => handleDeleteSelectedClick()}
      >
        Delete Selected User
      </Button>
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

        // checkboxSelection
      />
    </>
  );
};

export default UserTable;
