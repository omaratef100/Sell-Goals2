const mobileMenuButton = document.querySelector('.mobile-menu-button');
const mainMenu = document.getElementById('mainMenu');

function toggleMenu() {
  if (mainMenu.style.display === 'none' || mainMenu.style.display === '') {
    mainMenu.style.display = 'flex'; 
  } else {
    mainMenu.style.display = 'none';
  }
}

function initializeMenu() {
  if (window.innerWidth <= 768) {
    mainMenu.style.display = 'none';
  } else {
    mainMenu.style.display = 'flex';
  }
}

window.onload = initializeMenu;
window.addEventListener('resize', initializeMenu);

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
