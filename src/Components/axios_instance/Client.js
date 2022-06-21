import axios from "axios";
const client = axios.create({
  baseURL: `https://dummyjson.com/`,
});
export default client;

//Once the default instance (client) is set up, it can then be used anywhere.
