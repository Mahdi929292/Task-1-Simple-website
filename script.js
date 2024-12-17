const hamburger=document.getElementById("hamburger");
hamburger.addEventListener("click",  ()=> {
    const navMenu = document.getElementById("nav-menu");
    if (navMenu.style.display === "block") {
        navMenu.style.display = "none";
    } else {
        navMenu.style.display = "block";
    }
});
window.addEventListener("resize", ()=> {
    const navMenu = document.getElementById("nav-menu");
    if (window.innerWidth > 768) {
        navMenu.style.display = "flex"; 
    } else {
        navMenu.style.display = "none"; 
    }
});