import axios from "axios";

export const Api = () => {
    const Server = axios.create({
        baseURL: 'https://api.api-futebol.com.br/v1',
    })

    return Server;
}