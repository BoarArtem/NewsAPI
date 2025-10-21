import{a as f}from"./assets/vendor-ngrFHoWO.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const c of r.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&n(c)}).observe(document,{childList:!0,subtree:!0});function s(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(e){if(e.ep)return;e.ep=!0;const r=s(e);fetch(e.href,r)}})();const p="https://newsapi.org/v2/everything",d="7f2175b849ef4681bc58e348ea7100b8";async function m(o){const t={apiKey:d,q:o,pageSize:5,language:"ru"};try{return await f.get(p,{params:t})}catch(s){throw console.error("Ошибка при получении данных от сервера"),s}}const i=document.querySelector(".gallery"),l=document.querySelector(".form"),y=document.querySelector(".input-form");function g(){i.innerHTML=""}async function a(){try{l.addEventListener("submit",async o=>{o.preventDefault();const t=y.value.trim(),n=(await m(t)).data.articles;g(),h(n),console.log(t),t===""?console.log("Error"):a()})}catch(o){console.error(o.message)}finally{l.reset()}}function h(o){const t=o.map(({title:s,description:n,publishedAt:e,url:r,source:c,urlToImage:u})=>` 
                <li class="gallery-item">
                    <img src="${u}" class="gallery-img">
                    <h2 class="gallery-title">${s}</h2>
                    <p class="gallery-description">${n}</p>
                    <p class="gallery-publichedAt">Опубликовано: ${e}</p>
                    <a class="gallery-link" href="${r}">${c.name}</a>
                </li>
            `).join("");i.insertAdjacentHTML("beforeend",t)}a();
//# sourceMappingURL=index.js.map
