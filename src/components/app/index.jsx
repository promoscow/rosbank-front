import React from "react";
import { Provider } from "react-redux";

import { ThemeProvider } from "@material-ui/core/styles";
import "./App.css";

import rootSaga from "../../workflows/sagas";
import createReduxStore from "../../workflows/reducers/index";

import Router from "../Router";
import theme from "../../data/theme";

const store = createReduxStore();
store.runSaga(rootSaga);

function App() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <Router />
      </ThemeProvider>
    </Provider>
  );
}

export default App;
