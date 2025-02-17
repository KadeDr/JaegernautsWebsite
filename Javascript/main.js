function ChangeLink(link) {
    window.location.replace(link)
}

window.addEventListener('scroll', function () {
    let scrolled = window.scrollY;
    document.querySelector('.TopImageImage').style.transform = `translateY(${scrolled * 0.5}px)`;
});