import axios from "axios";


const  axiosAuthInstace = axios.create({
    baseURL: 'http://localhost:8090/api/v1/auth',
    timeout: 2000,
  });
  const axiosInstance = axios.create({
    baseURL: 'http://localhost:8080/api/v1/quizzes',
    timeout: 2000,
  });

  export {axiosInstance, axiosAuthInstace};