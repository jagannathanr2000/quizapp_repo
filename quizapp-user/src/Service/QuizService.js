import axios from "axios"
import {axiosInstance} from "../api/AxiosInstance"

class QuizService {
    async getAllQuizzes() {
        const response = await axiosInstance.get()
        return response.data
    }
    async getRandomNumberOfQuiz(limit) {
        const response = await axiosInstance.get(`/random/${limit}`)
        return response.data
    }
    async getSingleQuestion(questionid) {
        const response = await axiosInstance.get(`/${questionid}`)
        return response.data
    }

    async getQuizSettings() {
        const response = await axiosInstance.get('/settings')
        return response.data
    }
}

export default new QuizService()