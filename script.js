/* ================================================
   ASIF NAWAZ — PORTFOLIO  |  script.js
   ================================================ */

/* ===========================
   1. CUSTOM CURSOR
=========================== */
const cursor      = document.getElementById('cursor');
const cursorTrail = document.getElementById('cursorTrail');
let mouseX = 0, mouseY = 0;

// Hide cursor on touch devices
if (window.matchMedia('(pointer: coarse)').matches) {
  cursor.style.display      = 'none';
  cursorTrail.style.display = 'none';
  document.body.style.cursor = 'auto';
} else {
  document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
    cursor.style.left = mouseX - 6 + 'px';
    cursor.style.top  = mouseY - 6 + 'px';
    setTimeout(() => {
      cursorTrail.style.left = mouseX - 18 + 'px';
      cursorTrail.style.top  = mouseY - 18 + 'px';
    }, 80);
  });

  document.addEventListener('mousedown', () => cursor.style.transform = 'scale(1.8)');
  document.addEventListener('mouseup',   () => cursor.style.transform = 'scale(1)');

  // Grow cursor on interactive elements
  document.querySelectorAll('a, button, label, .skill-card, .project-card, .cert-card, .review-card').forEach(el => {
    el.addEventListener('mouseenter', () => {
      cursor.style.transform = 'scale(1.6)';
      cursorTrail.style.borderColor = 'rgba(0,212,255,0.7)';
    });
    el.addEventListener('mouseleave', () => {
      cursor.style.transform = 'scale(1)';
      cursorTrail.style.borderColor = 'rgba(0,212,255,0.35)';
    });
  });
}


/* ===========================
   2. NAVBAR — SCROLL & HAMBURGER
=========================== */
const navbar    = document.getElementById('navbar');
const hamburger = document.getElementById('hamburger');
const navMenu   = document.getElementById('nav-menu');

// Shrink navbar on scroll
window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 60);
});

// Hamburger toggle
hamburger.addEventListener('click', () => {
  navMenu.classList.toggle('open');
  hamburger.setAttribute('aria-expanded', navMenu.classList.contains('open'));
});

// Close menu on link click (mobile)
navMenu.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    navMenu.classList.remove('open');
    hamburger.setAttribute('aria-expanded', 'false');
  });
});

// Close menu on outside click
document.addEventListener('click', (e) => {
  if (!navbar.contains(e.target)) {
    navMenu.classList.remove('open');
  }
});


/* ===========================
   3. SMOOTH SCROLL
=========================== */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', (e) => {
    const target = document.querySelector(anchor.getAttribute('href'));
    if (target) {
      e.preventDefault();
      const offset = navbar.offsetHeight + 10;
      const top    = target.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  });
});


/* ===========================
   4. ACTIVE NAV LINK ON SCROLL
=========================== */
const sections = document.querySelectorAll('section[id]');
const navLinks  = document.querySelectorAll('nav ul a');

function updateActiveNav() {
  let current = '';
  sections.forEach(section => {
    if (window.scrollY >= section.offsetTop - 140) {
      current = section.getAttribute('id');
    }
  });
  navLinks.forEach(link => {
    link.style.color = '';
    if (link.getAttribute('href') === '#' + current) {
      link.style.color = 'var(--accent)';
    }
  });
}
window.addEventListener('scroll', updateActiveNav);


/* ===========================
   5. SCROLL REVEAL
=========================== */
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));

// Stagger delays for grid cards
const staggerSelectors = [
  '.skills-grid .skill-card',
  '.projects-grid .project-card',
  '.cert-grid .cert-card',
  '.reviews-grid .review-card',
  '.timeline .timeline-item',
];
staggerSelectors.forEach(sel => {
  document.querySelectorAll(sel).forEach((el, i) => {
    el.style.transitionDelay = (i * 0.09) + 's';
  });
});


/* ===========================
   6. TYPING EFFECT — HERO
=========================== */
const typingEl = document.querySelector('h1 .line2');
if (typingEl) {
  const fullText = typingEl.textContent;
  typingEl.textContent = '';
  typingEl.style.borderRight = '3px solid var(--accent)';
  typingEl.style.paddingRight = '4px';

  let charIndex = 0;
  const typingInterval = setInterval(() => {
    typingEl.textContent += fullText[charIndex];
    charIndex++;
    if (charIndex >= fullText.length) {
      clearInterval(typingInterval);
      // Blink caret then remove
      setTimeout(() => {
        typingEl.style.transition = 'border-color 0.3s';
        typingEl.style.borderRight = 'none';
      }, 1500);
    }
  }, 110);
}


