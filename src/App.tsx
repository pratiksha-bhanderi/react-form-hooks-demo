import { Provider } from "react-redux";
import store, { persistor } from "./store";
import { router } from "./routes/navigation";
import { RouterProvider } from "react-router-dom";
import { PersistGate } from "redux-persist/integration/react";
import { Toaster } from "react-hot-toast";
export default function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <RouterProvider router={router}></RouterProvider>
        <Toaster
          position="bottom-right"
          toastOptions={{
            // Define default options
            className: "",
            duration: 5000,
            style: {
              background: "white",
              color: "red",
            },

            // Default options for specific types
            success: {
              duration: 3000,
              style: {
                background: "white",
                color: "green",
              },
            },
          }}
        />
      </PersistGate>
    </Provider>
  );
}
