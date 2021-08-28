import axios from "axios";

const server = axios.create();
// server.defaults.headers.common[''] = '';
server.defaults.baseURL = "http://3.35.248.237:8081/";

export default server;