const toggleButton = document.getElementById('mobile-toggle-button');
const navToggle = document.getElementById('mobile-navbar');

toggleButton.addEventListener('click', () => {
    navToggle.classList.toggle('active'); 
    toggleButton.classList.toggle('active');
    const visibility = toggleButton.getAttribute('aria-expanded');
    if (visibility === 'false') {
        toggleButton.setAttribute("aria-expanded", true)
    } else {
        toggleButton.setAttribute("aria-expanded", false)
    }
});

console.log(navToggle);