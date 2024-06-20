import { Provider } from "react-redux";
import store from "./store";
import User from "./pages/User";

export default function App() {
  return (
    <Provider store={store}>
      <User />
    </Provider>
  );
}
