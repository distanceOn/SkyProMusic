import React from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { Provider } from "react-redux";
import store from "./redux/store";
import { AudioProvider } from "./contexts/audioContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <AudioProvider>
          <App />
        </AudioProvider>
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);
