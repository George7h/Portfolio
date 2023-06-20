const menutoggle = document.querySelector('#menutoggle');
const nav = document.querySelector('nav');
const navicons = document.querySelectorAll('.navicons');
const hamburger = document.querySelector('#hamburger');

menutoggle.addEventListener("click", () => {
    nav.classList.toggle('show');
    navicons.forEach(icon => {
        icon.classList.toggle('hidden');
    });
});

window.addEventListener("resize", () => {
    if(document.body.clientWidth > 720){
        nav.classList.remove('show');
        navicons.forEach(icon => {
            icon.classList.add('hidden')
        });
        hamburger.classList.remove('hidden')
    }
});