import { getNews, getAPIForDeveloper } from "./js/api";

const galleryContainer = document.querySelector(".gallery")
const form = document.querySelector(".form")
const input = document.querySelector(".input-form")

function clearGallery() {
    galleryContainer.innerHTML = ""
}

async function renderNews() {
    try {
        form.addEventListener("submit", async (event) => {
            event.preventDefault()

            const value = input.value.trim();
            const response = await getNews(value)
            const news = response.data.articles

            clearGallery()
            newsMarkup(news)
            console.log(value);

            if (value === "") {
                console.log("Error")
            } else {
                renderNews();
            }


        })
    } catch (error) {
        console.error(error.message);
    } finally {
        form.reset()
    }
}

function newsMarkup(newsTitle) {
    const markup = newsTitle
        .map(({ title, description, publishedAt, url, source, image }) => {
            return ` 
                <li class="gallery-item">
                    <img src="${image}" class="gallery-img">
                    <h2 class="gallery-title">${title}</h2>
                    <p class="gallery-description">${description}</p>
                    <p class="gallery-publichedAt">Опубликовано: ${publishedAt}</p>
                    <a class="gallery-link" href="${url}">${source.name}</a>
                </li>
            `
        })
        .join("")

    galleryContainer.insertAdjacentHTML("beforeend", markup)
}

renderNews()