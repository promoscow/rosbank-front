import agentActions from "../../actions/agent/types";

const initialState = {
  loading: false,
  result: undefined
};

const institutions = (state = initialState, action) => {
  const reducer = {
    [agentActions.SEND_AGENT_DATA]: () => {
      return {
        ...state,
        loading: true
      };
    },
    [agentActions.SEND_AGENT_DATA_SUCCESS]: () => {
      return {
        ...state,
        loading: false,
        result: action.payload
      };
    },
    [agentActions.SEND_AGENT_DATA_FAILED]: () => {
      return {
        ...state,
        loading: false
      };
    }
  };

  return (reducer[action.type] && reducer[action.type]()) || { ...state };
};

export default institutions;
