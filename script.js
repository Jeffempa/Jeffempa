document.querySelector('.menu').addEventListener('click', function(e) {
    if (e.target.tagName === 'A' && (e.target.getAttribute('href') === '#about-me' || e.target.getAttribute('href') === '#skills')) {
        e.preventDefault();
        setTimeout(function() {
            const targetSection = e.target.getAttribute('href') === '#about-me' ? document.querySelector('#about-me') : document.querySelector('#skills');
            targetSection.scrollIntoView({ behavior: 'smooth' });
        }, 2000);
    }
});