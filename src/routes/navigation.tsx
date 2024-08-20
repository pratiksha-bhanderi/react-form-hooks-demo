import { Navigate, createBrowserRouter } from "react-router-dom";
import LoginScreen from "../pages/Auth/loginScreen";
import SignUpScreen from "../pages/Auth/signUpScreen";
import DashboardScreen from "../pages/Dashboard";
import { useSelector } from "react-redux";
import { RootState } from "../utils/types";
import User from "../pages/User";
import NotFound404 from "../pages/404";
import AddProductScreen from "../pages/Products";

export function PrivateRoute({
  children,
  path,
}: {
  children: React.ReactElement;
  path?: string;
}) {
  const { userToken } = useSelector(({ auth }: RootState) => auth);
  console.log("userToken", userToken);
  if (userToken) {
    return path ? <Navigate to={path} /> : children;
  } else {
    return <Navigate to={"/login"} />;
  }
}

export const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <PrivateRoute path="/dashboard">
        <DashboardScreen />
      </PrivateRoute>
    ),
  },
  { path: "/login", element: <LoginScreen />, errorElement: <NotFound404 /> },
  { path: "/signUp", element: <SignUpScreen />, errorElement: <NotFound404 /> },
  {
    path: "/dashboard",
    element: (
      <PrivateRoute>
        <DashboardScreen />
      </PrivateRoute>
    ),
  },
  {
    path: "/user",
    element: (
      <PrivateRoute>
        <User />
      </PrivateRoute>
    ),
  },
  {
    path: "/addProduct",
    element: (
      <PrivateRoute>
        <AddProductScreen />
      </PrivateRoute>
    ),
  },
  {
    path: "*",
    element: <NotFound404 />,
  },
]);
