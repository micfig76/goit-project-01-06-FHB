(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))t(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const i of o.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&t(i)}).observe(document,{childList:!0,subtree:!0});function f(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function t(e){if(e.ep)return;e.ep=!0;const o=f(e);fetch(e.href,o)}})();document.addEventListener("DOMContentLoaded",function(){["data-order","data-thank-you"].forEach(n=>{const s=`[${n}-open]`,d=`[${n}-close]`,a=document.querySelectorAll(s),v=document.querySelectorAll(d),u=document.querySelector(`[${n}]`);u||r("Can`t find Modal with attribute "+u),a.length===0&&r("Can`t find Open modal button with attribute "+s),v.length===0&&r("Can`t find Close modal button with attribute "+d),a.forEach(m=>m.addEventListener("click",y)),v.forEach(m=>m.addEventListener("click",y));function y(m){m.preventDefault(),document.body.classList.toggle("modal-open"),u.classList.toggle("is-hidden")}});function r(n){const s="color: #bada55";console.log("%c"+n,s)}const f=document.querySelector("#myForm"),t=document.querySelector("#submitButton"),e=document.querySelector("#fullname"),o=document.querySelector("#emailform"),i=document.querySelector("#card"),E=document.querySelector("#resetButton");f.addEventListener("submit",c),e.addEventListener("input",c),o.addEventListener("input",c),i.addEventListener("input",c),E.addEventListener("click",g);function c(n){n.preventDefault();const s=e.value.trim(),d=o.value.trim(),a=i.value.trim(),u=/^[\w.-]+@[a-zA-Z_-]+?(?:\.[a-zA-Z]{2,})+$/.test(d);t.classList.add("inactive"),s===""||!u||a===""?(t.disabled=!0,t.classList.add("inactive")):(t.disabled=!1,t.classList.remove("inactive"))}function g(){f.reset(),t.disabled=!0,t.classList.add("inactive")}t.addEventListener("mouseenter",function(){t.disabled&&(t.style.borderColor="red")}),t.addEventListener("mouseleave",function(){t.disabled&&(t.style.borderColor="")}),c(new Event("input"));const S=document.querySelector("#subForm"),l=document.querySelector("#subscribleButton"),p=document.querySelector("#subEmail");S.addEventListener("submit",b),p.addEventListener("input",b);function b(n){n.preventDefault();const s=p.value.trim(),a=/^[\w.-]+@[a-zA-Z_-]+?(?:\.[a-zA-Z]{2,})+$/.test(s);l.classList.add("inactive"),a?(l.disabled=!1,l.classList.remove("inactive")):(l.disabled=!0,l.classList.add("inactive"))}b(new Event("input"))});
//# sourceMappingURL=commonHelpers.js.map
