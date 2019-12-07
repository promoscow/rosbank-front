import { call, put, takeEvery } from "redux-saga/effects";
import agentApi from "../../../api/agent";
import agentActions from "../../actions/agent";
import agentActionsTypes from "../../actions/agent/types";

function* sendAgentDataHandler(action) {
  try {
    const response = yield call(() =>
      agentApi.sendAgentData(action.payload.data)
    );
    console.log("Результат запроса: ", response, response.data);
    yield put(agentActions.sendAgentDataSuccess(response.data));

    yield put(action.payload.history.push("/result"));
  } catch (e) {
    console.log(e);
    yield put(agentActions.sendAgentDataFailed(e));
  }
}

function* sendAgentData() {
  yield takeEvery(agentActionsTypes.SEND_AGENT_DATA, sendAgentDataHandler);
}

export default [sendAgentData];
