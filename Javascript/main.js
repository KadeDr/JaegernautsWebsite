function Redirect(link) {
    window.open(link)
}

window.addEventListener('scroll', function () {
    let scrolled = window.scrollY;
    document.querySelector('.TopImage').style.transform = `translateY(${scrolled * 0.5}px)`;
});