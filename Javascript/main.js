function NewTab(link) {
    window.open(link)
}

function Redirect(link) {
    window.location.href = link
}

var dropped = false;

function ToggleDropdown() {
    dropped = !dropped;
    if (dropped) {
        document.getElementById("InnerDropdown").setAttribute("style",
            "display: block; margin: 0px; padding: 0px; position: absolute; left: 0px; width: 100%; background-color: #FFFFFF"
        )
        document.getElementById("OuterDropdown").setAttribute("style",
            "display: block; margin: 0px; padding: 0px;"
        )
    }
    else if (!dropped) {
        document.getElementById("InnerDropdown").setAttribute("style",
            "display: none"
        )
    }
}

window.addEventListener('scroll', function () {
    let scrolled = window.scrollY;
    document.querySelector('.TopImage').style.transform = `translateY(${scrolled * 0.5}px)`;
});