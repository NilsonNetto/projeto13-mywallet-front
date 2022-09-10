import axios from "axios";

const URL = 'http://localhost:5000';

function register(body) {
  return axios.post(`${URL}/register`, body);
}

function login(body) {
  return axios.post(`${URL}/login`, body);
}

function getHistory(headers) {
  return axios.get(`${URL}/transactions`, headers);
}

function makeTransaction(body, headers) {
  return axios.post(`${URL}/transactions`, body, headers);
}

function logout(headers) {
  return axios.delete(`${URL}/logout`, headers);
}

export { register, login, getHistory, makeTransaction, logout };