const navLinks = Array.from(document.querySelectorAll('.site-nav a[href^="#"]'));
const sections = navLinks
  .map((link) => document.querySelector(link.getAttribute('href')))
  .filter(Boolean);

if ('IntersectionObserver' in window && sections.length > 0) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) {
          return;
        }

        navLinks.forEach((link) => {
          link.classList.toggle('is-active', link.getAttribute('href') === `#${entry.target.id}`);
        });
      });
    },
    {
      rootMargin: '-35% 0px -55% 0px',
      threshold: 0,
    },
  );

  sections.forEach((section) => observer.observe(section));
}

const placeholderLinks = document.querySelectorAll('.placeholder-link');

placeholderLinks.forEach((link) => {
  link.addEventListener('click', (event) => {
    event.preventDefault();
    showLinkNotice('Profile/contact link pending. Replace the TODO URL in index.html.');
  });
});

function showLinkNotice(message) {
  let notice = document.querySelector('.link-notice');

  if (!notice) {
    notice = document.createElement('div');
    notice.className = 'link-notice';
    notice.setAttribute('role', 'status');
    notice.setAttribute('aria-live', 'polite');
    document.body.appendChild(notice);
  }

  notice.textContent = message;
  notice.classList.add('is-visible');
  window.clearTimeout(showLinkNotice.timeoutId);
  showLinkNotice.timeoutId = window.setTimeout(() => {
    notice.classList.remove('is-visible');
  }, 2600);
}
