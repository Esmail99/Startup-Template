var navBar = document.getElementsByTagName('nav')[0];

var myScrollFunc = function(){
    var y = window.scrollY;
    if(y > 250)
    {
        navBar.style.backgroundColor = '#353E3E';
        navBar.style.position = 'fixed';
        navBar.style.opacity = .9;
        navBar.style.transition = 2000;
    }
    else
    {
        navBar.style.backgroundColor = 'transparent';
        navBar.style.position = 'absolute';
    }
}

window.addEventListener('scroll', myScrollFunc)