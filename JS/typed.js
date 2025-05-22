document.addEventListener('DOMContentLoaded', function () {
    var typed2 = new Typed(".auto-type1", {
        strings: ["Who am I?"],
        typeSpeed: 150,
        backSpeed: 150,
        loop: true
    });
});

document.addEventListener('DOMContentLoaded', function () {
    var typed3 = new Typed(".auto-type2", {
        strings: ["Education"],
        typeSpeed: 150,
        backSpeed: 150,
        loop: true
    });
});

document.addEventListener('DOMContentLoaded', function () {
    var typed4 = new Typed(".auto-type3", {
        strings: ["Interests and Hobbies"],
        typeSpeed: 150,
        backSpeed: 150,
        loop: true
    });
});

document.addEventListener('DOMContentLoaded', function () {
    var typed5 = new Typed(".auto-type4", {
        strings: ["Places I've Lived"],
        typeSpeed: 150,
        backSpeed: 150,
        loop: true
    });
});

document.addEventListener('DOMContentLoaded', function () {
    var typed6 = new Typed(".auto-type5", {
        strings: ["Projects and Extracurriculars"],
        typeSpeed: 150,
        backSpeed: 150,
        loop: true
    });
});

document.addEventListener('DOMContentLoaded', function () {
    var typed7 = new Typed(".auto-type6", {
        strings: ["Coursework"],
        typeSpeed: 150,
        backSpeed: 150,
        loop: true
    });
});

// Scroll-Spy for Section Index
window.addEventListener('DOMContentLoaded', function () {
    const sections = [
        'about',
        'education',
        'coursework',
        'work-experience',
        'projects',
        'interests',
        'gallery'
    ];
    const navLinks = document.querySelectorAll('.section-index a');

    function onScroll() {
        let current = '';
        const scrollY = window.scrollY + window.innerHeight / 3;
        for (const id of sections) {
            const section = document.getElementById(id);
            if (section && section.offsetTop <= scrollY) {
                current = id;
            }
        }
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    }
    window.addEventListener('scroll', onScroll);
    onScroll(); // Initial call
});

// Scroll-Spy for Section Progress Bar
window.addEventListener('DOMContentLoaded', function () {
    const sections = [
        'about',
        'education',
        'coursework',
        'work-experience',
        'projects',
        'interests',
        'gallery'
    ];
    const progressDots = document.querySelectorAll('.progress-dot');

    function onScrollBar() {
        let current = '';
        const scrollY = window.scrollY + window.innerHeight / 3;
        for (const id of sections) {
            const section = document.getElementById(id);
            if (section && section.offsetTop <= scrollY) {
                current = id;
            }
        }
        progressDots.forEach(dot => {
            dot.classList.remove('active');
            if (dot.dataset.section === current) {
                dot.classList.add('active');
            }
        });
    }
    window.addEventListener('scroll', onScrollBar);
    onScrollBar(); // Initial call
});