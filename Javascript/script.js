window.addEventListener('DOMContentLoaded', (event) => {
    const currentPage = window.location.pathname;

    // Check if the current page is invalid
    const validPages = ['/', '/index.html', '/404.html'];
    
    if (!validPages.includes(currentPage)) {
        // Redirect to 404 if invalid
        window.location.href = '404.html';
    } else {
        document.getElementById('content').innerHTML = `<h2>Content for the current page</h2>`;
    }
});
