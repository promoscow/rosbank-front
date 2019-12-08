import { API_URL } from "../data/config";
import axios from "axios";

const sendAgentData = data => axios.post(`${API_URL}/agent/request`, data);

export default {
  sendAgentData
};
