const seoClose = document.getElementById("seo__close");
const headseo = document.querySelector(".header__container--seo");

seoClose.addEventListener("click", ()=>{
	headseo.style.display = "none";
})
var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
var currentScrollPos = window.pageYOffset;
  if (prevScrollpos <=80) {
    document.getElementById("cookie-accept").style.bottom = "-100%";
  } else {
    document.getElementById("cookie-accept").style.bottom = "0";
  }
  prevScrollpos = currentScrollPos;
}

