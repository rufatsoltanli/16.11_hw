const button = document.querySelector(".cartButton")
const sidebar = document.querySelector(".sidebar")
const closebutton = document.querySelector(".xButton")
const respnavbutton = document.querySelector(".respnavbutton")
const respnavX = document.querySelector(".fa-x")
const respnavBar = document.querySelector(".fa-bars")
const respnav = document.querySelector(".respnav")

console.log(respnavbutton);
console.log(respnavBar);
console.log(respnavX);
button.addEventListener("click", function () {
    sidebar.classList.toggle("sidebarVisible")
})
closebutton.addEventListener("click", function () {
    sidebar.classList.toggle("sidebarVisible")
})

respnavbutton.addEventListener("click", function () {
    respnavBar.classList.toggle("barsUnVisible")
    respnavX.classList.toggle("xVisible")
    respnav.classList.toggle("respnavVisible")
})