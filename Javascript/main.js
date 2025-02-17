function ChangeLink(link) {
    window.location.replace(link)
}

window.addEventListener('scroll', function () {
    let scrolled = window.scrollY;
    document.querySelector('.TopImage').style.transform = `translateY(${scrolled * 0.5}px)`;
});