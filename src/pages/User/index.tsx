import { Stack, Typography } from "@mui/material";
import FormControl from "../../components/User/UserCreate";
import UserTable from "../../components/User/UserList";

export default function User() {
  // const onEdit = (id: number | string) => {
  //   const newArr = user.filter((item) => item.id === id);
  //   reset(newArr[0]);
  //   setUpdate(true);
  // };

  return (
    <Stack
      sx={{
        flexDirection: "column",
        justifyContent: "center",
      }}
    >
      <Typography
        variant="h4"
        sx={{ alignSelf: "center" }}
        color="text.secondary"
      >
        Form
      </Typography>
      <FormControl />

      <UserTable />
    </Stack>
  );
}
