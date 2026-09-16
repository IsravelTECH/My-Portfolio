/* ==========================================================================
   ISRAVEL - PORTFOLIO INTERACTIVITY & SCRIPT ARCHITECTURE
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {

  /* ==========================================================================
     1. MOBILE NAVIGATION DRAWER
     ========================================================================== */
  const navToggleBtn = document.getElementById('navToggleBtn');
  const navMenu = document.getElementById('myNavMenu');
  const navLinks = document.querySelectorAll('.nav-link');

  if (navToggleBtn && navMenu) {
    navToggleBtn.addEventListener('click', () => {
      navMenu.classList.toggle('active');
      const icon = navToggleBtn.querySelector('i');
      if (icon) {
        if (navMenu.classList.contains('active')) {
          icon.classList.remove('uil-bars');
          icon.classList.add('uil-multiply');
        } else {
          icon.classList.remove('uil-multiply');
          icon.classList.add('uil-bars');
        }
      }
    });

    // Auto-close menu when clicking any nav link on mobile
    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        if (navMenu.classList.contains('active')) {
          navMenu.classList.remove('active');
          const icon = navToggleBtn.querySelector('i');
          if (icon) {
            icon.classList.remove('uil-multiply');
            icon.classList.add('uil-bars');
          }
        }
      });
    });
  }

  /* ==========================================================================
     2. HEADER SCROLL ELEVATION
     ========================================================================== */
  const header = document.getElementById('header');

  const handleHeaderScroll = () => {
    if (!header) return;
    if (window.scrollY > 40) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  };

  window.addEventListener('scroll', handleHeaderScroll, { passive: true });
  handleHeaderScroll();

  /* ==========================================================================
     3. DARK MODE TOGGLE & STORAGE
     ========================================================================== */
  const darkModeToggle = document.getElementById('darkModeToggle');

  // Check stored preference or system preference
  const isDarkModeSaved = localStorage.getItem('theme') === 'dark';
  const systemPrefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;

  if (isDarkModeSaved || (!localStorage.getItem('theme') && systemPrefersDark)) {
    document.body.classList.add('dark-mode');
  } else {
    document.body.classList.remove('dark-mode');
  }

  if (darkModeToggle) {
    darkModeToggle.addEventListener('click', () => {
      document.body.classList.toggle('dark-mode');
      const isDark = document.body.classList.contains('dark-mode');
      localStorage.setItem('theme', isDark ? 'dark' : 'light');
    });
  }

  /* ==========================================================================
     4. TYPED.JS TEXT ROTATION
     ========================================================================== */
  const typedTarget = document.querySelector('.typedText');
  if (typedTarget && typeof Typed !== 'undefined') {
    new Typed('.typedText', {
      strings: ['Full Stack Developer', 'Flutter & Mobile Dev', 'UI/UX Designer'],
      loop: true,
      typeSpeed: 90,
      backSpeed: 50,
      backDelay: 2000,
      showCursor: true,
      cursorChar: '|'
    });
  }

  /* ==========================================================================
     5. SCROLLREVEAL ANIMATIONS (OPTIMIZED & SUBTLE)
     ========================================================================== */
  if (typeof ScrollReveal !== 'undefined') {
    const sr = ScrollReveal({
      origin: 'bottom',
      distance: '25px',
      duration: 700,
      delay: 100,
      easing: 'cubic-bezier(0.16, 1, 0.3, 1)',
      reset: false
    });

    // Reveal hero elements
    sr.reveal('.status-badge', { delay: 100 });
    sr.reveal('.hero-title', { delay: 150 });
    sr.reveal('.hero-typed', { delay: 200 });
    sr.reveal('.hero-description', { delay: 250 });
    sr.reveal('.hero-actions', { delay: 300 });
    sr.reveal('.hero-socials', { delay: 350 });
    sr.reveal('.hero-avatar-frame', { delay: 200, origin: 'right' });

    // Section headers
    sr.reveal('.section-header', { delay: 100 });

    // Cards with staggered reveal
    sr.reveal('.about-card', { delay: 150 });
    sr.reveal('.skill-category-card', { interval: 100 });
    sr.reveal('.project-card', { interval: 120 });
    sr.reveal('.timeline-item', { interval: 120 });
    sr.reveal('.cert-card', { interval: 80 });
    sr.reveal('.contact-info-card', { interval: 100 });
    sr.reveal('.contact-form-card', { delay: 200 });
  }

  /* ==========================================================================
     6. ACTIVE NAVIGATION LINK ON SCROLL
     ========================================================================== */
  const sections = document.querySelectorAll('section[id]');

  const highlightNavOnScroll = () => {
    const scrollY = window.pageYOffset || document.documentElement.scrollTop;

    sections.forEach(current => {
      const sectionHeight = current.offsetHeight;
      const sectionTop = current.offsetTop - 120;
      const sectionId = current.getAttribute('id');
      const targetLink = document.querySelector(`.nav-menu a[href*="${sectionId}"]`);

      if (targetLink) {
        if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
          targetLink.classList.add('active-link');
        } else {
          targetLink.classList.remove('active-link');
        }
      }
    });
  };

  window.addEventListener('scroll', highlightNavOnScroll, { passive: true });
  highlightNavOnScroll();

  /* ==========================================================================
     7. CERTIFICATE LIGHTBOX MODAL
     ========================================================================== */
  const certCards = document.querySelectorAll('.cert-card');
  const certLightbox = document.getElementById('certLightbox');
  const lightboxImg = document.getElementById('lightboxImg');
  const lightboxTitle = document.getElementById('lightboxTitle');
  const lightboxCounter = document.getElementById('lightboxCounter');
  const lightboxCloseBtn = document.getElementById('lightboxCloseBtn');
  const lightboxPrevBtn = document.getElementById('lightboxPrevBtn');
  const lightboxNextBtn = document.getElementById('lightboxNextBtn');

  const certificatesData = [
    {
      src: 'images/Fullstack.jpg',
      title: 'Full Stack Web Development Certification',
      issuer: 'Comprehensive Web Development'
    },
    {
      src: 'images/Python.png',
      title: 'Python Programming Certification',
      issuer: 'Core Python & Algorithms'
    },
    {
      src: 'images/Internship.jpg',
      title: 'Full Stack Development Internship',
      issuer: 'Hands-on Industry Project Experience'
    },
    {
      src: 'images/Hackaton.jpg',
      title: 'Hackathon Innovation Achievement',
      issuer: 'Collaborative Problem Solving'
    },
    {
      src: 'images/Project.jpg',
      title: 'Project Presentation & Development',
      issuer: 'Capstone & Architecture Showcase'
    },
    {
      src: 'images/Course.jpg',
      title: 'Advanced Web & Software Course',
      issuer: 'Software Engineering Best Practices'
    },
    {
      src: 'images/SEO.png',
      title: 'Search Engine Optimization (SEO)',
      issuer: 'Web Visibility & Digital Optimization'
    }
  ];

  let currentCertIndex = 0;

  const updateLightbox = (index) => {
    if (!certificatesData[index]) return;
    currentCertIndex = index;
    const cert = certificatesData[index];
    if (lightboxImg) lightboxImg.src = cert.src;
    if (lightboxTitle) lightboxTitle.textContent = cert.title;
    if (lightboxCounter) lightboxCounter.textContent = `${index + 1} / ${certificatesData.length}`;
  };

  const openLightbox = (index) => {
    updateLightbox(index);
    if (certLightbox) {
      certLightbox.classList.add('active');
      document.body.style.overflow = 'hidden'; // Prevent background scrolling
    }
  };

  const closeLightbox = () => {
    if (certLightbox) {
      certLightbox.classList.remove('active');
      document.body.style.overflow = '';
    }
  };

  certCards.forEach((card, index) => {
    card.addEventListener('click', () => openLightbox(index));
  });

  if (lightboxCloseBtn) {
    lightboxCloseBtn.addEventListener('click', closeLightbox);
  }

  if (lightboxPrevBtn) {
    lightboxPrevBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      currentCertIndex = (currentCertIndex - 1 + certificatesData.length) % certificatesData.length;
      updateLightbox(currentCertIndex);
    });
  }

  if (lightboxNextBtn) {
    lightboxNextBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      currentCertIndex = (currentCertIndex + 1) % certificatesData.length;
      updateLightbox(currentCertIndex);
    });
  }

  // Click outside to close
  if (certLightbox) {
    certLightbox.addEventListener('click', (e) => {
      if (e.target === certLightbox) {
        closeLightbox();
      }
    });
  }

  // Keyboard accessibility (Esc to close, Arrow keys for navigation)
  document.addEventListener('keydown', (e) => {
    if (!certLightbox || !certLightbox.classList.contains('active')) return;
    if (e.key === 'Escape') {
      closeLightbox();
    } else if (e.key === 'ArrowLeft') {
      currentCertIndex = (currentCertIndex - 1 + certificatesData.length) % certificatesData.length;
      updateLightbox(currentCertIndex);
    } else if (e.key === 'ArrowRight') {
      currentCertIndex = (currentCertIndex + 1) % certificatesData.length;
      updateLightbox(currentCertIndex);
    }
  });

  /* ==========================================================================
     8. CONTACT FORM & EMAILJS INTEGRATION
     ========================================================================== */
  const contactForm = document.getElementById('contact-form');

  // Initialize EmailJS
  if (typeof emailjs !== 'undefined') {
    emailjs.init('Xme14b3NE9dsk36kv');
  }

  // Modern Toast Notification Helper
  const showToast = (message, type = 'success') => {
    const existingToast = document.querySelector('.notification');
    if (existingToast) existingToast.remove();

    const toast = document.createElement('div');
    toast.className = `notification ${type}`;
    const icon = type === 'success' ? 'uil-check-circle' : 'uil-exclamation-triangle';
    toast.innerHTML = `<i class="uil ${icon}"></i> <span>${message}</span>`;

    document.body.appendChild(toast);

    requestAnimationFrame(() => {
      toast.classList.add('show');
    });

    setTimeout(() => {
      toast.classList.remove('show');
      setTimeout(() => toast.remove(), 400);
    }, 3500);
  };

  if (contactForm) {
    contactForm.addEventListener('submit', function (e) {
      e.preventDefault();

      const submitBtn = contactForm.querySelector('button[type="submit"]');
      const originalBtnText = submitBtn ? submitBtn.innerHTML : 'Send Message';

      if (submitBtn) {
        submitBtn.disabled = true;
        submitBtn.innerHTML = '<i class="uil uil-spinner-alt"></i> Sending...';
      }

      if (typeof emailjs !== 'undefined') {
        emailjs.sendForm('service_8tktt3e', 'template_73a0akg', this)
          .then(() => {
            showToast('Message sent successfully! I will reply soon.', 'success');
            contactForm.reset();
          })
          .catch((error) => {
            console.error('EmailJS error:', error);
            showToast('Failed to send message. Please reach out directly via email.', 'error');
          })
          .finally(() => {
            if (submitBtn) {
              submitBtn.disabled = false;
              submitBtn.innerHTML = originalBtnText;
            }
          });
      } else {
        showToast('Message service initialized. Check direct email option.', 'success');
        if (submitBtn) {
          submitBtn.disabled = false;
          submitBtn.innerHTML = originalBtnText;
        }
      }
    });
  }

});