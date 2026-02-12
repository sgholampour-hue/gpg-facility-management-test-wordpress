/**
 * GPG Facility Management Block Theme - Main JavaScript
 * Pixel-perfect match with Lovable React project interactions
 */

(function () {
  'use strict';

  // ==================== Scroll Reveal ====================
  var revealElements = document.querySelectorAll('.gpg-scroll-reveal');

  if ('IntersectionObserver' in window && revealElements.length) {
    var revealObserver = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            revealObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    revealElements.forEach(function (el) {
      revealObserver.observe(el);
    });
  } else {
    revealElements.forEach(function (el) {
      el.classList.add('visible');
    });
  }

  // ==================== Hero Reveal ====================
  var heroElements = document.querySelectorAll('.gpg-hero-reveal');
  setTimeout(function () {
    heroElements.forEach(function (el, i) {
      setTimeout(function () {
        el.classList.add('visible');
      }, i * 100);
    });
  }, 100);

  // ==================== Stats Counter Animation ====================
  var statNumbers = document.querySelectorAll('.gpg-stat-number[data-target]');

  if ('IntersectionObserver' in window && statNumbers.length) {
    var counterObserver = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            var el = entry.target;
            var target = parseInt(el.getAttribute('data-target'), 10);
            var suffix = el.getAttribute('data-suffix') || '';
            var duration = 2000;
            var steps = 60;
            var increment = target / steps;
            var current = 0;

            var timer = setInterval(function () {
              current += increment;
              if (current >= target) {
                current = target;
                clearInterval(timer);
              }
              el.textContent = Math.floor(current) + suffix;
            }, duration / steps);

            counterObserver.unobserve(el);
          }
        });
      },
      { threshold: 0.3 }
    );

    statNumbers.forEach(function (el) {
      counterObserver.observe(el);
    });
  }

  // ==================== FAQ Accordion ====================
  var faqItems = document.querySelectorAll('.gpg-faq-item');

  faqItems.forEach(function (item) {
    var question = item.querySelector('.gpg-faq-question');
    if (question) {
      question.addEventListener('click', function () {
        var isActive = item.classList.contains('active');

        // Close all other items
        faqItems.forEach(function (otherItem) {
          if (otherItem !== item) {
            otherItem.classList.remove('active');
          }
        });

        // Toggle current item
        item.classList.toggle('active', !isActive);
      });
    }
  });

  // ==================== Process Timeline Animation ====================
  var processLine = document.querySelector('.gpg-process-line .fill');
  var stepCards = document.querySelectorAll('.gpg-step-card');

  if ('IntersectionObserver' in window && stepCards.length) {
    var processObserver = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            if (processLine) {
              processLine.classList.add('active');
            }
            stepCards.forEach(function (card, index) {
              setTimeout(function () {
                card.classList.add('active');
              }, (index + 1) * 300);
            });
            processObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );

    var processSection = document.querySelector('.gpg-process');
    if (processSection) {
      processObserver.observe(processSection);
    }
  }

  // ==================== Mobile Menu Toggle ====================
  var toggle = document.querySelector('.gpg-mobile-toggle');
  var mobileNav = document.querySelector('.gpg-mobile-nav');

  if (toggle && mobileNav) {
    toggle.addEventListener('click', function () {
      var isOpen = mobileNav.classList.contains('active');
      mobileNav.classList.toggle('active');
      toggle.classList.toggle('active');
      toggle.setAttribute('aria-expanded', !isOpen);
    });

    mobileNav.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        mobileNav.classList.remove('active');
        toggle.classList.remove('active');
        toggle.setAttribute('aria-expanded', 'false');
      });
    });
  }

  // ==================== Sub-header hide on scroll ====================
  var subHeader = document.querySelector('.gpg-sub-header');
  if (subHeader) {
    window.addEventListener('scroll', function () {
      if (window.scrollY > 20) {
        subHeader.classList.add('hidden-scroll');
      } else {
        subHeader.classList.remove('hidden-scroll');
      }
    }, { passive: true });
  }

  // ==================== Smooth Scroll for Anchor Links ====================
  document.querySelectorAll('a[href^="#"]').forEach(function (link) {
    link.addEventListener('click', function (e) {
      var targetId = this.getAttribute('href');
      if (targetId === '#') return;

      var targetEl = document.querySelector(targetId);
      if (targetEl) {
        e.preventDefault();
        var headerOffset = 80;
        var elementPosition = targetEl.getBoundingClientRect().top;
        var offsetPosition = elementPosition + window.pageYOffset - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth',
        });
      }
    });
  });

  // ==================== Diensten dropdown (header) ====================
  var dienstenTrigger = document.querySelector('[data-diensten-trigger]');
  var dienstenDropdown = document.querySelector('[data-diensten-dropdown]');

  if (dienstenTrigger && dienstenDropdown) {
    var parent = dienstenTrigger.parentElement;

    parent.addEventListener('mouseenter', function () {
      dienstenDropdown.style.display = 'block';
    });

    parent.addEventListener('mouseleave', function () {
      dienstenDropdown.style.display = 'none';
    });
  }

  // ==================== Contact Form Submission ====================
  var contactForm = document.querySelector('.gpg-contact-form form');

  if (contactForm) {
    contactForm.addEventListener('submit', function (e) {
      e.preventDefault();

      var submitBtn = contactForm.querySelector('button[type="submit"]');
      var originalText = submitBtn.innerHTML;
      submitBtn.innerHTML = 'Verzenden...';
      submitBtn.disabled = true;

      setTimeout(function () {
        // Show success
        var formContainer = contactForm.parentElement;
        formContainer.innerHTML =
          '<div style="text-align:center; padding:3rem 0;">' +
          '<div style="width:3.5rem; height:3.5rem; background:rgba(107,138,46,0.1); display:flex; align-items:center; justify-content:center; margin:0 auto 1rem; border-radius:0 1rem 0 0;">' +
          '<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#6b8a2e" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><path d="m9 11 3 3L22 4"/></svg>' +
          '</div>' +
          '<h3 style="font-size:1.25rem; font-weight:700; color:#16216a; margin-bottom:0.5rem;">Bedankt voor je bericht!</h3>' +
          '<p style="color:#6b7f9e;">Wij nemen zo snel mogelijk contact met je op.</p>' +
          '</div>';
      }, 1500);
    });
  }

  // ==================== Reduced Motion ====================
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    document.querySelectorAll('.gpg-scroll-reveal, .gpg-hero-reveal').forEach(function (el) {
      el.classList.add('visible');
    });

    statNumbers.forEach(function (el) {
      var target = el.getAttribute('data-target') || '0';
      var suffix = el.getAttribute('data-suffix') || '';
      el.textContent = target + suffix;
    });
  }

})();
