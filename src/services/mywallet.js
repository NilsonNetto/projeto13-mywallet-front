import axios from "axios";

const URL = 'localhost:5000';

function Register(body) {
  return axios.post(`${URL}/register`, body);
}

function Login(body) {
  return axios.post(`${URL}/login`, body);
}

export default { Register, Login };