document.querySelector('.menu').addEventListener('click', function(e) {
    if (e.target.tagName === 'A' && (e.target.getAttribute('href') === '#about-me' || e.target.getAttribute('href') === '#skills')) {
        e.preventDefault();
        setTimeout(function() {
            const targetSection = e.target.getAttribute('href') === '#about-me' ? document.querySelector('#about-me') : document.querySelector('#skills');
            targetSection.scrollIntoView({ behavior: 'smooth' });
        }, 2000);
    }
});

document.addEventListener('DOMContentLoaded', function() {
    const contactLink = document.querySelector('#menu a[href="#contact"]')
    contactLink.addEventListener('click', function(e) {
        e.preventDefault()
        const targetSection = document.querySelector('#contact')
        targetSection.scrollIntoView({ behavior: 'smooth' })
    })
})