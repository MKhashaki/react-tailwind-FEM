var e=Object.defineProperty,t=(t,l,r)=>(((t,l,r)=>{l in t?e(t,l,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[l]=r})(t,"symbol"!=typeof l?l+"":l,r),r);import{r as l,R as r,a as n}from"./vendor.6745abfa.js";!function(){const e=document.createElement("link").relList;if(!(e&&e.supports&&e.supports("modulepreload"))){for(const e of document.querySelectorAll('link[rel="modulepreload"]'))t(e);new MutationObserver((e=>{for(const l of e)if("childList"===l.type)for(const e of l.addedNodes)"LINK"===e.tagName&&"modulepreload"===e.rel&&t(e)})).observe(document,{childList:!0,subtree:!0})}function t(e){if(e.ep)return;e.ep=!0;const t=function(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),"use-credentials"===e.crossorigin?t.credentials="include":"anonymous"===e.crossorigin?t.credentials="omit":t.credentials="same-origin",t}(e);fetch(e.href,t)}}();class a extends l.exports.Component{constructor(){super(...arguments),t(this,"state",{})}render(){return r.createElement("div",{className:"bg-[#b9cafd] sm:h-screen z-0"},r.createElement("img",{src:"./images/pattern-background-mobile.svg",alt:"",className:"w-full invisible sm:visible md:invisible fixed"}),r.createElement("img",{className:"w-full z-0 invisible md:visible fixed ",src:"./images/pattern-background-desktop.svg"}),r.createElement("div",{className:"z-20 absolute sm:h-screen w-full  flex flex-col justify-center items-center"},r.createElement("div",{className:"w-full sm:w-1/2 xl:w-1/3 flex-col rounded-lg"},r.createElement("img",{className:"w-full sm:rounded-t-xl",src:"./images/illustration-hero.svg",alt:"woman_dancing"}),this.content())))}content(){return r.createElement("div",{className:"text-center bg-white rounded-b-xl pb-8"},r.createElement("h1",{className:"text-3xl py-7"},"Order Summary"),r.createElement("p",{className:"text-md px-20 text-gray-600"},"You can now listen to millions of songs, audiobooks, and podcasts on any device anywhere you like"),r.createElement("div",{className:"mt-4 px-4 sm:px-12 "},r.createElement("div",{className:"mt-4 px-2 py-6 bg-[#F8F9FE] rounded-lg\n\t\t\t\t\t\t\tflex"},r.createElement("img",{src:"./images/icon-music.svg",alt:"icon-music",className:"flex"}),r.createElement("div",{className:"ml-4 font-semibold text-gray-700 flex-auto "},r.createElement("div",{className:"flex flex-col"},r.createElement("p",{className:"flex"},"Annual Plan"),r.createElement("p",{className:"flex text-gray-400"},"$59.99/year"))),r.createElement("div",{className:"flex flex-row "},r.createElement("a",{href:"#",className:"flex justify-center items-center text-indigo-800 font-semibold underline hover:no-underline hover:text-indigo-400 mr-4"},"Change")))),r.createElement("div",{className:"mt-12 drop-shadow-2xl mx-12 py-3  bg-[#382AE1] rounded-lg hover:bg-[#766CF1]"},r.createElement("a",{href:"#",className:"inline-block text-white font-semibold "},"Proceed to Payment")),r.createElement("a",{className:"mt-8 text-gray-400 font-semibold hover:text-gray-800 block",href:"#"},"Cancel Order"))}}n.render(r.createElement(r.StrictMode,null,r.createElement(a,null)),document.getElementById("root"));