/* ===========================
   7. COUNTER ANIMATION — HERO STATS
=========================== */
function animateCounter(el, target, duration = 1400) {
  let start = 0;
  const step = target / (duration / 16);
  const timer = setInterval(() => {
    start += step;
    if (start >= target) {
      el.textContent = target + '+';
      clearInterval(timer);
    } else {
      el.textContent = Math.floor(start) + '+';
    }
  }, 16);
}

const statsObserver = new IntersectionObserver((entries) => {
  if (entries[0].isIntersecting) {
    animateCounter(document.getElementById('s1'), 2);
    animateCounter(document.getElementById('s2'), 6);
    animateCounter(document.getElementById('s3'), 15);
    statsObserver.disconnect();
  }
}, { threshold: 0.6 });

const heroStats = document.querySelector('.hero-stats');
if (heroStats) statsObserver.observe(heroStats);


/* ===========================
   8. CONTACT FORM
=========================== */
const contactForm = document.getElementById('contactForm');
const formSuccess = document.getElementById('formSuccess');

function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function shakeFormWrap() {
  const wrap = document.querySelector('.contact-form-wrap');
  wrap.style.animation = 'none';
  void wrap.offsetWidth; // force reflow
  wrap.style.animation = 'shake 0.4s ease';
  setTimeout(() => { wrap.style.animation = ''; }, 450);
}

function setInputError(id, isError) {
  const el = document.getElementById(id);
  if (el) el.style.borderColor = isError ? '#ef4444' : '';
}

contactForm.addEventListener('submit', (e) => {
  e.preventDefault();

  const fname   = document.getElementById('fname').value.trim();
  const lname   = document.getElementById('lname').value.trim();
  const email   = document.getElementById('email').value.trim();
  const service = document.getElementById('service').value;
  const message = document.getElementById('message').value.trim();

  // Reset
  ['fname','lname','email','service','message'].forEach(id => setInputError(id, false));

  // Validate required fields
  let hasError = false;
  if (!fname)    { setInputError('fname', true);   hasError = true; }
  if (!lname)    { setInputError('lname', true);   hasError = true; }
  if (!email)    { setInputError('email', true);   hasError = true; }
  if (!service)  { setInputError('service', true); hasError = true; }
  if (!message)  { setInputError('message', true); hasError = true; }

  if (hasError) { shakeFormWrap(); return; }

  // Validate email format
  if (!isValidEmail(email)) {
    setInputError('email', true);
    document.getElementById('email').focus();
    return;
  }

  // Simulate sending
  const submitBtn = contactForm.querySelector('.form-submit');
  submitBtn.textContent = 'Sending...';
  submitBtn.disabled    = true;
  submitBtn.style.opacity = '0.7';

  setTimeout(() => {
    submitBtn.textContent   = 'Send Message 🚀';
    submitBtn.disabled      = false;
    submitBtn.style.opacity = '';

    formSuccess.style.display = 'block';
    contactForm.reset();

    setTimeout(() => { formSuccess.style.display = 'none'; }, 5000);
  }, 1500);
});

// Clear error border on input
['fname','lname','email','service','message'].forEach(id => {
  const el = document.getElementById(id);
  if (el) el.addEventListener('input', () => setInputError(id, false));
});


/* ===========================
   9. NAVBAR RESIZE HANDLER
=========================== */
window.addEventListener('resize', () => {
  // Close mobile menu on resize to desktop
  if (window.innerWidth > 640) {
    navMenu.classList.remove('open');
  }
});


/* ===========================
   10. DEV CONSOLE MESSAGE
=========================== */
console.log('%c👋 Hey Developer!', 'color:#00d4ff;font-size:1.3rem;font-weight:bold;font-family:monospace;');
console.log('%cThis portfolio belongs to Asif Nawaz — Frontend Developer', 'color:#64748b;font-size:0.9rem;');
console.log('%c🌐 GitHub: github.com/asifn0093', 'color:#7c3aed;font-size:0.85rem;');
