import axios from "axios";

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL || "https://fakestoreapi.com/",
  // withCredentials: true
})

api.interceptors.request.use((config) => {
  const token = localStorage.getItem("token")

  if (token) {
    config.headers.Authorization = `Bearer ${token}`
  }

  return config
})

api.interceptors.response.use(
  (response) => response,
  (error) => {

    const customError = {
      message:
        error.response?.data?.message ||
        "Something went wrong",

      status:
        error.response?.status,
    }

    return Promise.reject(customError)
  }
)

export default api