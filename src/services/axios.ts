import axios from 'axios';

export const axiosInstance = axios.create({
    baseURL: 'https://7y1q5sdvd1.execute-api.eu-central-1.amazonaws.com/api',
    timeout: 1000
});
