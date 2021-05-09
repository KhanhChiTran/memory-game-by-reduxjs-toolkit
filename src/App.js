import logo from "./logo.svg";
import "./App.css";
import Cards from "./components/Cards";

import { Provider } from "react-redux";

import store from "./redux/store";
function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Cards />
      </Provider>
    </div>
  );
}

export default App;
