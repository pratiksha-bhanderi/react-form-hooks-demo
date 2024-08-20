import { Button, Stack, Typography } from "@mui/material";
import { RootState, useAppDispatch } from "../../utils/types";
import { useSelector } from "react-redux";
import { logout } from "../../store/slice/authSlice";
import { Navigate, useNavigate } from "react-router-dom";
import { useEffect } from "react";

export default function DashboardScreen() {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { userData, userToken } = useSelector(({ auth }: RootState) => auth);
  const Logout = () => {
    dispatch(logout());
    navigate("/login");
  };
  useEffect(() => {
    if (userToken === null) {
      <Navigate to={"/login"} />;
    }
  }, [userData, userToken]);
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
        name :- {userData.name}
      </Typography>
      <Button
        variant="contained"
        sx={{
          width: "200",
          alignSelf: "center",
          mt: 2,
          mb: 2,
          backgroundColor: "#01a0e1",
        }}
        onClick={Logout}
      >
        LogOut
      </Button>
      <Button
        variant="contained"
        sx={{
          width: "200",
          alignSelf: "center",
          mt: 2,
          mb: 2,
          backgroundColor: "#01a0e1",
        }}
        onClick={() => navigate("/user")}
      >
        UserList
      </Button>
    </Stack>
  );
}
