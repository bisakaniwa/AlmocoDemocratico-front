import axios from "axios";

export const api = axios.create({
    baseURL: "http://localhost:8080/api/v1/user",
    headers: { "ngrok-skip-browser-warning": "true" }
});

export const busca = async (url, setDado) => {
    const resposta = await api.get(url)
    setDado(resposta.data)
}