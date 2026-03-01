// Navbar shadow
window.addEventListener("scroll", function(){
  document.querySelector("nav")
  .classList.toggle("scrolled", window.scrollY > 50);
});

// Mobile Menu
const hamburger = document.getElementById("hamburger");
const mobileMenu = document.getElementById("mobileMenu");
const closeBtn = document.getElementById("closeBtn");

if(hamburger){
  hamburger.addEventListener("click", ()=> mobileMenu.classList.add("active"));
}
if(closeBtn){
  closeBtn.addEventListener("click", ()=> mobileMenu.classList.remove("active"));
}