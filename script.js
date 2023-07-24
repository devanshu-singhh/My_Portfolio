//toggle icon bar
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
} 

//scroll section

window.onscroll=()=>{
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
}