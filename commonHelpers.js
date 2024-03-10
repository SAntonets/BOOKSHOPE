import{g as l,r as c,a as n,s as p,m as $,b as O}from"./assets/restGallary-0989b75a.js";import{i as F,a as H}from"./assets/vendor-d8b4b001.js";document.addEventListener("DOMContentLoaded",function(){const t=document.getElementById("scrollUpButton");window.addEventListener("scroll",function(){window.scrollY>100?t.style.display="block":t.style.display="none"}),t.addEventListener("click",function(){window.scrollTo({top:0,behavior:"smooth"})})});const _={titleColor:"#FFFFFF",messageColor:"#FFFFFF",messageSize:"20px",position:"topRight",displayMode:"replace",closeOnEscape:!0,pauseOnHover:!1,maxWidth:432,messageSize:"20px",messageLineHeight:"24px"};function b(t){F.show({message:t,backgroundColor:"#EF4040",progressBarColor:"#FFE0AC",..._})}const D="https://books-backend.p.goit.global",U=1e3*30,g=H.create({baseURL:D,timeout:U});function W(t){return b(t.message),null}g.interceptors.response.use(t=>t,W);function R(){return g.get("/books/category-list").then(t=>t.data)}function j(){return g.get("/books/top-books").then(t=>t.data)}function z(t){return g.get("/books/category",{params:{category:t}}).then(e=>e.data)}function V(t){return g.get(`/books/${t}`).then(e=>e.data)}const{categoryName:q}=c;function Y({list_name:t}){return`<li class="item-category"> <button class="${l(q)===t?"active":""}" type="button" data-category="${t}">${t}</button></li>`}const{ulCategoryContainer:m}=n,{categoryName:G}=c;function C(){const t=l(G),e=document.querySelector(`button[data-category="${t}"]`);e&&m&&(m.scrollTop=e.offsetTop-m.offsetTop-m.clientHeight/2+e.clientHeight/2)}async function P(){try{const e=(await R()).map(Y).join("");n.ulCategoryContainer.insertAdjacentHTML("beforeend",e),C()}catch(t){console.error("Error rendering Category list",t)}}P();function X(t){const o=t.split(" ");let a="",s=0;for(const i of o){const r=i.length;if(s+r+1>20){a+="...";break}a+=i+" ",s+=r+1}return a.trim()}function h(t){const{_id:e,book_image:o,title:a,author:s}=t;return`
<li class="books-item" data-id=${e}>
<div class="book-wrapper">
 <img class="book-image" src="${o}" alt="${s} ${a}" width="287" height="408" loading="lazy"/>
          <p class="book-image-message-text">QUICK VIEW</p>
</div>
        <h3 class="book-title">${X(a)}</h2>
        <p class="book-author">${s}</p>
</li>     
  `}function E(t){const e=t.split(" "),o=`<span>${e.pop()}</span>`;e.push(o);const a=document.createElement("h1");return a.classList.add("title"),a.innerHTML=e.join(" "),a}function K(t){const e=l(c.booksInCart);return!e||!e.length?!1:e.some(o=>o._id===t)}const f="add",v="remove",T="is-open",L="hidden",w="add to shopping list",B="remove from the shopping list";function y(t){t.target!==t.currentTarget&&t.key!=="Escape"||(document.body.style.overflow="",n.modalWrapper.classList.remove(T),window.removeEventListener("keydown",y))}const{modalWrapper:Q,modalImg:J,modalTitle:Z,modalDescription:tt,modalText:et,modalLinks:ot,modalBtn:d,modalCongratulation:at}=n;async function nt(t){window.addEventListener("keydown",y),document.body.style.overflow="hidden";const e=await V(t);if(!e){document.body.style.overflow="";return}p(c.categoryOpenInModal,e);const{_id:o,book_image:a,description:s,author:i,title:r,buy_links:S}=e,u=K(o);ot.innerHTML=$(S),Z.textContent=r,tt.textContent=i,et.textContent=s,J.src=a,d.textContent=u?B:w,d.dataset.id=o,d.setAttribute("data-type",u?v:f),u?d.classList.add("clicked"):d.classList.remove("clicked"),Q.classList.add(T),u&&at.classList.remove(L)}function N(t){if(t.target===t.currentTarget)return;const e=t.target.dataset.id||t.target.closest("li[data-id]").dataset.id;nt(e)}function M(t){t.innerHTML='<div class="load-div"><span class="loader"></span></div>'}async function k(t){try{M(n.gallery);const e=await z(t);n.gallery.innerHTML="";const o=E(t);n.gallery.appendChild(o);const a=document.createElement("ul");a.classList.add("selected-category-list"),n.gallery.appendChild(a);const s=e.map(i=>h(i)).join("");a.innerHTML=s,a.addEventListener("click",N)}catch{b("Error rendering category. Please try again later.")}}function A(){document.querySelectorAll("button[data-category]").forEach(e=>e.classList.remove("active"))}function x(){if(window.innerWidth>=1422){window.scrollTo({top:0,behavior:"smooth"});return}n.gallery.style.minHeight=window.innerHeight+"px";const t=n.gallery.getBoundingClientRect().top+window.scrollY||window.pageYOffSet;window.scrollTo({top:t,behavior:"smooth"})}function st(t){x();const e=t.target.dataset.category,o=document.querySelector(`.item-category button[data-category="${e}"]`);A(),o.classList.add("active"),p(c.categoryName,e),k(e),C()}function rt({list_name:t,books:e}){const o=document.createElement("li");o.classList.add("category-books-item");const a=document.createElement("h2");a.classList.add("category-title"),a.textContent=t;const s=document.createElement("ul");s.classList.add("category-list"),s.innerHTML=e.map(h).join(""),s.addEventListener("click",N);const i=document.createElement("div");i.classList.add("category-div");const r=document.createElement("button");return r.classList.add("category-button"),r.setAttribute("type","button"),r.setAttribute("data-category",t),r.textContent="SEE MORE",r.addEventListener("click",st),o.append(a),o.append(s),o.append(i),i.append(r),o}async function I(){M(n.gallery);const t=await j();if(t&&t.length>0){n.gallery.innerHTML="";const e=t.map(rt),o=document.createElement("ul");o.classList.add("category-books-list"),o.append(...e),n.gallery.append(E("Best Sellers Books")),n.gallery.append(o)}else console.error("No results")}const{categoryName:it}=c;function ct(t){if(t.target.nodeName!=="BUTTON")return;A(),t.target.classList.add("active"),x();const e=t.target.getAttribute("data-category");p(it,e),e==="All categories"?I():k(e)}function lt(t){let e=l(c.booksInCart);if(e===null)e=[t];else{if(e.some(a=>a._id===t._id))return;e.push(t)}p(c.booksInCart,e)}function dt(t){const{type:e,id:o}=t.target.dataset;e===f?(lt(l(c.categoryOpenInModal)),t.target.setAttribute("data-type",v),t.target.textContent=B,n.modalCongratulation.classList.remove(L),n.modalBtn.classList.add("clicked")):(O(o),t.target.setAttribute("data-type",f),t.target.textContent=w,n.modalCongratulation.classList.add(L),n.modalBtn.classList.remove("clicked"))}const{categoryName:gt}=c,{btnAllCategories:ut}=n;function mt(){const t=l(gt);t===null||t==="All categories"?(ut.classList.add("active"),I()):k(t)}const{ulCategoryContainer:pt,modalBtn:yt,modalClose:ft,modalWrapper:Lt}=n;document.addEventListener("DOMContentLoaded",mt);pt.addEventListener("click",ct);yt.addEventListener("click",dt);ft.addEventListener("click",y);Lt.addEventListener("click",y);
//# sourceMappingURL=commonHelpers.js.map