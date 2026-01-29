AOS.init({
    duration: 1200,
    once: true,
  });

let menu = document.querySelector(".hamburger");
let navLinks = document.querySelector(".nav_links");

menu.addEventListener("click", function(){
  if (navLinks.style.display === "flex"){
    navLinks.style.display = "none";
  } else {
    navLinks.style.display = "flex";
  }
})

let links = document.querySelectorAll(".nav_links a");
let activeLink = null;

for (let link of links) {
  link.addEventListener("click", function() {
    if (activeLink) {
      activeLink.style.color = "";
    }
    link.style.color = "white";
    activeLink = link;
  });
}