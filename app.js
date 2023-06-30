const btnDropMenu = document.querySelector("#btnDropDown")
const navMenu = document.querySelector("#navMenu")
const btnColaps = document.querySelector("#btnColaps")


btnDropMenu.addEventListener("click", dropMenu)
btnColaps.addEventListener("click", colapsMenu)


function dropMenu() {
  navMenu.classList.remove("closeMenu")
  navMenu.classList.toggle("openMenu")
}


function colapsMenu() {
  navMenu.classList.toggle("closeMenu")
  navMenu.classList.remove("openMenu")
}