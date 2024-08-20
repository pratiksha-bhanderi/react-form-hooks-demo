import { Button, Stack } from "@mui/material";
import { RootState } from "../../utils/types";
import { useSelector } from "react-redux";
import { Navigate, useNavigate } from "react-router-dom";
import { useEffect } from "react";

import NotFound404Image from "../../assets/images/404.png";
export default function NotFound404() {
  const navigate = useNavigate();
  const { userData, userToken } = useSelector(({ auth }: RootState) => auth);

  useEffect(() => {
    if (userToken === null) {
      <Navigate to={"/login"} />;
    }
    console.log("ghsfhsdfhsdhgf", userData);
  }, [userToken, userData]);

  return (
    <Stack
      sx={{
        flexDirection: "column",
        justifyContent: "center",
      }}
    >
      <img src={NotFound404Image} style={{ height: "100%", width: "100%" }} />
      <Button
        variant="contained"
        sx={{
          position: "absolute",
          bottom: 20,
          width: "200",
          alignSelf: "center",
          mt: 2,
          mb: 2,
          backgroundColor: "#01a0e1",
        }}
        onClick={() => navigate("/login")}
      >
        go to Login
      </Button>
    </Stack>
  );
}
