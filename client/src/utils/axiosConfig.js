import axios from "axios";

const instance = axios.create({
    baseURL: "http://localhost:7080"
})

export default instance;