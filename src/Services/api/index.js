import axios from "axios";

const api = axios.create({
    baseURL: 'https://sujeitoprogramador.com/',

});

////para usar levar o response para outros arquivos
export default api;