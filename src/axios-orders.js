import axios from 'axios';

const axiosInstance = axios.create({
    baseURL: 'https://react-my-burger-8fb17.firebaseio.com/'
})

export default axiosInstance;