const menuButton = document.getElementById('menu-button');
const menu = document.getElementById('menu');
const menuButto = document.getElementById('menu-butto');
const men = document.getElementById('men');
const firstIcon = document.querySelector('#menu-button svg:first-of-type');
const secondIcon = document.querySelector('#menu-button svg:last-of-type');
const bars = document.querySelectorAll('.bars');


window.onload = () => {
  firstIcon.style.display = 'block';
  menu.style.display = 'none';
};
menuButton.addEventListener('click', () => {

if (firstIcon.style.display === 'block') {
    firstIcon.style.display = 'none';
    secondIcon.style.display = 'block';
    menu.style.display = 'block';
  } else {
    firstIcon.style.display = 'block';
    secondIcon.style.display = 'none';
    menu.style.display = 'none';
  }
  menu.classList.toggle('hidden');
});
menuButto.addEventListener('click', () => {
  men.classList.toggle('hidden');
 
});
gsap.registerPlugin(ScrollTrigger);

let tl=gsap.timeline(({
  scrollTrigger:{
    trigger:".skills",
    start:"top bottom",
    end:"+100 ",
    markers:false,
    toggleActions:'play none none restart'
  }
})
   );
tl.fromTo("#bar1",2, {width: "0vw"}, {width: "13.5rem"});
tl.fromTo("#bar2",2, {width: "0vw"}, {width: "13.5rem"},"-=1.5");
tl.fromTo("#bar3",2, {width: "0vw"}, {width: "9rem"},"-=1.5");
tl.fromTo("#bar4",2, {width: "0vw"}, {width: "9rem"},"-=1.5");
tl.fromTo("#bar5",2, {width: "0vw"}, {width: "9rem"},"-=1.5");
tl.fromTo("#bar6",2, {width: "0vw"}, {width: "9rem"},"-=1.5");














