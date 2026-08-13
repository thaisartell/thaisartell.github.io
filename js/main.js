const placeholderLinks = document.querySelectorAll('.placeholder-link');

placeholderLinks.forEach((link) => {
  link.addEventListener('click', (event) => {
    event.preventDefault();
    showLinkNotice('Contact email pending. Replace the TODO email address in index.html.');
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
