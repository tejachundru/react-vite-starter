import { BrowserRouter } from "react-router-dom";
import Router from "./router";
import store from "./store";
import { Provider } from "react-redux";

function App(): JSX.Element {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </Provider>
  );
}

export default App;
