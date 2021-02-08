import axios from "axios";
var localhost = "http://10.100.102.23:4000";
var ngrok = "http://dbe0245cb175.ngrok.io";
export const notimp_feed_socket_endpoint = "http://10.100.102.23:4001";

export const baseUrl = ngrok;
export default axios.create({
  baseURL: baseUrl,
});
