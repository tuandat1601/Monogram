const burger = document.querySelector(".header__burger");
const navJoin = document.querySelector(".nav-join");
const model = document.querySelector(".model");

burger.addEventListener("click", () => {
	navJoin.classList.toggle("active");
	model.classList.toggle("active");
})

