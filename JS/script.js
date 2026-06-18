/* ================================================
   ASIF NAWAZ PORTFOLIO  |  script.js
   ================================================ */

document.addEventListener('DOMContentLoaded', function () {

  /* ===========================
     1. CUSTOM CURSOR (desktop)
  =========================== */
  const cursor      = document.getElementById('cursor');
  const cursorTrail = document.getElementById('cursorTrail');

  if (window.matchMedia('(pointer: fine)').matches) {
    let mx = 0, my = 0;

    document.addEventListener('mousemove', function (e) {
      mx = e.clientX;
      my = e.clientY;
      cursor.style.left = mx - 6 + 'px';
      cursor.style.top  = my - 6 + 'px';
      setTimeout(function () {
        cursorTrail.style.left = mx - 17 + 'px';
        cursorTrail.style.top  = my - 17 + 'px';
      }, 80);
    });

    document.addEventListener('mousedown', function () { cursor.style.transform = 'scale(1.8)'; });
    document.addEventListener('mouseup',   function () { cursor.style.transform = 'scale(1)'; });

    document.querySelectorAll('a, button, .skill-card, .project-card, .cert-card, .review-card').forEach(function (el) {
      el.addEventListener('mouseenter', function () {
        cursor.style.transform = 'scale(1.5)';
        cursorTrail.style.borderColor = 'rgba(0,212,255,0.7)';
      });
      el.addEventListener('mouseleave', function () {
        cursor.style.transform = 'scale(1)';
        cursorTrail.style.borderColor = 'rgba(0,212,255,0.4)';
      });
    });
  }


  /* ===========================
     2. NAVBAR SCROLL SHRINK
  =========================== */
  var navbar = document.getElementById('navbar');

  window.addEventListener('scroll', function () {
    if (window.scrollY > 60) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });


  /* ===========================
     3. HAMBURGER MENU — FIXED
  =========================== */
  var hamburger = document.getElementById('hamburger');
  var navMenu   = document.getElementById('nav-menu');

  // Toggle on hamburger click
  hamburger.addEventListener('click', function (e) {
    e.stopPropagation();
    var isOpen = navMenu.classList.toggle('open');
    hamburger.classList.toggle('open', isOpen);
    hamburger.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
  });

  // Close menu when a nav link is clicked
  navMenu.querySelectorAll('a').forEach(function (link) {
    link.addEventListener('click', function () {
      navMenu.classList.remove('open');
      hamburger.classList.remove('open');
      hamburger.setAttribute('aria-expanded', 'false');
    });
  });

  // Close menu when clicking outside
  document.addEventListener('click', function (e) {
    if (!navbar.contains(e.target)) {
      navMenu.classList.remove('open');
      hamburger.classList.remove('open');
      hamburger.setAttribute('aria-expanded', 'false');
    }
  });

  // Close menu on window resize to desktop
  window.addEventListener('resize', function () {
    if (window.innerWidth > 860) {
      navMenu.classList.remove('open');
      hamburger.classList.remove('open');
      hamburger.setAttribute('aria-expanded', 'false');
    }
  });


  /* ===========================
     4. SMOOTH SCROLL
  =========================== */
  document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
    anchor.addEventListener('click', function (e) {
      var href   = anchor.getAttribute('href');
      var target = document.querySelector(href);
      if (target) {
        e.preventDefault();
        var navH   = navbar.offsetHeight;
        var top    = target.getBoundingClientRect().top + window.pageYOffset - navH - 8;
        window.scrollTo({ top: top, behavior: 'smooth' });
      }
    });
  });


  /* ===========================
     5. ACTIVE NAV LINK
  =========================== */
  var sections = document.querySelectorAll('section[id]');
  var navLinks  = document.querySelectorAll('.nav-menu a');

  function updateActiveNav() {
    var current = '';
    sections.forEach(function (sec) {
      if (window.pageYOffset >= sec.offsetTop - 120) {
        current = sec.getAttribute('id');
      }
    });
    navLinks.forEach(function (link) {
      link.classList.remove('active');
      if (link.getAttribute('href') === '#' + current) {
        link.classList.add('active');
      }
    });
  }

  window.addEventListener('scroll', updateActiveNav);
  updateActiveNav();


  /* ===========================
     6. SCROLL REVEAL — FIXED
     (works on mobile too)
  =========================== */
  // Add reveal class to all section children
  var revealTargets = document.querySelectorAll(
    '.about-image-wrap, .about-text, ' +
    '.skill-card, .project-card, .cert-card, .review-card, ' +
    '.timeline-item, .contact-info, .contact-form-wrap, ' +
    '#skills .section-tag, #skills .section-title, ' +
    '#projects .section-tag, #projects .section-title, ' +
    '#certificates .section-tag, #certificates .section-title, ' +
    '#reviews .section-tag, #reviews .section-title, ' +
    '#experience .section-tag, #experience .section-title, ' +
    '#contact .section-tag, #contact .section-title'
  );

  revealTargets.forEach(function (el) {
    el.classList.add('reveal');
  });

  // Stagger grid cards
  var staggerGroups = [
    '.skills-grid .skill-card',
    '.projects-grid .project-card',
    '.cert-grid .cert-card',
    '.reviews-grid .review-card',
    '.timeline .timeline-item'
  ];
  staggerGroups.forEach(function (sel) {
    document.querySelectorAll(sel).forEach(function (el, i) {
      el.style.transitionDelay = (i * 0.08) + 's';
    });
  });

  // Use IntersectionObserver with lower threshold for mobile
  var observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, {
    threshold: 0.05,       // very low — triggers even on small screens
    rootMargin: '0px 0px -30px 0px'
  });

  document.querySelectorAll('.reveal').forEach(function (el) {
    observer.observe(el);
  });


  /* ===========================
     7. TYPING EFFECT — HERO
  =========================== */
  var typingEl = document.querySelector('h1 .line2');
  if (typingEl) {
    var fullText = typingEl.textContent;
    typingEl.textContent = '';
    typingEl.style.borderRight = '3px solid var(--accent)';
    typingEl.style.paddingRight = '3px';

    var charIndex = 0;
    var typingTimer = setInterval(function () {
      typingEl.textContent += fullText[charIndex];
      charIndex++;
      if (charIndex >= fullText.length) {
        clearInterval(typingTimer);
        setTimeout(function () {
          typingEl.style.borderRight = 'none';
          typingEl.style.paddingRight = '0';
        }, 1500);
      }
    }, 110);
  }


  /* ===========================
     8. COUNTER ANIMATION
  =========================== */
  function animateCounter(el, target, duration) {
    duration = duration || 1400;
    var start = 0;
    var step  = target / (duration / 16);
    var timer = setInterval(function () {
      start += step;
      if (start >= target) {
        el.textContent = target + '+';
        clearInterval(timer);
      } else {
        el.textContent = Math.floor(start) + '+';
      }
    }, 16);
  }

  var heroStats = document.querySelector('.hero-stats');
  if (heroStats) {
    var statsObserver = new IntersectionObserver(function (entries) {
      if (entries[0].isIntersecting) {
        animateCounter(document.getElementById('s1'), 2);
        animateCounter(document.getElementById('s2'), 6);
        animateCounter(document.getElementById('s3'), 15);
        statsObserver.disconnect();
      }
    }, { threshold: 0.5 });
    statsObserver.observe(heroStats);
  }


  /* ===========================
     9. CONTACT FORM
  =========================== */
  var contactForm = document.getElementById('contactForm');
  var formSuccess = document.getElementById('formSuccess');

  function isValidEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }

  function setError(id, hasError) {
    var el = document.getElementById(id);
    if (!el) return;
    if (hasError) {
      el.classList.add('error');
    } else {
      el.classList.remove('error');
    }
  }

  function shakeForm() {
    var wrap = document.querySelector('.contact-form-wrap');
    if (!wrap) return;
    wrap.style.animation = 'none';
    void wrap.offsetWidth;
    wrap.style.animation = 'shake 0.4s ease';
    setTimeout(function () { wrap.style.animation = ''; }, 450);
  }

  if (contactForm) {
    contactForm.addEventListener('submit', function (e) {
      e.preventDefault();

      var fname   = document.getElementById('fname').value.trim();
      var lname   = document.getElementById('lname').value.trim();
      var email   = document.getElementById('email').value.trim();
      var service = document.getElementById('service').value;
      var message = document.getElementById('message').value.trim();

      // Reset errors
      ['fname','lname','email','service','message'].forEach(function (id) {
        setError(id, false);
      });

      var hasError = false;
      if (!fname)   { setError('fname', true);   hasError = true; }
      if (!lname)   { setError('lname', true);   hasError = true; }
      if (!email)   { setError('email', true);   hasError = true; }
      if (!service) { setError('service', true); hasError = true; }
      if (!message) { setError('message', true); hasError = true; }

      if (hasError) { shakeForm(); return; }

      if (!isValidEmail(email)) {
        setError('email', true);
        document.getElementById('email').focus();
        return;
      }

      var btn = contactForm.querySelector('.btn-full');
      btn.textContent   = 'Sending...';
      btn.disabled      = true;
      btn.style.opacity = '0.7';

      setTimeout(function () {
        btn.textContent   = 'Send Message 🚀';
        btn.disabled      = false;
        btn.style.opacity = '';
        if (formSuccess) {
          formSuccess.style.display = 'block';
          setTimeout(function () { formSuccess.style.display = 'none'; }, 5000);
        }
        contactForm.reset();
      }, 1500);
    });

    // Clear error on input
    ['fname','lname','email','service','message'].forEach(function (id) {
      var el = document.getElementById(id);
      if (el) {
        el.addEventListener('input', function () { setError(id, false); });
        el.addEventListener('change', function () { setError(id, false); });
      }
    });
  }


  /* ===========================
     10. CONSOLE SIGNATURE
  =========================== */
  console.log('%c👋 Asif Nawaz — Frontend Developer', 'color:#00d4ff;font-size:1.1rem;font-weight:bold;');
  console.log('%c📧 asifn009@gmail.com  |  🐙 github.com/asifn0093', 'color:#7c3aed;font-size:0.85rem;');

}); // END DOMContentLoaded
