import React from "react";
import { Provider } from "react-redux";

import "./App.css";

import rootSaga from "../../workflows/sagas";
import createReduxStore from "../../workflows/reducers/index";

import Router from "../Router";

const store = createReduxStore();
store.runSaga(rootSaga);

function App() {
  return (
    <Provider store={store}>
      <Router />
    </Provider>
  );
}

export default App;
