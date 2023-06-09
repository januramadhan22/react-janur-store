import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/index.css";
import App from "./routes";
import { Provider } from "react-redux";
import store from "./utils/store/store";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
