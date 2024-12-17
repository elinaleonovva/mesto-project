(()=>{"use strict";function e(e){c(e.target)}function t(){document.querySelector(".popup_is-opened").addEventListener("click",e)}function n(){document.querySelector(".popup_is-opened").removeEventListener("click",e)}function r(e){"Escape"===e.key&&c(document.querySelector(".popup_is-opened"))}function o(o){o.classList.add("popup_is-opened");var c=o.querySelector(".popup__content");document.addEventListener("keydown",r),o.addEventListener("click",e),c.addEventListener("mouseleave",t),c.addEventListener("mouseenter",n)}function c(o){o.classList.remove("popup_is-opened");var c=o.querySelector(".popup__content");o.removeEventListener("click",e),c.removeEventListener("mouseleave",t),c.removeEventListener("mouseenter",n),document.removeEventListener("keydown",r)}var u=document.querySelector("#card-template").content;function a(e,t){var n=u.querySelector(".places__item").cloneNode(!0);n.setAttribute("id",e._id),n.querySelector(".card__title").textContent=e.name;var r=n.querySelector(".card__image"),o=n.querySelector(".card__delete-button"),c=n.querySelector(".card__like-button"),a=n.querySelector(".card__like-amount");return e.owner._id!==t&&o.remove(),r.setAttribute("src",e.link),r.setAttribute("alt",e.name),e.likes.some((function(e){return e._id===t}))&&c.classList.add("card__like-button_is-active"),a.textContent=e.likes.length,n}function i(e,t,n){!function(e){return e.some((function(e){return!e.validity.valid}))}(e)?t.classList.remove(n):t.classList.add(n)}var s={baseUrl:"https://nomoreparties.co/v1/frontend-st-cohort-201",headers:{authorization:"efc9d981-0a63-4371-b828-7cefdd2b97fc","Content-Type":"application/json"}};function l(e,t,n){var r={method:t,headers:s.headers};return"GET"!==t&&(r.body=JSON.stringify(n)),fetch("".concat(s.baseUrl,"/").concat(e),r).then((function(e){return e.ok?e.json():Promise.reject("Ошибка: ".concat(e.status))}))}function p(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=Array(t);n<t;n++)r[n]=e[n];return r}var d,_,f=document.querySelector(".profile__title"),v=document.querySelector(".profile__description"),m=document.querySelector(".profile__image"),y=document.querySelector(".profile__edit-button"),S=document.querySelector(".popup_type_edit"),b=S.querySelector(".popup__form"),q=S.querySelector(".popup__input_type_name"),L=S.querySelector(".popup__input_type_description"),E=S.querySelector(".popup__close"),g=S.querySelector(".popup__button"),k=document.querySelector(".popup_type_avatar"),C=k.querySelector(".popup__form"),h=k.querySelector(".popup__input_type_avatar"),A=k.querySelector(".popup__button"),x=k.querySelector(".popup__close"),T=document.querySelector(".popup_type_image"),I=T.querySelector(".popup__image"),j=T.querySelector(".popup__caption"),w=T.querySelector(".popup__close"),P=document.querySelector(".places__list"),D=document.querySelector(".profile__add-button"),O=document.querySelector(".popup_type_new-card"),U=O.querySelector(".popup__form"),G=O.querySelector(".popup__input_type_card-name"),H=O.querySelector(".popup__input_type_url"),M=O.querySelector(".popup__close"),N=O.querySelector(".popup__button");function z(e,t,n,r){n.textContent="Сохранение...",e.then(r).catch((function(e){return console.log("Ошибка: ".concat(e))})).finally((function(){c(t),n.textContent="Сохранить"}))}Promise.all([l("users/me","GET",{}),l("cards","GET",{})]).then((function(e){var t,n,r=(n=2,function(e){if(Array.isArray(e))return e}(t=e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,o,c,u,a=[],i=!0,s=!1;try{if(c=(n=n.call(e)).next,0===t){if(Object(n)!==n)return;i=!1}else for(;!(i=(r=c.call(n)).done)&&(a.push(r.value),a.length!==t);i=!0);}catch(e){s=!0,o=e}finally{try{if(!i&&null!=n.return&&(u=n.return(),Object(u)!==u))return}finally{if(s)throw o}}return a}}(t,n)||function(e,t){if(e){if("string"==typeof e)return p(e,t);var n={}.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?p(e,t):void 0}}(t,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),o=r[0],c=r[1];f.textContent=o.name,v.textContent=o.about,m.style.backgroundImage="url(".concat(o.avatar,")"),d=o._id,c.forEach((function(e){return P.append(a(e,d))}))})).catch((function(e){return console.log("Ошибка: ".concat(e))})),S.classList.add("popup_is-animated"),O.classList.add("popup_is-animated"),T.classList.add("popup_is-animated"),_={formClass:".popup__form",inputClass:".popup__input",inputErrorClass:"popup__input_error",buttonClass:".popup__button",buttonInactiveClass:"popup__button_inactive",errorClass:"popup__error-text_active"},Array.from(document.querySelectorAll(_.formClass)).forEach((function(e){!function(e,t){var n=Array.from(e.querySelectorAll(t.inputClass)),r=e.querySelector(t.buttonClass);i(n,r,t.buttonInactiveClass),n.forEach((function(o){o.addEventListener("input",(function(){!function(e,t,n,r){t.validity.valid?function(e,t,n,r){var o=e.querySelector(".".concat(t.id,"-error"));o.textContent="",t.classList.remove(n),o.classList.remove(r)}(e,t,n,r):function(e,t,n,r,o){var c=e.querySelector(".".concat(t.id,"-error"));c.textContent=n,t.classList.add(r),c.classList.add(o)}(e,t,t.validationMessage,n,r)}(e,o,t.inputErrorClass,t.errorClass),i(n,r,t.buttonInactiveClass)}))})),e.addEventListener("submit",(function(){r.classList.add(t.buttonInactiveClass)}))}(e,_)})),y.addEventListener("click",(function(){q.value=f.textContent,L.value=v.textContent,o(S)})),b.addEventListener("submit",(function(e){e.preventDefault(),z(l("users/me","PATCH",{name:q.value,about:L.value}),S,g,(function(e){f.textContent=e.name,v.textContent=e.about}))})),E.addEventListener("click",(function(){return c(S)})),m.addEventListener("click",(function(){h.value=m.style.backgroundImage.slice(5,-2),o(k)})),C.addEventListener("submit",(function(e){e.preventDefault(),z(l("users/me/avatar","PATCH",{avatar:h.value}),k,A,(function(e){m.style.backgroundImage="url(".concat(e.avatar,")")}))})),x.addEventListener("click",(function(){return c(k)})),D.addEventListener("click",(function(){G.value="",H.value="",o(O)})),U.addEventListener("submit",(function(e){e.preventDefault(),z(l("cards","POST",{name:G.value,link:H.value}),O,N,(function(e){return P.prepend(a(e,d))}))})),M.addEventListener("click",(function(){return c(O)})),w.addEventListener("click",(function(){return c(T)})),P.addEventListener("click",(function(e){if(e.target.classList.contains("card__image"))I.setAttribute("src",""),I.setAttribute("src",e.target.src),j.textContent=e.target.alt,o(T);else if(e.target.classList.contains("card__like-button")){e.target.classList.toggle("card__like-button_is-active");var t=e.target.closest(".places__item"),n=t.querySelector(".card__like-amount");(e.target.classList.contains("card__like-button_is-active")?(c=t.id,l("cards/likes/".concat(c),"PUT",{})):function(e){return l("cards/likes/".concat(e),"DELETE",{})}(t.id)).then((function(e){return n.textContent=e.likes.length})).catch((function(e){return console.log("Ошибка: ".concat(e))}))}else if(e.target.classList.contains("card__delete-button")){var r=e.target.closest(".places__item");(function(e){return l("cards/".concat(e),"DELETE",{})})(r.getAttribute("id")).then((function(){r.remove()})).catch((function(e){return console.log("Ошибка: ".concat(e))}))}var c}))})();