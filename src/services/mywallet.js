import axios from "axios";

const URL = 'localhost:5000';

function register(body) {
  return axios.post(`${URL}/register`, body);
}

function login(body) {
  return axios.post(`${URL}/login`, body);
}

function getHistory(headers) {
  return axios.get(`${URL}/history`, {}, headers);
}

function makeTransaction(body, headers) {
  return axios.post(`${URL}/transaction`, body, headers);
}

export default { register, login, getHistory, makeTransaction };