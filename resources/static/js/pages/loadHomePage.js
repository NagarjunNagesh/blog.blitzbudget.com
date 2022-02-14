// Load Home page
function loadHomePage() {
    // This is needed if the user scrolls down during page load and you want to make sure the page is scrolled to the top once it's fully loaded.Cross-browser supported.
    window.scrollTo(0, 0);
    document.getElementsByClassName('HelpResult')[0].classList.remove('d-none');
    document.getElementsByClassName('Hero')[0].classList.remove('d-none');
    document.getElementsByClassName('CategoryResult')[0].classList.add('d-none');
}