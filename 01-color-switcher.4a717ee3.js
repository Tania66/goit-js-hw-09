const t=document.querySelector("button[data-start]"),e=document.querySelector("button[data-stop]"),r=document.querySelector("body");t.addEventListener("click",(function(){o=setInterval((()=>{r.style.backgroundColor=d()}),1e3),(r.style.backgroundColor=d())&&t.setAttribute("disabled",!0);e.removeAttribute("disabled")})),e.addEventListener("click",(function(){t.removeAttribute("disabled",!1),e.setAttribute("disabled",!0),clearInterval(o)})),e.setAttribute("disabled",!0);let o=null;function d(){return`#${Math.floor(16777215*Math.random()).toString(16).padStart(6,0)}`}
//# sourceMappingURL=01-color-switcher.4a717ee3.js.map