import { useState } from "react";
import "./App.css";
import { Provider } from "react-redux";
import Ui from "./redux/ui";
import store from "./redux/store";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Provider store={store}>
        <Ui />
      </Provider>
    </>
  );
}

export default App;
