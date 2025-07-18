document.addEventListener('DOMContentLoaded', () => {

    // --- MENU MOBILE ---
    const mobileBtn = document.getElementById('mobile_btn');
    const mobileMenu = document.getElementById('mobile_menu');
    const mobileLinks = mobileMenu.querySelectorAll('a');

    const toggleMenu = () => {
        mobileMenu.classList.toggle('active');
    };

    mobileBtn.addEventListener('click', toggleMenu);
    mobileLinks.forEach(link => {
        link.addEventListener('click', toggleMenu); // Fecha o menu ao clicar em um link
    });

    // --- HEADER COM SCROLL ---
    const header = document.getElementById('header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    // --- ACCORDION (DÚVIDAS) ---
    const accordions = document.querySelectorAll('.accordion');
    accordions.forEach(accordion => {
        const header = accordion.querySelector('.accordion-header');
        header.addEventListener('click', () => {
            // Fecha outros accordions abertos
            accordions.forEach(otherAccordion => {
                if (otherAccordion !== accordion && otherAccordion.classList.contains('active')) {
                    otherAccordion.classList.remove('active');
                }
            });
            // Abre ou fecha o accordion clicado
            accordion.classList.toggle('active');
        });
    });

    // --- ANIMAÇÃO DE ELEMENTOS AO ROLAR A PÁGINA ---
    const animatedElements = document.querySelectorAll('.animated-element');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, {
        threshold: 0.15 // O elemento anima quando 15% dele estiver visível
    });
    animatedElements.forEach(element => observer.observe(element));


    // --- MARCAR LINK ATIVO NA NAVEGAÇÃO COM SCROLL ---
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('#nav_list .nav-item');
    
    const activateMenuAtCurrentSection = () => {
        let currentSectionId = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            if (window.scrollY >= sectionTop - 150) { // 150 é um offset
                currentSectionId = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            // O link 'a' está dentro do 'li' que é o .nav-item
            if (link.querySelector('a').getAttribute('href') === `#${currentSectionId}`) {
                link.classList.add('active');
            }
        });
    };
    
    window.addEventListener('scroll', activateMenuAtCurrentSection);
});