import React from "react";
import ReactDOM from "react-dom";
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Web3ReactProvider } from "@web3-react/core";
import { getLibrary } from "./utils/web3React";
import { Provider } from "react-redux";
import store from "./redux/store/index";

ReactDOM.render(
  <Provider store={store}>
    <Web3ReactProvider getLibrary={getLibrary}>
      <App />
    </Web3ReactProvider>
  </Provider>,

  document.getElementById("root")
);

reportWebVitals();
