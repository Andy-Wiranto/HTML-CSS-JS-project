const navbarNav = document.querySelector('.Navbar-nav');
document.querySelector('#Menu').onclick =()=>{
    navbarNav.classList.toggle('active');
} ;


const HamMenu = document.querySelector('#Menu');
document.addEventListener('click',function(e)
{
    if(!HamMenu.contains(e.target) && !navbarNav.contains(e.target)){
        navbarNav.classList.remove('active');
    }
});