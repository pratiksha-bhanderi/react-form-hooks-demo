import ReactDOM from "react-dom/client";
import { Routes, Route, Navigate, createBrowserRouter } from "react-router-dom";
import LoginScreen from "../pages/Auth/loginScreen";
import SignUpScreen from "../pages/Auth/signUpScreen";
import DashboardScreen from "../pages/Dashboard";
import { useSelector } from "react-redux";
import { RootState } from "../utils/types";
import User from "../pages/User";
import NotFound404 from "../pages/404";

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
export default function Navigation() {
  return (
    <Routes>
      <Route path="/login" element={<LoginScreen />} />

      <Route path="/signUp" element={<SignUpScreen />} />
      <Route
        path="/dashboard"
        element={
          <PrivateRoute>
            <DashboardScreen />
          </PrivateRoute>
        }
      />
      <Route
        path="/user"
        element={
          <PrivateRoute>
            <User />
          </PrivateRoute>
        }
      />
    </Routes>
  );
}

export const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <PrivateRoute path="/dashboard">
        <DashboardScreen />
      </PrivateRoute>
    ),
    errorElement: <NotFound404 />,
  },
  { path: "*", element: <Navigation />, errorElement: <NotFound404 /> },
]);
