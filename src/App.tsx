import {Provider} from 'react-redux'
import store from "./store";
import Form from "./pages/Form";

export default function App() {
  // const dispatch= useAppDispatch()
 
  return (
    <Provider store={store}>
     <Form />
    </Provider>
  );
}


