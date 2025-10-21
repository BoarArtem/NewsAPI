import axios from "axios"

const url = "https://newsapi.org/v2/everything"
const api = "7f2175b849ef4681bc58e348ea7100b8"

export async function getNews(query) {
    const params = {
        apiKey: api,
        q: query,
        pageSize: 5,
        language: "ru"
    };

    try {
        const response = await axios.get(url, { params });
        return response
    } catch (error) {
        console.error("Ошибка при получении данных от сервера");
        throw error;
    } 
}


export function getAPIForDeveloper() {
    const params = {
        apiKey: api,
        q: "Bitcoin",
        pageSize: 5,
        language: "ru"
    };

    return axios
        .get(url, { params })
        .then(response => {
            return console.log(response);
        })
        .catch(err => {
            console.log(err.message);
            
        })
}