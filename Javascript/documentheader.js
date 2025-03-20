const documentHeader = document.createElement('template');

documentHeader.innerHTML = `
<div class="Header">
    <div class="Title">
        <h1>5103</h1>
        <h3>Documentation</h3>
    </div>
</div>

<div class="Sidebar">
    <div class="NavigationPanel">
        <div onclick="Redirect('/Documentation/Programming/Overview.html')">
            <h3 class="Overview">Overview</h3>
        </div>
        <div>
            <h3 onclick="Redirect('/Documentation/Programming/Setup.html')" class="Setup">Setup</h3>
        </div>
        <div>
            <h3>Lesson 2</h3>
        </div>
        <div>
            <h3>Lesson 3</h3>
        </div>
        <div>
            <h3 class="SubPage">Lesson 3a</h3>
        </div>
        <div>
            <h3 class="SubPage">Lesson 3b</h3>
        </div>
        <div>
            <h3>Lesson 4</h3>
        </div>
        <div>
            <h3>Lesson 5</h3>
        </div>
        <div>
            <h3>Lesson 6</h3>
        </div>
    </div>
</div>
`;

document.body.prepend(documentHeader.content);

window.onload = function() {
    var currentPage = window.location.pathname.split("/").pop(); // Get the current page name
    var pageLinks = document.querySelectorAll('.Sidebar h3'); // Get all sidebar links

    pageLinks.forEach(function(link) {
        if (link.innerText.toLowerCase() === currentPage.toLowerCase()) {
            link.classList.add('current-page'); // Add 'current-page' class to the matching link
        }
    });
};

document.querySelectorAll('.NavigationPanel h3').forEach(link => {
    if (window.location.pathname.includes(link.textContent.trim())) {
        link.classList.add('active');  // Add active class to current page link
    }
});