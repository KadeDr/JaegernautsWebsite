// Function to check the scrollbar position and adjust thumb style
function updateScrollbar() {
    const thumb = document.querySelector('::-webkit-scrollbar-thumb');
    const scrollbar = document.querySelector('::-webkit-scrollbar');
    const scrollPosition = document.documentElement.scrollTop || document.body.scrollTop;
    const maxScroll = document.documentElement.scrollHeight - window.innerHeight;

    // When scrollbar is at the top or bottom, remove rounded corners
    if (scrollPosition === 0 || scrollPosition === maxScroll) {
        thumb.style.borderRadius = '0px'; // Square the corners at the top/bottom
    } else {
        thumb.style.borderRadius = '10px'; // Keep rounded corners when scrolling in between
    }
}

// Add the scroll event listener
window.addEventListener('scroll', updateScrollbar);

function Redirect(link) {
    window.location.href = link
}

function showContent(language) {
    fetch(`/${language}.html`)
        .then(response => response.text())
        .then(data => {
            document.getElementById('contentDisplay').innerHTML = data;
        })
        .catch(error => {
            document.getElementById('contentDisplay').innerHTML = "Error loading content.";
        });
}