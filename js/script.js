const btnMobile = document.getElementById('btn-mobile');
const menuItems = document.getElementById('menu__items');
const menu = document.getElementById('menu');
const btnShare = document.getElementById('btn-share');

function toogleMenu(event) {
    if (event.type === 'touchStart') event.preventDefault();
    menu.classList.toggle('active');
    const active = menu.classList.contains('active');
    event.currentTarget.setAttribute('aria-expanded', active)
    if (active) {
        event.currentTarget.setAttribute('aria-label', 'Fechar menu')
    } else {
        event.currentTarget.setAttribute('aria-label', 'Abrir menu')
    }
}

function toogleItemMenu(event) {
    if (event.type === 'touchStart') event.preventDefault();
    menu.classList.toggle('active');
}

async function share() {
    try {
        await navigator.share({
            title: 'Loopstudio',
            text: 'Discovering new and immersive experiences',
            url: 'http://projects.shinodalabs.com.br/loopstudios'
        })
    } catch (error) {
        navigator.clipboard.writeText('http://projects.shinodalabs.com.br/loopstudios').then(() => {
            alert('Link copied to clipboard')
        })
    }
}

btnMobile.addEventListener('click', toogleMenu);
btnMobile.addEventListener('touchStart', toogleMenu);
menuItems.addEventListener('click', toogleItemMenu);
menuItems.addEventListener('touchStart', toogleItemMenu);
btnShare.addEventListener('click', share);