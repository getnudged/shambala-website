const header = document.querySelector('[data-site-header]');

if (header) {
  const updateHeader = () => {
    header.classList.toggle('site-header--scrolled', window.scrollY > 60);
  };

  updateHeader();
  window.addEventListener('scroll', updateHeader, { passive: true });
}
