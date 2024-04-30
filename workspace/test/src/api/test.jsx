import axios from "axios";

// 경로를 작성
export const API_SERVER_HOST = 'http://seoulart.site';
const test = `${API_SERVER_HOST}/login`;


// /api/todo/{tno}
export const getOne = async() => {
    const res = await axios.get(`${test}`);
    return res.data;
}