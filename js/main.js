/* ==========================================================================
   ISRAVEL - PORTFOLIO JAVASCRIPT ARCHITECTURE
   Clean, Modular, Fast, Accessible & Framework-Free
   Automatic Day/Night Theme + Local Timezone Detection
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {

  /* ==========================================================================
     1. AUTOMATIC DAY / NIGHT THEME & PREFERENCE SYSTEM
     ========================================================================== */
  const themeToggle = document.getElementById('themeToggle');
  
  // Get system/stored preference ('auto', 'light', 'dark')
  let themePref = localStorage.getItem('themePreference') || 'auto';

  const applyTheme = () => {
    let activeTheme = 'light';

    if (themePref === 'auto') {
      const currentHour = new Date().getHours();
      // 06:00 - 17:59: Day mode | 18:00 - 05:59: Night mode
      activeTheme = (currentHour >= 6 && currentHour < 18) ? 'light' : 'dark';
    } else {
      activeTheme = themePref;
    }

    if (activeTheme === 'dark') {
      document.documentElement.setAttribute('data-theme', 'dark');
      if (themeToggle) themeToggle.setAttribute('aria-label', 'Switch to day theme');
    } else {
      document.documentElement.removeAttribute('data-theme');
      if (themeToggle) themeToggle.setAttribute('aria-label', 'Switch to night theme');
    }
  };

  applyTheme();

  if (themeToggle) {
    themeToggle.addEventListener('click', () => {
      const isCurrentlyDark = document.documentElement.getAttribute('data-theme') === 'dark';
      themePref = isCurrentlyDark ? 'light' : 'dark';
      localStorage.setItem('themePreference', themePref);
      applyTheme();
    });
  }

  /* ==========================================================================
     2. SCROLL PROGRESS BAR
     ========================================================================== */
  const progressBar = document.getElementById('scrollProgress');

  const updateScrollProgress = () => {
    if (!progressBar) return;
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const progress = scrollHeight > 0 ? (scrollTop / scrollHeight) * 100 : 0;
    progressBar.style.width = `${progress}%`;
  };

  window.addEventListener('scroll', updateScrollProgress, { passive: true });
  updateScrollProgress();

  /* ==========================================================================
     3. HEADER ELEVATION & BACK TO TOP BUTTON
     ========================================================================== */
  const header = document.getElementById('header');
  const backToTopBtn = document.getElementById('backToTop');

  const handleScrollBehavior = () => {
    const scrollY = window.pageYOffset || document.documentElement.scrollTop;

    // Header elevation
    if (header) {
      if (scrollY > 40) {
        header.classList.add('scrolled');
      } else {
        header.classList.remove('scrolled');
      }
    }

    // Back to top visibility
    if (backToTopBtn) {
      if (scrollY > 450) {
        backToTopBtn.classList.add('visible');
      } else {
        backToTopBtn.classList.remove('visible');
      }
    }
  };

  window.addEventListener('scroll', handleScrollBehavior, { passive: true });
  handleScrollBehavior();

  if (backToTopBtn) {
    backToTopBtn.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  /* ==========================================================================
     4. MOBILE NAVIGATION DRAWER
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
          navToggleBtn.setAttribute('aria-expanded', 'true');
        } else {
          icon.classList.remove('uil-multiply');
          icon.classList.add('uil-bars');
          navToggleBtn.setAttribute('aria-expanded', 'false');
        }
      }
    });

    // Auto close drawer on navigation click
    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        if (navMenu.classList.contains('active')) {
          navMenu.classList.remove('active');
          const icon = navToggleBtn.querySelector('i');
          if (icon) {
            icon.classList.remove('uil-multiply');
            icon.classList.add('uil-bars');
            navToggleBtn.setAttribute('aria-expanded', 'false');
          }
        }
      });
    });
  }

  /* ==========================================================================
     5. TYPED.JS TEXT ANIMATION
     ========================================================================== */
  const typedTarget = document.querySelector('.typedText');
  if (typedTarget && typeof Typed !== 'undefined') {
    new Typed('.typedText', {
      strings: [
        'Software Developer',
        'Full-Stack Web & API Architect',
        'Frontend & Backend Engineering',
        'Cross-Platform App Developer'
      ],
      loop: true,
      typeSpeed: 70,
      backSpeed: 40,
      backDelay: 2200,
      showCursor: true,
      cursorChar: '|'
    });
  }

  /* ==========================================================================
     6. SCROLLREVEAL ANIMATIONS (SMOOTH & SUBTLE)
     ========================================================================== */
  if (typeof ScrollReveal !== 'undefined') {
    const sr = ScrollReveal({
      origin: 'bottom',
      distance: '24px',
      duration: 700,
      delay: 80,
      easing: 'cubic-bezier(0.16, 1, 0.3, 1)',
      reset: false
    });

    sr.reveal('.hero-tag-label', { delay: 80 });
    sr.reveal('.hero-title', { delay: 120 });
    sr.reveal('.hero-subtitle', { delay: 160 });
    sr.reveal('.hero-location-pill', { delay: 200 });
    sr.reveal('.hero-description', { delay: 240 });
    sr.reveal('.hero-actions', { delay: 280 });
    sr.reveal('.hero-socials-row', { delay: 320 });
    sr.reveal('.hero-portrait-stage', { delay: 180, origin: 'right' });
    sr.reveal('.dev-workflow-bar', { delay: 280, origin: 'bottom' });
    sr.reveal('.code-window-card', { delay: 340, origin: 'bottom' });

    sr.reveal('.section-header', { delay: 80 });
    sr.reveal('.stat-item', { interval: 80 });

    sr.reveal('.about-card', { delay: 120 });
    sr.reveal('.developer-profile-card', { delay: 200 });

    sr.reveal('.skill-card', { interval: 70 });
    sr.reveal('.service-card', { interval: 80 });
    sr.reveal('.project-card', { interval: 80 });
    sr.reveal('.timeline-item', { interval: 100 });
    sr.reveal('.education-card', { interval: 90 });
    sr.reveal('.cert-card', { interval: 70 });
    sr.reveal('.achievement-card', { interval: 90 });
    sr.reveal('.ai-card', { interval: 70 });

    sr.reveal('.contact-info-card', { interval: 80 });
    sr.reveal('.contact-form-card', { delay: 150 });
  }

  /* ==========================================================================
     7. PROJECT FILTERING LOGIC
     ========================================================================== */
  const filterBtns = document.querySelectorAll('.filter-btn');
  const projectCards = document.querySelectorAll('.project-card');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filterValue = btn.getAttribute('data-filter');

      projectCards.forEach(card => {
        const cardCategory = card.getAttribute('data-category');
        if (filterValue === 'all' || cardCategory === filterValue) {
          card.style.display = 'flex';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });

  /* ==========================================================================
     8. DYNAMIC EXPERIENCE DURATION CALCULATION
     ========================================================================== */
  const updateExperienceDuration = () => {
    const durationElem = document.getElementById('technoSchoolDuration');
    if (!durationElem) return;

    // Start date: June 15, 2026
    const startDate = new Date(2026, 5, 15); // Month is 0-indexed: 5 = June
    const currentDate = new Date();

    let totalMonths = (currentDate.getFullYear() - startDate.getFullYear()) * 12 + (currentDate.getMonth() - startDate.getMonth());
    
    // Check if the current day has reached or passed the start day
    if (currentDate.getDate() < startDate.getDate() && totalMonths > 0) {
      totalMonths--;
    }

    // Ensure minimum 1 month if currently ongoing
    if (totalMonths < 1) {
      totalMonths = 1;
    }

    const monthLabel = totalMonths === 1 ? '1 mo' : `${totalMonths} mos`;
    durationElem.textContent = `Jun 2026 – Present · ${monthLabel}`;
  };

  updateExperienceDuration();

  /* ==========================================================================
     9. CERTIFICATION LIGHTBOX MODAL (ALL 7 CERTIFICATES)
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
      title: 'Full Stack Web Development',
      category: 'Professional Certification'
    },
    {
      src: 'images/Python.png',
      title: 'Python Programming',
      category: 'Core Python & Algorithms'
    },
    {
      src: 'images/Internship.jpg',
      title: 'Development Internship',
      category: 'Industry Practical Training'
    },
    {
      src: 'images/Hackaton.jpg',
      title: 'Hackathon Innovation',
      category: 'Competitive Problem Solving'
    },
    {
      src: 'images/Project.jpg',
      title: 'Project Presentation',
      category: 'Capstone Showcase'
    },
    {
      src: 'images/Course.jpg',
      title: 'Software Engineering Course',
      category: 'Advanced Concepts'
    },
    {
      src: 'images/SEO.png',
      title: 'SEO & Web Visibility',
      category: 'Digital Optimization'
    }
  ];

  let currentCertIndex = 0;

  const updateLightbox = (index) => {
    if (!certificatesData[index]) return;
    currentCertIndex = index;
    const cert = certificatesData[index];
    if (lightboxImg) {
      lightboxImg.src = cert.src;
      lightboxImg.alt = `${cert.title} preview`;
    }
    if (lightboxTitle) lightboxTitle.textContent = cert.title;
    if (lightboxCounter) lightboxCounter.textContent = `${index + 1} / ${certificatesData.length}`;
  };

  const openLightbox = (index) => {
    updateLightbox(index);
    if (certLightbox) {
      certLightbox.classList.add('active');
      document.body.style.overflow = 'hidden';
    }
  };

  const closeLightbox = () => {
    if (certLightbox) {
      certLightbox.classList.remove('active');
      document.body.style.overflow = '';
    }
  };

  certCards.forEach((card, index) => {
    card.addEventListener('click', () => {
      const idxAttr = card.getAttribute('data-index');
      const idx = idxAttr !== null ? parseInt(idxAttr, 10) : index;
      openLightbox(idx);
    });
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

  if (certLightbox) {
    certLightbox.addEventListener('click', (e) => {
      if (e.target === certLightbox) closeLightbox();
    });
  }

  // Keyboard navigation for Lightbox
  document.addEventListener('keydown', (e) => {
    if (!certLightbox || !certLightbox.classList.contains('active')) return;
    if (e.key === 'Escape') closeLightbox();
    if (e.key === 'ArrowLeft') {
      currentCertIndex = (currentCertIndex - 1 + certificatesData.length) % certificatesData.length;
      updateLightbox(currentCertIndex);
    }
    if (e.key === 'ArrowRight') {
      currentCertIndex = (currentCertIndex + 1) % certificatesData.length;
      updateLightbox(currentCertIndex);
    }
  });

  /* ==========================================================================
     9. ACTIVE NAVIGATION HIGHLIGHT ON SCROLL
     ========================================================================== */
  const sections = document.querySelectorAll('section[id]');

  const highlightActiveSection = () => {
    const scrollY = window.pageYOffset || document.documentElement.scrollTop;

    sections.forEach(current => {
      const sectionHeight = current.offsetHeight;
      const sectionTop = current.offsetTop - 130;
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

  window.addEventListener('scroll', highlightActiveSection, { passive: true });
  highlightActiveSection();

  /* ==========================================================================
     10. CONTACT FORM & PROFESSIONAL SUCCESS TOAST
     ========================================================================== */
  const contactForm = document.getElementById('contact-form');

  if (typeof emailjs !== 'undefined') {
    emailjs.init('Xme14b3NE9dsk36kv');
  }

  const showToast = ({ type = 'success', title, message, duration = 4000 } = {}) => {
    // Remove any existing active toast
    const existingToast = document.querySelector('.contact-success-toast');
    if (existingToast) existingToast.remove();

    const toast = document.createElement('div');
    toast.className = `contact-success-toast${type === 'error' ? ' contact-toast-error' : ''}`;
    toast.setAttribute('role', 'status');
    toast.setAttribute('aria-live', 'polite');

    const iconClass = type === 'success' ? 'uil-check-circle' : 'uil-exclamation-circle';
    const defaultTitle = type === 'success' ? 'Message sent successfully' : 'Message could not be sent';
    const defaultMessage = type === 'success'
      ? "Thanks for reaching out. I'll get back to you soon."
      : 'Please check your details and try again.';

    toast.innerHTML = `
      <div class="contact-success-icon">
        <i class="uil ${iconClass}"></i>
      </div>
      <div class="contact-success-content">
        <strong class="contact-toast-title">${title || defaultTitle}</strong>
        <span class="contact-toast-desc">${message || defaultMessage}</span>
      </div>
      <button class="contact-success-close" type="button" aria-label="Close notification">
        <i class="uil uil-multiply"></i>
      </button>
      <div class="contact-toast-progress"></div>
    `;

    document.body.appendChild(toast);

    // Trigger smooth entrance
    requestAnimationFrame(() => {
      toast.classList.add('show');
    });

    let dismissTimer = null;

    const dismissToast = () => {
      if (dismissTimer) clearTimeout(dismissTimer);
      toast.classList.remove('show');
      toast.classList.add('hide');
      setTimeout(() => {
        if (toast.parentNode) toast.remove();
      }, 320);
    };

    const closeBtn = toast.querySelector('.contact-success-close');
    if (closeBtn) {
      closeBtn.addEventListener('click', dismissToast);
    }

    // Auto dismiss after specified duration
    dismissTimer = setTimeout(dismissToast, duration);
  };

  if (contactForm) {
    contactForm.addEventListener('submit', function (e) {
      e.preventDefault();

      const submitBtn = contactForm.querySelector('button[type="submit"]');
      const originalHtml = submitBtn ? submitBtn.innerHTML : 'Send Message';

      if (submitBtn) {
        submitBtn.disabled = true;
        submitBtn.innerHTML = '<i class="uil uil-spinner-alt"></i> Sending...';
      }

      if (typeof emailjs !== 'undefined') {
        emailjs.sendForm('service_8tktt3e', 'template_73a0akg', this)
          .then(() => {
            showToast({
              type: 'success',
              title: 'Message sent successfully',
              message: "Thanks for reaching out. I'll get back to you soon."
            });
            contactForm.reset();
          })
          .catch((err) => {
            console.error('EmailJS Error:', err);
            showToast({
              type: 'error',
              title: 'Message could not be sent',
              message: 'Please check your details or email me directly at israveltech@gmail.com.'
            });
          })
          .finally(() => {
            if (submitBtn) {
              submitBtn.disabled = false;
              submitBtn.innerHTML = originalHtml;
            }
          });
      } else {
        showToast({
          type: 'success',
          title: 'Message sent successfully',
          message: "Thanks for reaching out. I'll get back to you soon."
        });
        contactForm.reset();
        if (submitBtn) {
          submitBtn.disabled = false;
          submitBtn.innerHTML = originalHtml;
        }
      }
    });
  }

});