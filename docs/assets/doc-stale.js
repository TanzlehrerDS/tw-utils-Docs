(function () {
  const TRANSLATIONS = {
    de: { close: 'Hinweis ausblenden' },
    en: { close: 'Dismiss notice' },
  };

  const STORAGE_PREFIX = 'twutils:doc-stale:';

  function getLang() {
    const lang = (document.documentElement.lang || 'de').toLowerCase();
    return lang.startsWith('en') ? 'en' : 'de';
  }

  // Privatmodus und geblockte Cookies lassen localStorage werfen — der
  // Hinweis soll dann einfach dauerhaft stehen bleiben.
  function isDismissed(key) {
    try {
      return window.localStorage.getItem(STORAGE_PREFIX + key) === '1';
    } catch (e) {
      return false;
    }
  }

  function remember(key) {
    try {
      window.localStorage.setItem(STORAGE_PREFIX + key, '1');
    } catch (e) {
      /* ignorieren */
    }
  }

  function initBanner(banner) {
    if (banner.getAttribute('data-doc-stale-init') === '1') return;
    banner.setAttribute('data-doc-stale-init', '1');

    const key = banner.getAttribute('data-doc-stale');
    if (!key) return;

    if (isDismissed(key)) {
      banner.hidden = true;
      return;
    }

    const btn = document.createElement('button');
    btn.type = 'button';
    btn.className = 'doc-stale__close';
    btn.setAttribute('aria-label', TRANSLATIONS[getLang()].close);
    btn.innerHTML = '&times;';
    btn.addEventListener('click', function () {
      banner.hidden = true;
      remember(key);
    });

    banner.appendChild(btn);
    banner.classList.add('doc-stale--dismissable');
  }

  function initAll() {
    const banners = document.querySelectorAll('[data-doc-stale]');
    for (let i = 0; i < banners.length; i++) initBanner(banners[i]);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initAll);
  } else {
    initAll();
  }
})();
