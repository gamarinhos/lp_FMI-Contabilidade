// ===================================
// FMI Contabilidade - Main JavaScript
// ===================================

document.addEventListener('DOMContentLoaded', function() {
    // Initialize all functionality
    initHeader();
    initSmoothScroll();
    initModal();
    initAnimations();
    initScrollEffects();
});

// ===================================
// Header Functionality
// ===================================

function initHeader() {
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    const headerNav = document.querySelector('.header__nav');
    const header = document.querySelector('.header');

    // Mobile menu toggle
    if (mobileMenuBtn && headerNav) {
        mobileMenuBtn.addEventListener('click', function() {
            mobileMenuBtn.classList.toggle('header__mobile-menu--active');
            headerNav.classList.toggle('header__nav--active');
        });

        // Close mobile menu when clicking on nav links
        const navLinks = headerNav.querySelectorAll('.header__nav-link');
        navLinks.forEach(link => {
            link.addEventListener('click', function() {
                mobileMenuBtn.classList.remove('header__mobile-menu--active');
                headerNav.classList.remove('header__nav--active');
            });
        });
    }

    // Header scroll effect
    window.addEventListener('scroll', function() {
        if (window.scrollY > 100) {
            header.classList.add('header--scrolled');
        } else {
            header.classList.remove('header--scrolled');
        }
    });
}

// ===================================
// Smooth Scroll
// ===================================

function initSmoothScroll() {
    const navLinks = document.querySelectorAll('a[href^="#"]');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                const headerHeight = document.querySelector('.header').offsetHeight;
                const targetPosition = targetElement.offsetTop - headerHeight - 20;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// ===================================
// Modal Functionality
// ===================================

function initModal() {
    const modal = document.getElementById('leadModal');
    const modalOverlay = document.getElementById('modalOverlay');
    const modalClose = document.getElementById('modalClose');
    const iframeContainer = document.getElementById('iframeContainer');
    
    // CTA buttons that trigger modal
    const ctaButtons = [
        document.getElementById('headerCta'),
        document.getElementById('heroCta'),
        document.getElementById('ctaButton')
    ];

    // Open modal function
    function openModal() {
        if (modal) {
            modal.classList.add('modal--active');
            document.body.style.overflow = 'hidden';
            
            // Focus management for accessibility
            modalClose.focus();
            
            // Add event listeners for closing
            modalOverlay.addEventListener('click', closeModal);
            modalClose.addEventListener('click', closeModal);
            
            // Close on Escape key
            document.addEventListener('keydown', function(e) {
                if (e.key === 'Escape') {
                    closeModal();
                }
            });
        }
    }

    // Close modal function
    function closeModal() {
        if (modal) {
            modal.classList.remove('modal--active');
            document.body.style.overflow = '';
            
            // Remove event listeners
            modalOverlay.removeEventListener('click', closeModal);
            modalClose.removeEventListener('click', closeModal);
        }
    }

    // Add click listeners to CTA buttons
    ctaButtons.forEach(button => {
        if (button) {
            button.addEventListener('click', openModal);
        }
    });

    // Close modal on overlay click
    if (modalOverlay) {
        modalOverlay.addEventListener('click', closeModal);
    }

    // Close modal on close button click
    if (modalClose) {
        modalClose.addEventListener('click', closeModal);
    }

    // Iframe is already loaded in HTML
}

// ===================================
// Animations
// ===================================

function initAnimations() {
    // Intersection Observer for scroll animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observe elements for animation
    const animatedElements = document.querySelectorAll('.hero__content, .about__content, .services__grid, .benefits__grid, .target__profile, .cta__content');
    
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
        observer.observe(el);
    });
}

// ===================================
// Scroll Effects
// ===================================

function initScrollEffects() {
    // Parallax effect removed - element not found in HTML

    // Stagger animation for service cards
    const serviceCards = document.querySelectorAll('.services__card');
    serviceCards.forEach((card, index) => {
        card.style.animationDelay = `${0.1 * index}s`;
    });

    // Stagger animation for benefit items
    const benefitItems = document.querySelectorAll('.benefits__item');
    benefitItems.forEach((item, index) => {
        item.style.animationDelay = `${0.1 * index}s`;
    });
}
