document.addEventListener("DOMContentLoaded", function() {
    const hamburger = document.getElementById("hamburger");
    const menu = document.querySelector(".ctamenu");

    hamburger.addEventListener("click", function() {
        console.log("CLICK FUNZIONA");
        menu.classList.toggle("active");
    });
});