const animationsTargets = document.querySelectorAll("[data-anime]");
const classVisible = "visible";

const animationScroll = () => {
  const windowTop = window.scrollY + (window.innerHeight * 3) / 4;
  animationsTargets.forEach((target) => {
    if (windowTop > target.offsetTop) {
      target.classList.add(classVisible);
    }
  });
};

if (animationsTargets.length) addEventListener("scroll", animationScroll);


const menus = Array.from(document.querySelector(".nav_menu").children)

menus.forEach(menu => menu.addEventListener('mouseover', () => {if(menu.children[1]) menu.children[1].classList.add(classVisible)}))
menus.forEach(menu => menu.addEventListener('mouseout', () => {if(menu.children[1]) menu.children[1].classList.remove(classVisible)}))

const submenusList = Array.from(document.querySelectorAll(".nav_submenu li"))

submenusList.forEach(submenu => submenu.addEventListener('mouseover', () => {if(submenu.children[1]) submenu.children[1].classList.add(classVisible)}))
submenusList.forEach(submenu => submenu.addEventListener('mouseout', () => {if(submenu.children[1]) submenu.children[1].classList.remove(classVisible)}))