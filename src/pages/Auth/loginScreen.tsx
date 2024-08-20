import * as React from "react";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Container } from "@mui/material";
import logo from "../../assets/images/logo.png";
import { FormProvider, useForm } from "react-hook-form";
import { defaultLoginFormValue } from "../../utils/constant";
import { LoginItem, RootState, useAppDispatch } from "../../utils/types";
import { yupResolver } from "@hookform/resolvers/yup";
import { loginSchema } from "../../utils/schema";
import InputControl from "../../components/InputControl";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { login } from "../../store/slice/authSlice";
import toast from "react-hot-toast";
const defaultTheme = createTheme();

export default function LoginScreen() {
  const dispatch = useAppDispatch();
  const { userData } = useSelector(({ auth }: RootState) => auth);
  const navigate = useNavigate();

  const methods = useForm<LoginItem>({
    defaultValues: defaultLoginFormValue,
    resolver: yupResolver(loginSchema),
    mode: "all",
  });
  console.log("ghdfghdh", userData);

  const onsubmit = (formValue: LoginItem) => {
    if (userData.email.length > 0) {
      if (!userData.email.match(formValue.email)) {
        toast.error("Enter valid Email Address.");
      } else if (!userData.password.match(formValue.password)) {
        toast.error("Enter valid Password.");
      } else {
        toast.success("Login successfully.");
        methods.reset(defaultLoginFormValue);
        dispatch(login());
        navigate("/dashboard");
      }
    } else {
      toast.error("Please create account to sign in.");
    }
  };

  return (
    <FormProvider {...methods}>
      <ThemeProvider theme={defaultTheme}>
        <Grid
          container
          component="main"
          sx={{
            height: "100vh",
            width: "100wh",
            justifyContent: "center",

            alignItems: "center",
          }}
        >
          <video
            style={{
              flex: 1,
              position: "fixed",
              width: "100%",
              height: "100%",
              objectFit: "cover",
              zIndex: 0,
            }}
            autoPlay
            loop
            muted
            className="w-full h-screen object-cover"
          >
            <source
              src="https://videos.pexels.com/video-files/4782367/4782367-uhd_2560_1440_30fps.mp4"
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>
          <Grid
            item
            position={"absolute"}
            sx={{
              backgroundColor: "#ffffffcc",
              paddingRight: "3%",
              paddingLeft: "3%",
            }}
            borderRadius={2}
            //   sm={12}
            component={Paper}
          >
            <Container component="main" maxWidth="xs">
              <CssBaseline />
              <Box
                sx={{
                  mb: 4,
                  marginTop: 4,
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <img src={logo} style={{ height: "100px", width: "110px" }} />

                <Typography component="h1" variant="h5">
                  Sign in
                </Typography>
                <Box component="form" sx={{ mt: 2 }}>
                  <Grid container spacing={2}>
                    <Grid item xs={12}>
                      <InputControl name={"email"} label={"Email"} required />
                    </Grid>
                    <Grid item xs={12}>
                      <InputControl
                        name={"password"}
                        label={"Password"}
                        type={"password"}
                        required
                      />
                    </Grid>
                  </Grid>

                  <Grid
                    container
                    justifyContent="flex-end"
                    alignContent={"center"}
                    sx={{ mt: 2 }}
                  >
                    <Grid item flex={1}>
                      <FormControlLabel
                        control={<Checkbox value="remember" color="primary" />}
                        label="Remember me"
                      />
                    </Grid>
                    <Grid item alignSelf={"center"}>
                      <Link href="#" variant="body2" sx={{ color: "#01a0e1" }}>
                        Forgot password?
                      </Link>
                    </Grid>
                  </Grid>
                  <Button
                    variant="contained"
                    fullWidth
                    sx={{
                      alignSelf: "center",
                      mt: 2,
                      mb: 2,
                      backgroundColor: "#01a0e1",
                    }}
                    onClick={methods.handleSubmit(onsubmit)}
                  >
                    Sign In
                  </Button>

                  <Grid container justifyContent={"center"} mt={2}>
                    <Link
                      onClick={() => navigate("/signUp")}
                      href="#"
                      variant="body2"
                      sx={{ textAlign: "center", color: "#01a0e1" }}
                    >
                      {"Don't have an account? Sign Up"}
                    </Link>
                  </Grid>
                </Box>
              </Box>
            </Container>
          </Grid>
        </Grid>
      </ThemeProvider>
    </FormProvider>
  );
}
