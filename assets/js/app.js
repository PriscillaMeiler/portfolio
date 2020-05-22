
var pageHeader = document.getElementById('page-header');

window.addEventListener("scroll", function(event) {
    
    let top = this.scrollY;
    if (top > 300) { pageHeader.classList.add('sticky'); } 
    else { pageHeader.classList.remove('sticky'); }

    var scrolled = window.pageYOffset;
    const background = document.querySelector('.gradient-background');
    background.style.top = ((scrolled * 0.12) - 150) + 'px';
});