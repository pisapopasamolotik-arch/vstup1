// Функція для перемикання між сторінками
function showPage(pageId) {
    // 1. Знаходимо всі секції з класом .page
    const pages = document.querySelectorAll('.page');
    
    // 2. Приховуємо їх
    pages.forEach(page => {
        page.classList.remove('active');
    });
    
    // 3. Знаходимо потрібну сторінку за ID
    const activePage = document.getElementById(pageId);
    
    // 4. Показуємо її
    if (activePage) {
        activePage.classList.add('active');
    }
    
    // 5. Прокрутка догори
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
    
    // Блокуємо стандартний перехід по посиланню
    return false;
}

// Ініціалізація при старті
document.addEventListener('DOMContentLoaded', () => {
    // За замовчуванням відкриваємо Home
    showPage('home');
});

// Додаємо легкий ефект паралаксу для карток (Cyberpunk style)
document.addEventListener('mousemove', (e) => {
    const cards = document.querySelectorAll('.card');
    const x = (e.clientX / window.innerWidth - 0.5) * 2;
    const y = (e.clientY / window.innerHeight - 0.5) * 2;
    
    cards.forEach(card => {
        card.style.transform = `translate(${x * 5}px, ${y * 5}px)`;
    });
});