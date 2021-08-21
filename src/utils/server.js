import axios from "axios";

const server = axios.create();
// server.defaults.headers.common[''] = '';
server.defaults.baseURL = "http://localhost:8080";

export default server;