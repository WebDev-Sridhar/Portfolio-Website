let menu = document.querySelector('#menu-icon');
let navlist = document.querySelector('.navlist');
let navbar = document.querySelector("#head");
let body = document.querySelector("body");



menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navlist.classList.toggle('opennav');
}
window.onscroll = () => {
    navbar.classList.add("open");
    menu.classList.remove('bx-x');
    navlist.classList.remove('opennav');
}
function setback() {
    navbar.classList.remove("open");
}
setInterval(setback, 5000);

const sr = ScrollReveal({
    distance: '100px',
    duration: 1800,
    reset: true
});

sr.reveal('.hero-text1', { delay: 100, origin: 'top' });
sr.reveal('.homesocial-icons', { delay: 100, origin: 'bottom' });

function reload() {
    document.querySelector(".path.path-1").classList.add("open1");
    document.querySelector(".path.path-2").classList.add("open2");
    document.querySelector(".path.path-3").classList.add("open3");
    document.querySelector(".path.path-4").classList.add("open4");
}
setInterval(reload, 500);
function recheck() {
    document.querySelector(".path.path-1").classList.remove("open1");
    document.querySelector(".path.path-2").classList.remove("open2");
    document.querySelector(".path.path-3").classList.remove("open3");
    document.querySelector(".path.path-4").classList.remove("open4");

}
setInterval(recheck, 5000);

function barLoad() {
    document.querySelector(".progress-bar.bar1").classList.add("load1");
    document.querySelector(".progress-bar.bar2").classList.add("load2");
    document.querySelector(".progress-bar.bar3").classList.add("load3");
    document.querySelector(".progress-bar.bar4").classList.add("load4");
    document.querySelector(".progress-bar.bar4").classList.add("load4");
    document.querySelector(".progress-bar.bar5").classList.add("load5");
}
setInterval(barLoad, 500);
function barUnload() {
    document.querySelector(".progress-bar.bar1").classList.remove("load1");
    document.querySelector(".progress-bar.bar2").classList.remove("load2");
    document.querySelector(".progress-bar.bar3").classList.remove("load3");
    document.querySelector(".progress-bar.bar4").classList.remove("load4");
    document.querySelector(".progress-bar.bar5").classList.remove("load5");
}
setInterval(barUnload, 5000);


