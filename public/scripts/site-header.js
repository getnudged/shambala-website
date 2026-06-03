const header = document.querySelector('[data-site-header]');
const mobileNav = document.querySelector('[data-mobile-nav]');
const mobileToggle = document.querySelector('[data-mobile-nav-toggle]');
const mobileCloseControls = document.querySelectorAll('[data-mobile-nav-close]');

if (header) {
  const updateHeader = () => {
    header.classList.toggle('site-header--scrolled', window.scrollY > 60);
  };

  updateHeader();
  window.addEventListener('scroll', updateHeader, { passive: true });
}

if (mobileNav && mobileToggle) {
  const setMobileNavState = (isOpen) => {
    mobileNav.classList.toggle('is-open', isOpen);
    mobileNav.setAttribute('aria-hidden', String(!isOpen));
    mobileToggle.setAttribute('aria-expanded', String(isOpen));
    mobileToggle.setAttribute('aria-label', isOpen ? 'Close navigation menu' : 'Open navigation menu');
    document.documentElement.classList.toggle('mobile-nav-open', isOpen);
  };

  mobileToggle.addEventListener('click', () => {
    setMobileNavState(!mobileNav.classList.contains('is-open'));
  });

  mobileCloseControls.forEach((control) => {
    control.addEventListener('click', () => setMobileNavState(false));
  });

  mobileNav.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => setMobileNavState(false));
  });

  window.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
      setMobileNavState(false);
    }
  });
}
