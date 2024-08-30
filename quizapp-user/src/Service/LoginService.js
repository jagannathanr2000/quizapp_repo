import {axiosAuthInstace} from "../api/AxiosInstance"

class LoginService {
    async register(user) {
        let response;
        try {
            response = await axiosAuthInstace.post('/register',user)
            console.log(response)
            return response
        }
         catch(err) {
            console.log(err)
         }
    }

    async login(user) {
        let response;
        try {
            response = await axiosAuthInstace.post('/login',user)
            return response
        }
         catch(err) {
            console.log(err.response.data.message)
         }
    }
   
}

export default new LoginService()