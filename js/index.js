const sideBar = document.querySelector(".side-bar");
const headerMenuo = document.querySelector("ul");

sideBar.addEventListener("click", () => {
    sideBar.classList.toggle("active");
    headerMenuo.classList.toggle("active");
})









// document.querySelector(".side-bar").onclick = function() {
//     document.querySelector("show").classList.toggle("open");
// }