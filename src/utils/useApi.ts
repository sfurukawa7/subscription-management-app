import axios, { AxiosInstance } from "axios";

const axiosInstance: AxiosInstance = axios.create({
  baseURL: "https://3bfngyhk93.execute-api.ap-northeast-1.amazonaws.com/prod/",
  headers: {
    "Content-Type": "application/json",
    "x-api-key": process.env.NEXT_PUBLIC_AWS_X_API_KEY,
  },
});

export default axiosInstance;
