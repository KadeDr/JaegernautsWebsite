function NewTab(link) {
    window.open(link)
}

function Redirect(link) {
    window.location.href = link
}

var dropped = false;

function HoverDropdown(drop, elementID) {
    if (drop) {
        document.getElementById(elementID).setAttribute("style",
            "display: block; margin: 0px; z-index: -99999; padding: 15px; padding-bottom: 2px; width: auto; background-color: #F0502A; border-radius: 3px; border-top-right-radius: 0px; border-top-left-radius: 0px;"
        )
    }
    else if (!drop) {
        document.getElementById(elementID).setAttribute("style",
            "display: none;"
        )
    }
}

function ToggleDropdown() {
    dropped = !dropped;
    if (dropped) {
        document.getElementById("InnerDropdown").setAttribute("style",
            "display: block; margin: 0px; padding: 0px; position: absolute; left: 0px; width: 100%; background-color: #FFFFFF"
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