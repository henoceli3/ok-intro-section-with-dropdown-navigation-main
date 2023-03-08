function addClasse(){
    const body =document.getElementById('body');
    if(window.innerWidth<'376'){
        body.classList.add('mobile');
    }else{
        body.classList.remove('mobile');
    }
}
window.addEventListener('resize',addClasse);

window.addEventListener('DOMContentLoaded', event => {
    const ChangeNav = document.getElementById('header');
    function header() {
        if (window.scrollY === 0) {
            //ChangeNav.style.borderBottom = 'solid 1px transparent';
        } else {
            //ChangeNav.style.background = 'linear-gradient(90deg, hsla(201, 100%, 36%, 1) 0%, hsla(189, 75%, 75%, 1) 100%, hsla(216, 56%, 16%, 1) 100%)';
            //ChangeNav.style.borderBottom = 'solid 1px teal';
        }
    }
// changer la couleur de la navbar quand on scroll
document.addEventListener('scroll', header);
});

function openMenu(){
    document.getElementById('mobile-navigation-menu').style.transform='translateX(0%)'; 
}
function closeMenu(){
    document.getElementById('mobile-navigation-menu').style.transform='translateX(100%)';
}