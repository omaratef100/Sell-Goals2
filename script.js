function toggleMenu() {
    const menu = document.getElementById('mainMenu');
    constbutton = document.querySelector('.mobile-menu-button');
    menu.classList.toggle('active');
    button.innerHTML = menu.classList.contains('active') ? '✕' : '☰';
}

function handleResize() {
    const menu = document.getElementById('mainMenu');
    menu.style.display = window.innerWidth > 768 ? 'flex' : 'none';
}

document.addEventListener('DOMContentLoaded', () => {
    handleResize();
    window.addEventListener('resize', handleResize);
    document.querySelector('.mobile-menu-button')?.addEventListener('click', toggleMenu);
});

const navigate = (page) => window.location.href = `${page}.html`;
const goToSignup = () => navigate('signup');
const goToLogin = () => navigate('login');

window.addEventListener('scroll', () => {
    const header = document.getElementById('mainHeader');
    if (window.scrollY > 50) {
        header.classList.add('header-scrolled');
    } else {
        header.classList.remove('header-scrolled');
    }
});
