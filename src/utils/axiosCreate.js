import axios from "axios";

export const axiosCreate = axios.create({
  baseURL: "https://www.themealdb.com/api/json/v1/1/",
});
