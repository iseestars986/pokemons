import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";

import App from "./App";
import { store } from "./store";
import { ModalProvider } from "./contexts/modalContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ModalProvider>
      <Provider store={store}>
        <App />
      </Provider>
    </ModalProvider>
  </React.StrictMode>
);
