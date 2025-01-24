import axios from "axios";

const api = axios.create({
    //passamos a base para usar com varias apis
    baseURL: 'https://sujeitoprogramador.com/',

});

////para usar levar o response para outros arquivos
export default api;