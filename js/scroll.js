// scroll

window.onscroll = function() {
    var nav = document.getElementById('nav');
    if ( window.pageYOffset > 10 ) {
        nav.classList.add("nav-shadow");
    } else {
        nav.classList.remove("nav-shadow");
    }
}




// window.onload = function(){
//   changeClass = document.getElementById(navbar);
//   document.addEventListener('scroll', scrollY, false);
// }
