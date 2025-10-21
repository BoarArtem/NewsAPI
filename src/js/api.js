import axios from "axios"

const url = "https://gnews.io/api/v4/search"
const api = "7b3b1b68eaf0145324516cf2b6d07dde"

export async function getNews(query) {
    const params = {
        apikey: api,
        q: query,
        max: 5,
        lang: "ru"
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
        apikey: api,
        q: "Bitcoin",
        max: 5,
        lang: "ru"
    };

    return axios
        .get(url, { params })
        .then(response => {
            return console.log(response.data.articles);
        })
        .catch(err => {
            console.log(err.message);
            
        })
}