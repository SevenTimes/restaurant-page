(()=>{"use strict";function e(e,t){const n=document.createElement("button");return n.setAttribute("id",e),n.classList.add("tab"),n.textContent=t,n}(function(){const t=document.getElementById("content"),n=function(t){const n=document.createElement("nav");n.setAttribute("id","nav");const c=e("home","Home"),o=e("menu","Menu"),d=e("contact","Contact");return n.appendChild(c),n.appendChild(o),n.appendChild(d),n}();t.appendChild(n);const c=function(e){const t=document.createElement("main");return t.setAttribute("id","main"),t}();t.appendChild(c)})(),function(){const e=document.getElementById("main"),t=function(e){const t=document.createElement("h1");return t.innerText=e,t}("Contact Us");e.appendChild(t);const n=function(){const e=document.createElement("h3");e.innerText="Our Phones";const t=document.createElement("ul");return["555-3535","555-0000","555-1234"].forEach((e=>{const n=document.createElement("li");n.innerText=e,t.appendChild(n)})),e.appendChild(t),e}();e.appendChild(n);const c=function(){const e=document.createElement("h3");e.innerText="Our address";const t=document.createElement("p");return t.innerText="Somewhere, Planet Earth, Solar System, Milky Way",e.appendChild(t),e}();e.appendChild(c)}()})();