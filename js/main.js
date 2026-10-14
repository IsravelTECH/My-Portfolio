/* ==========================================================================
   ISRAVEL - PORTFOLIO JAVASCRIPT ARCHITECTURE
   Clean, Modular, Fast, Accessible & Framework-Free
   Automatic Day/Night Theme + Local Timezone Detection
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {

  /* ==========================================================================
     1. DAY / NIGHT THEME & PREFERENCE SYSTEM (DEFAULT: WHITE DAY THEME)
     ========================================================================== */
  const themeToggle = document.getElementById('themeToggle');
  
  // Default to 'light' (Day Theme) on initial visit. Changes to dark ONLY on user click.
  let themePref = localStorage.getItem('themePreference') || 'light';

  const applyTheme = () => {
    if (themePref === 'dark') {
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
    const toggleNav = () => {
      navMenu.classList.toggle('active');
      const isExpanded = navMenu.classList.contains('active');
      navToggleBtn.setAttribute('aria-expanded', isExpanded ? 'true' : 'false');
      const icon = navToggleBtn.querySelector('i');
      if (icon) {
        if (isExpanded) {
          icon.classList.remove('uil-bars');
          icon.classList.add('uil-multiply');
        } else {
          icon.classList.remove('uil-multiply');
          icon.classList.add('uil-bars');
        }
      }
    };

    navToggleBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      toggleNav();
    });

    // Auto close drawer on navigation click
    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        if (navMenu.classList.contains('active')) {
          toggleNav();
        }
      });
    });

    // Close drawer when clicking outside
    document.addEventListener('click', (e) => {
      if (navMenu.classList.contains('active') && !navMenu.contains(e.target) && !navToggleBtn.contains(e.target)) {
        toggleNav();
      }
    });
  }

  /* ==========================================================================
     5. TYPED.JS TEXT ANIMATION (2026 DEVELOPER ROLES)
     ========================================================================== */
  const typedTarget = document.querySelector('.typedText');
  if (typedTarget && typeof Typed !== 'undefined') {
    new Typed('.typedText', {
      strings: [
        'Software Developer',
        'Full Stack Developer',
        'React Developer',
        'React Native Developer',
        'Flutter Developer',
        'Python Developer',
        'Mobile App Developer',
        'Backend Engineer'
      ],
      loop: true,
      typeSpeed: 70,
      backSpeed: 40,
      backDelay: 2000,
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

    sr.reveal('.availability-badge', { delay: 80 });
    sr.reveal('.hero-name-title', { delay: 120 });
    sr.reveal('.hero-role-wrapper', { delay: 150 });
    sr.reveal('.hero-bio-summary', { delay: 180 });
    sr.reveal('.hero-tech-block', { delay: 210 });
    sr.reveal('.hero-cta-group', { delay: 240 });
    sr.reveal('.glass-terminal', { delay: 270 });
    sr.reveal('.hero-profile-stage', { delay: 180, origin: 'right' });
    sr.reveal('.hero-workflow-timeline', { delay: 300, origin: 'bottom' });
    sr.reveal('.hero-scroll-indicator', { delay: 340, origin: 'bottom' });

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
    sr.reveal('.contact-guarantee-badge', { delay: 180 });
    sr.reveal('.contact-form-card', { delay: 150 });
  }

  /* ==========================================================================
     7. PROJECT FILTERING LOGIC (SMOOTH ANIMATION & COUNT SYNC)
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
        const shouldShow = filterValue === 'all' || cardCategory === filterValue;

        if (shouldShow) {
          card.style.display = 'flex';
          if (typeof gsap !== 'undefined') {
            gsap.fromTo(card, 
              { opacity: 0, y: 15, scale: 0.98 },
              { opacity: 1, y: 0, scale: 1, duration: 0.35, ease: 'power2.out' }
            );
          } else {
            card.style.opacity = '1';
            card.style.transform = 'none';
          }
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
    durationElem.textContent = `Aug 2026 – Present · ${monthLabel}`;
  };

  updateExperienceDuration();

  /* ==========================================================================
     9. CERTIFICATION LIGHTBOX MODAL & MOBILE CAROUSEL SYNC
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

  // Mobile Certificate Carousel Scroll Synchronization
  const certsTrack = document.getElementById('certificatesTrack');
  const certDotsContainer = document.getElementById('certMobileDots');
  const certScrollPrev = document.getElementById('certScrollPrev');
  const certScrollNext = document.getElementById('certScrollNext');

  if (certsTrack && certDotsContainer) {
    // Generate Pagination Dots
    certDotsContainer.innerHTML = '';
    certificatesData.forEach((_, i) => {
      const dot = document.createElement('span');
      dot.className = `cert-dot ${i === 0 ? 'active' : ''}`;
      dot.setAttribute('data-index', i);
      dot.addEventListener('click', () => {
        const card = certCards[i];
        if (card) {
          card.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
        }
      });
      certDotsContainer.appendChild(dot);
    });

    const updateActiveDot = () => {
      const scrollLeft = certsTrack.scrollLeft;
      const cardWidth = certCards[0] ? certCards[0].offsetWidth + 14 : 300;
      const activeIdx = Math.min(
        certificatesData.length - 1,
        Math.max(0, Math.round(scrollLeft / cardWidth))
      );

      const dots = certDotsContainer.querySelectorAll('.cert-dot');
      dots.forEach((dot, idx) => {
        if (idx === activeIdx) {
          dot.classList.add('active');
        } else {
          dot.classList.remove('active');
        }
      });
    };

    certsTrack.addEventListener('scroll', updateActiveDot, { passive: true });

    if (certScrollPrev) {
      certScrollPrev.addEventListener('click', () => {
        const cardWidth = certCards[0] ? certCards[0].offsetWidth + 14 : 300;
        certsTrack.scrollBy({ left: -cardWidth, behavior: 'smooth' });
      });
    }

    if (certScrollNext) {
      certScrollNext.addEventListener('click', () => {
        const cardWidth = certCards[0] ? certCards[0].offsetWidth + 14 : 300;
        certsTrack.scrollBy({ left: cardWidth, behavior: 'smooth' });
      });
    }
  }

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
     10. PREMIUM ENQUIRY FORM CONTROLLER (FLOATING LABELS, VALIDATION, EMAILJS & TOAST)
     ========================================================================== */
  const contactForm = document.getElementById('contact-form');
  const floatingInputs = document.querySelectorAll('.floating-input');
  const messageTextarea = document.getElementById('message');
  const charCounter = document.getElementById('message-char-counter');

  // Floating label active/has-value sync
  const updateFloatingState = (input) => {
    if (!input) return;
    if (input.value && input.value.trim() !== '') {
      input.classList.add('has-value');
    } else {
      input.classList.remove('has-value');
    }
  };

  floatingInputs.forEach(input => {
    updateFloatingState(input);
    input.addEventListener('input', () => updateFloatingState(input));
    input.addEventListener('change', () => updateFloatingState(input));
    input.addEventListener('blur', () => updateFloatingState(input));
    input.addEventListener('focus', () => updateFloatingState(input));
  });

  // Message character counter
  if (messageTextarea && charCounter) {
    messageTextarea.addEventListener('input', () => {
      const length = messageTextarea.value.trim().length;
      charCounter.textContent = `${length} / 10 min`;
      if (length >= 10) {
        charCounter.classList.add('valid');
      } else {
        charCounter.classList.remove('valid');
      }
    });
  }

  // Random Celebratory Success Messages
  const randomCelebrations = [
    "🚀 Your project journey starts here!",
    "✨ Message delivered successfully!",
    "💻 Let's build something awesome together!",
    "🎯 Your enquiry is safely in my inbox.",
    "🔥 Thanks! I'll connect with you soon.",
    "🌟 Great choice! Talk soon.",
    "⚡ Project request received successfully.",
    "🎉 Your idea just reached my workspace."
  ];

  const getRandomCelebration = () => {
    const randomIndex = Math.floor(Math.random() * randomCelebrations.length);
    return randomCelebrations[randomIndex];
  };

  // Top-Right Success / Error Toast Notification
  const showToast = ({ type = 'success', title, message, duration = 5000 } = {}) => {
    const existingToast = document.querySelector('.contact-success-toast');
    if (existingToast) existingToast.remove();

    const toast = document.createElement('div');
    toast.className = `contact-success-toast${type === 'error' ? ' contact-toast-error' : ''}`;
    toast.setAttribute('role', 'status');
    toast.setAttribute('aria-live', 'polite');

    const iconClass = type === 'success' ? 'uil-check-circle' : 'uil-exclamation-circle';
    const toastTitle = title || (type === 'success' ? getRandomCelebration() : 'Enquiry could not be sent');
    const toastMessage = message || (type === 'success'
      ? "Thanks! I'll get back to you within 24 hours."
      : 'Please verify your details and try again.');

    toast.innerHTML = `
      <div class="contact-success-icon">
        <i class="uil ${iconClass}"></i>
      </div>
      <div class="contact-success-content">
        <strong class="contact-toast-title">${toastTitle}</strong>
        <span class="contact-toast-desc">${toastMessage}</span>
      </div>
      <button class="contact-success-close" type="button" aria-label="Close notification">
        <i class="uil uil-multiply"></i>
      </button>
      <div class="contact-toast-progress"></div>
    `;

    document.body.appendChild(toast);

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
      }, 350);
    };

    const closeBtn = toast.querySelector('.contact-success-close');
    if (closeBtn) {
      closeBtn.addEventListener('click', dismissToast);
    }

    dismissTimer = setTimeout(dismissToast, duration);
  };

  // Inline Validation Helpers
  const setFieldError = (input, errorElement, message) => {
    if (input) input.classList.add('input-invalid');
    if (errorElement) {
      errorElement.textContent = message;
      errorElement.classList.add('visible');
    }
  };

  const clearFieldError = (input, errorElement) => {
    if (input) input.classList.remove('input-invalid');
    if (errorElement) {
      errorElement.textContent = '';
      errorElement.classList.remove('visible');
    }
  };

  // Realtime clear on typing
  const nameInput = document.getElementById('user_name');
  const nameError = document.getElementById('name-error');
  if (nameInput) nameInput.addEventListener('input', () => clearFieldError(nameInput, nameError));

  const emailInput = document.getElementById('user_email');
  const emailError = document.getElementById('email-error');
  if (emailInput) emailInput.addEventListener('input', () => clearFieldError(emailInput, emailError));

  const phoneInput = document.getElementById('phone_number');
  const phoneError = document.getElementById('phone-error');
  if (phoneInput) phoneInput.addEventListener('input', () => clearFieldError(phoneInput, phoneError));

  const messageError = document.getElementById('message-error');
  if (messageTextarea) messageTextarea.addEventListener('input', () => clearFieldError(messageTextarea, messageError));

  if (typeof emailjs !== 'undefined') {
    emailjs.init('Xme14b3NE9dsk36kv');
  }

  /* ==========================================================================
     WHATSAPP INTEGRATION & DYNAMIC MESSAGE BUILDER
     ========================================================================== */
  const formWhatsappBtn = document.getElementById('formWhatsappBtn');
  const baseWaNumber = '918124473373';
  const defaultWaMsg = 'Hi, I want to discuss about my business website and enquire about your services.';

  const updateWhatsAppLinks = () => {
    if (!formWhatsappBtn) return;
    const nameVal = nameInput ? nameInput.value.trim() : '';
    const msgVal = messageTextarea ? messageTextarea.value.trim() : '';

    let compiledMsg = defaultWaMsg;
    if (nameVal && msgVal) {
      compiledMsg = `Hi Isravel, I am ${nameVal}. I want to discuss about my business website: ${msgVal}`;
    } else if (msgVal) {
      compiledMsg = `Hi, I want to discuss about my business website: ${msgVal}`;
    } else if (nameVal) {
      compiledMsg = `Hi Isravel, I am ${nameVal}. I want to discuss about my business website and enquire about your services.`;
    }

    formWhatsappBtn.href = `https://wa.me/${baseWaNumber}?text=${encodeURIComponent(compiledMsg)}`;
  };

  if (nameInput) nameInput.addEventListener('input', updateWhatsAppLinks);
  if (messageTextarea) messageTextarea.addEventListener('input', updateWhatsAppLinks);
  updateWhatsAppLinks();

  if (contactForm) {
    contactForm.addEventListener('submit', function (e) {
      e.preventDefault();

      let isValid = true;

      // Validate Full Name
      const nameVal = nameInput ? nameInput.value.trim() : '';
      if (!nameVal || nameVal.length < 2) {
        setFieldError(nameInput, nameError, 'Please enter your full name (at least 2 characters).');
        isValid = false;
      } else {
        clearFieldError(nameInput, nameError);
      }

      // Validate Email
      const emailVal = emailInput ? emailInput.value.trim() : '';
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailVal || !emailRegex.test(emailVal)) {
        setFieldError(emailInput, emailError, 'Please enter a valid email address.');
        isValid = false;
      } else {
        clearFieldError(emailInput, emailError);
      }

      // Validate Phone (Optional, but if filled, must be valid phone digits)
      const phoneVal = phoneInput ? phoneInput.value.trim() : '';
      if (phoneVal) {
        const phoneRegex = /^[\d\s\+\-\(\)]{7,20}$/;
        const digitsOnly = phoneVal.replace(/\D/g, '');
        if (!phoneRegex.test(phoneVal) || digitsOnly.length < 7) {
          setFieldError(phoneInput, phoneError, 'Please enter a valid phone number (digits only).');
          isValid = false;
        } else {
          clearFieldError(phoneInput, phoneError);
        }
      } else {
        clearFieldError(phoneInput, phoneError);
      }

      // Validate Message
      const messageVal = messageTextarea ? messageTextarea.value.trim() : '';
      if (!messageVal || messageVal.length < 10) {
        setFieldError(messageTextarea, messageError, 'Please enter your message (at least 10 characters).');
        isValid = false;
      } else {
        clearFieldError(messageTextarea, messageError);
      }

      if (!isValid) {
        const firstInvalid = contactForm.querySelector('.input-invalid');
        if (firstInvalid) firstInvalid.focus();
        return;
      }

      const submitBtn = contactForm.querySelector('button[type="submit"]');
      const originalHtml = submitBtn ? submitBtn.innerHTML : '<span>Send Enquiry</span><i class="uil uil-message btn-icon"></i>';

      if (submitBtn) {
        submitBtn.disabled = true;
        submitBtn.innerHTML = '<i class="uil uil-spinner-alt"></i> <span>Sending Enquiry...</span>';
      }

      const resetFormComplete = () => {
        contactForm.reset();
        floatingInputs.forEach(input => updateFloatingState(input));
        if (charCounter) {
          charCounter.textContent = '0 / 10 min';
          charCounter.classList.remove('valid');
        }
        updateWhatsAppLinks();
      };

      if (typeof emailjs !== 'undefined') {
        emailjs.sendForm('service_8tktt3e', 'template_73a0akg', this)
          .then(() => {
            showToast({
              type: 'success',
              title: getRandomCelebration(),
              message: "Thanks! I'll get back to you within 24 hours."
            });
            resetFormComplete();
          })
          .catch((err) => {
            console.error('EmailJS Error:', err);
            showToast({
              type: 'error',
              title: 'Enquiry could not be sent',
              message: 'Please check your internet connection or email directly at israveltech@gmail.com.'
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
          title: getRandomCelebration(),
          message: "Thanks! I'll get back to you within 24 hours."
        });
        resetFormComplete();
        if (submitBtn) {
          submitBtn.disabled = false;
          submitBtn.innerHTML = originalHtml;
        }
      }
    });
  }

  /* ==========================================================================
     11. HERO GLASS TERMINAL MULTI-LANGUAGE SWITCHER
     ========================================================================== */
  const termTabs = document.querySelectorAll('.term-tab');
  const termSnippets = document.querySelectorAll('.term-snippet');

  if (termTabs.length > 0 && termSnippets.length > 0) {
    let currentCodeIdx = 0;
    const tabLangs = Array.from(termTabs).map(tab => tab.getAttribute('data-lang'));

    const switchTerminalSnippet = (lang) => {
      termTabs.forEach(tab => {
        if (tab.getAttribute('data-lang') === lang) {
          tab.classList.add('active');
        } else {
          tab.classList.remove('active');
        }
      });

      termSnippets.forEach(snip => {
        if (snip.id === `tsnip-${lang}`) {
          snip.classList.add('active');
        } else {
          snip.classList.remove('active');
        }
      });
    };

    termTabs.forEach((tab, idx) => {
      tab.addEventListener('click', () => {
        currentCodeIdx = idx;
        const lang = tab.getAttribute('data-lang');
        switchTerminalSnippet(lang);
      });
    });

    // Auto rotate snippets every 4.5 seconds
    setInterval(() => {
      currentCodeIdx = (currentCodeIdx + 1) % tabLangs.length;
      switchTerminalSnippet(tabLangs[currentCodeIdx]);
    }, 4500);
  }

  /* ==========================================================================
     12. DEVELOPER WORKFLOW TIMELINE SEQUENTIAL PULSE (6-STEPS)
     ========================================================================== */
  const workflowNodes = document.querySelectorAll('#devWorkflowPipeline .workflow-node');
  if (workflowNodes.length > 0) {
    let activeNodeIdx = 0;

    setInterval(() => {
      workflowNodes.forEach(node => node.classList.remove('active', 'pulse-active'));
      activeNodeIdx = (activeNodeIdx + 1) % workflowNodes.length;
      if (workflowNodes[activeNodeIdx]) {
        workflowNodes[activeNodeIdx].classList.add('active');
      }
    }, 1800);
  }

  /* ==========================================================================
     13. VANILLA TILT & GSAP MICRO-INTERACTIONS
     ========================================================================== */
  if (typeof VanillaTilt !== 'undefined') {
    const tiltElements = document.querySelectorAll('[data-tilt]');
    if (tiltElements.length > 0) {
      VanillaTilt.init(tiltElements, {
        reverse: false,
        max: 8,
        perspective: 1000,
        scale: 1.02,
        speed: 400,
        transition: true,
        glare: false
      });
    }
  }

  if (typeof gsap !== 'undefined') {
    // Subtle ambient particle floating with GSAP
    gsap.to('.hero-bg-particle', {
      y: -15,
      duration: 3,
      repeat: -1,
      yoyo: true,
      ease: 'sine.inOut',
      stagger: 0.4
    });
  }

});