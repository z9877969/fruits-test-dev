(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const l of s.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&n(l)}).observe(document,{childList:!0,subtree:!0});function r(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerpolicy&&(s.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?s.credentials="include":e.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(e){if(e.ep)return;e.ep=!0;const s=r(e);fetch(e.href,s)}})();const d=document.querySelectorAll(".js-burger"),c=document.querySelector(".js-burger-container"),u=document.querySelector(".js-burger-menu");console.log(c);console.log("object");c.addEventListener("click",o=>{console.log(o.target),o.target.closest(".js-burger")&&(console.log("click"),d.forEach(t=>{t.classList.toggle("hidden")}),u.classList.toggle("hidden"))});const a=document.querySelectorAll(".js-open-modal"),f=document.querySelectorAll(".js-close-modal"),i=o=>{const t=document.querySelector(".modal-"+o);t.classList.toggle("modal-close"),t.classList.contains("modal-close")||(t.style.top=window.pageYOffset+"px"),document.body.classList.toggle("body-stop")};a.forEach(o=>{o.addEventListener("click",()=>{const t=o.classList[0].split("__")[0];i(t)})});f.forEach(o=>{o.addEventListener("click",()=>{const t=[...o.closest(".backdrop").classList].find(r=>r.includes("modal-")).split("-")[1];i(t)})});document.querySelector("form").addEventListener("submit",o=>o.preventDefault());