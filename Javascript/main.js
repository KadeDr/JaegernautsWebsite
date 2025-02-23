function NewTab(link) {
    window.open(link)
}

function Redirect(link) {
    window.location.href = link
}

var dropped = false;
let timeout;

function HoverDropdown(drop, elementID) {
    if (drop) {
        clearTimeout(timeout);
        document.getElementById(elementID).setAttribute("style",
            "display: flex; margin: 0x; margin-left: 10px; z-index: -99999; padding: 15px; padding-bottom: 2px; width: auto; background-color: #F0502A; border-radius: 3px; border-top-right-radius: 0px; border-top-left-radius: 0px;"
        )
    }
    else if (!drop) {
        timeout = setTimeout(() => {
            document.getElementById(elementID).setAttribute("style",
                "display: none;"
            ) 
        }, 50);
    }
}

function ToggleDropdown() {
    var dropdown = document.getElementById("InnerDropdown");

    dropped = !dropped;
    if (dropped) {
        dropdown.classList.add("dropdownActive")
    }
    else if (!dropped) {
        dropdown.classList.remove("dropdownActive")
    }
}

window.addEventListener('scroll', () => {
    document.body.classList.add("Scrolling");

    clearTimeout(window.scrollTimeout)
    window.scrollTimeout = setTimeout(() => {
        document.body.classList.remove("Scrolling")
    }, 200);
});

window.addEventListener('scroll', function () {
    let scrolled = window.scrollY;
    document.querySelector('.TopImage').style.transform = `translateY(${scrolled * 0.5}px)`;
});