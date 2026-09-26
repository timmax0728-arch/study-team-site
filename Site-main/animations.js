// ==================== ПАРАЛЛАКС ====================
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const header = document.querySelector('header');
    const block1 = document.querySelector('#block1');
    
    if (header) {
        header.style.backgroundPositionY = `${scrolled * 0.5}px`;
    }
    if (block1) {
        block1.style.backgroundPositionY = `${scrolled * 0.2}px`;
    }
});

// ==================== ВСЕ АНИМАЦИИ ПОСЛЕ ЗАГРУЗКИ DOM ====================
document.addEventListener('DOMContentLoaded', () => {
    
    // ---------- 1. Hero текст (выезд слева) ----------
    const heroText = document.querySelector('#wrapper-text-block');
    if (heroText) {
        const heroObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    heroText.classList.add('visible');
                    heroObserver.unobserve(heroText);
                }
            });
        }, { threshold: 0.3 });
        heroObserver.observe(heroText);
    }

    // ---------- 2. Кофейные брызги (выезд при появлении блока карточек) ----------
    const coffeeBlock = document.querySelector('#block1-coffee');
    const leftBlast = document.querySelector('.coffee-blast-left');
    const rightBlast = document.querySelector('.coffee-blast-right');
    
    if (coffeeBlock && leftBlast && rightBlast) {
        const blastObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    leftBlast.classList.add('visible');
                    rightBlast.classList.add('visible');
                    blastObserver.unobserve(entry.target);
                }
            });
        }, { threshold: 0.5 });   // когда 50% блока #block1-coffee видно
        blastObserver.observe(coffeeBlock);
    }

    // ---------- 3. Добавление классов анимации тексту ----------
    const textElements = [
        { selector: '#text1-bestcoffee', class: 'animate-title' },
        { selector: '#text2-bestcoffee', class: 'animate-text' },
        { selector: '#block1-coffee-text1', class: 'animate-title' },
        { selector: '#block1-coffee-text2', class: 'animate-text' },
        { selector: '#block1-advantages #block1-coffee-text1', class: 'animate-title' },
        { selector: '#block1-advantages #block1-coffee-text2', class: 'animate-text' },
        { selector: '#block1-advantages-text3', class: 'animate-text' },
        { selector: '#block1-advantages-text4', class: 'animate-title' },
        { selector: '#text1_block2', class: 'animate-title' },
        { selector: '#text2_block2', class: 'animate-text' },
        { selector: '#title-block3', class: 'animate-title' },
    ];
    
    textElements.forEach(item => {
        const el = document.querySelector(item.selector);
        if (el && !el.classList.contains('animate-on-scroll') && 
            !el.classList.contains('animate-title') && 
            !el.classList.contains('animate-text')) {
            el.classList.add(item.class);
        }
    });
    
    // Карточки преимуществ (stagger)
    const advantageCards = document.querySelectorAll('.blocks-row-block1-advantages');
    advantageCards.forEach((card, index) => {
        card.classList.add('card-stagger');
        if (index === 0) card.classList.add('stagger-delay-1');
        if (index === 1) card.classList.add('stagger-delay-2');
        if (index === 2) card.classList.add('stagger-delay-3');
        if (index === 3) card.classList.add('stagger-delay-4');
    });
    
    // Статические карточки кофе (не те, что внутри #cards)
    const coffeeCards = document.querySelectorAll('.blocks-row-block1-coffee');
    coffeeCards.forEach((card, index) => {
        if (!card.closest('#cards')) {
            card.classList.add('card-stagger');
            card.style.transitionDelay = `${index * 0.05}s`;
        }
    });
    
    // ---------- 4. Общий Intersection Observer для появления ----------
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    });
    
    const animatedElements = document.querySelectorAll('.animate-on-scroll, .animate-title, .animate-text, .card-stagger');
    animatedElements.forEach(el => observer.observe(el));
    
});


const subscribeBlock = document.querySelector('#email-block');
if (subscribeBlock) {
    const subObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                subscribeBlock.classList.add('visible');
                subObserver.unobserve(subscribeBlock);
            }
        });
    }, { threshold: 0.2 });
    subObserver.observe(subscribeBlock);
}

const block2 = document.querySelector('#block2');
if (block2) {
    const block2Observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                block2.classList.add('visible');
                block2Observer.unobserve(block2);
            }
        });
    }, { threshold: 0.3 });
    block2Observer.observe(block2);
}