document.addEventListener('DOMContentLoaded', () => {

    const mobileBtn = document.getElementById('mobile_btn');
    const mobileMenu = document.getElementById('mobile_menu');
    const mobileLinks = mobileMenu.querySelectorAll('a');

    // Função para ABRIR e FECHAR o menu (usada pelo botão)
    const toggleMenu = () => {
        mobileMenu.classList.toggle('active');
    };

    // Função dedicada para APENAS FECHAR o menu (usada pelos links)
    const closeMenu = () => {
        mobileMenu.classList.remove('active');
    }

    // O botão principal alterna (abre/fecha)
    mobileBtn.addEventListener('click', toggleMenu);

    // Os links dentro do menu agora apenas fecham
    mobileLinks.forEach(link => {
        link.addEventListener('click', closeMenu);
    });

    document.addEventListener('click', (event) => {
        // Verifica se o menu está ativo
        if (!mobileMenu.classList.contains('active')) {
            return;
        }

        // Verifica se o clique foi dentro do menu ou no botão que o abre
        const isClickInsideMenu = mobileMenu.contains(event.target);
        const isClickOnButton = mobileBtn.contains(event.target);

        // Se o clique foi fora de ambos, fecha o menu
        if (!isClickInsideMenu && !isClickOnButton) {
            closeMenu();
        }
    });


    // HEADER COM SCROLL
    const header = document.getElementById('header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    // ACCORDION (DÚVIDAS)
    const accordions = document.querySelectorAll('.accordion');
    accordions.forEach(accordion => {
        const header = accordion.querySelector('.accordion-header');
        header.addEventListener('click', () => {
            accordions.forEach(otherAccordion => {
                if (otherAccordion !== accordion && otherAccordion.classList.contains('active')) {
                    otherAccordion.classList.remove('active');
                }
            });
            accordion.classList.toggle('active');
        });
    });

    // ANIMAÇÃO DE ELEMENTOS AO ROLAR A PÁGINA
    const animatedElements = document.querySelectorAll('.animated-element');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, {
        threshold: 0.15
    });
    animatedElements.forEach(element => observer.observe(element));

    // MARCAR LINK ATIVO NA NAVEGAÇÃO COM SCROLL
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('#nav_list .nav-item');
    
    const activateMenuAtCurrentSection = () => {
        let currentSectionId = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            if (window.scrollY >= sectionTop - 150) {
                currentSectionId = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.querySelector('a').getAttribute('href') === `#${currentSectionId}`) {
                link.classList.add('active');
            }
        });
    };
    
    window.addEventListener('scroll', activateMenuAtCurrentSection);
});