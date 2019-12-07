import { fork, all } from "redux-saga/effects";
import agentSagas from "./agent";

const resultSagasArray = [...agentSagas];

export default function* root() {
  yield all(resultSagasArray.map(saga => fork(saga)));
}
