import axios from "axios";
var localhost = "http://10.100.102.23:4000";
var ngrok = "http://0fc78c7b5aaa.ngrok.io";
export const notimp_feed_socket_endpoint = "http://10.100.102.23:4001";

export const baseUrl = ngrok;
export default axios.create({
  baseURL: baseUrl,
});
