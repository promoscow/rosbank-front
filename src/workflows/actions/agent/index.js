import types from "./types";

/* ------------------------------------------------ */

const sendAgentData = (data, history) => ({
  type: types.SEND_AGENT_DATA,
  payload: { data, history }
});

const sendAgentDataSuccess = data => ({
  type: types.SEND_AGENT_DATA_SUCCESS,
  payload: data
});

const sendAgentDataFailed = response => ({
  type: types.SEND_AGENT_DATA_FAILED
});

export default {
  sendAgentData,
  sendAgentDataSuccess,
  sendAgentDataFailed
};
