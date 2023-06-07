import axios from "axios";

const instance = axios.create({
    baseURL: 'https://tinder-clone-umber.vercel.app/'
})

export default instance
