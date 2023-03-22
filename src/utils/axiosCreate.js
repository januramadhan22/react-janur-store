import axios from "axios";

export const axiosCreate = axios.create({
  baseURL: "http://localhost:5000/",
});
