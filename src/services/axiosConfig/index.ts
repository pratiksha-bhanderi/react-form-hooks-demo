import axios, { AxiosError } from "axios";
import { persistor } from "../../store";

export const axiosInstance = axios.create({
  baseURL: process.env.REACT_APP_BACKEND_API_URL,
  headers: { "Content-Type": "application/json" },
});
axiosInstance.interceptors.request.use(async function (config) {
  // var token = await getLocal(ACCESS_TOKEN);

  // if (token) {
  //   config.headers.token = `${token}`;
  // }

  return config;
});

// Add a request interceptor
axiosInstance.interceptors.response.use(
  (response: any) => {
    return response;
  },
  (error: AxiosError) => {
    const { response } = error;
    throw response;
  }
);

// Logout Handler
export const logoutHandler = () => {
  persistor.flush().then(() => {
    return persistor.purge();
  });
};
