
import axios from "axios";


function getHabitos(token) {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }
    const promise = axios.get(`https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits`, config);
    return promise;
}

function deleteHabito(token,id){
    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }
    const promise = axios.delete(`https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${id}`, config);
    return promise;
}


function toggleHabito(token,id,acao){
    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }
    const body ={
        id,
    }
    const promise = axios.post(`https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${id}/${acao}`,body,config);
    return promise;
}

export {getHabitos,deleteHabito,toggleHabito};