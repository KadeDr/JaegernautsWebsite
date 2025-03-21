const documentHeader = document.createElement('template');

documentHeader.innerHTML = `
<div class="Header">
    <div class="Title">
        <h1>5103</h1>
        <h3>Documentation</h3>
    </div>
    <div class="Right">
        <div class="Search">

        </div>
        <button class="Build">Build</button>
        <button class="Marketing">Marketing</button>
        <button class="Design">Design</button>
        <button class="Programming">Programming</button>
    </div>
</div>

<div class="Sidebar">
    <div class="NavigationPanel">
        <button onclick="Redirect('/Documentation/Programming/Overview.html')" class="Page">Overview</button>
        <button onclick="Redirect('/Documentation/Programming/Setup.html')" class="Setup">Setup</button>
        <button>Lesson 2</button>
        <button>Lesson 3</button>
        <button class="SubPage">Lesson 3a</button>
        <button class="SubPage">Lesson 3b</button>
        <button>Lesson 4</button>
        <button>Lesson 5</button>
    </div>
    <button onclick="Redirect('/index.html')" class="ReturnHome">Return to Home</button>
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