(function () {
  const TRANSLATIONS = {
    de: {
      playLabel: 'Video laden',
      hintBefore: 'Beim Abspielen wird eine Verbindung zu YouTube (Google) aufgebaut. Dabei werden Daten wie deine IP-Adresse an Google übertragen. Details in der',
      privacyText: 'Datenschutzerklärung',
      hintAfter: '.',
      loadButton: 'Video laden',
      defaultAlt: 'Video-Vorschaubild',
      iframeTitle: 'YouTube-Video',
    },
    en: {
      playLabel: 'Load video',
      hintBefore: 'Playing the video will connect to YouTube (Google). Personal data such as your IP address will be transmitted to Google. Details in our',
      privacyText: 'privacy policy',
      hintAfter: '.',
      loadButton: 'Load video',
      defaultAlt: 'Video preview',
      iframeTitle: 'YouTube video',
    },
  };

  const PRIVACY_URL = 'https://tw-utils.net/datenschutz/#datenschutz';
  const PLAY_SVG = '<svg viewBox="0 0 24 24" width="48" height="48" aria-hidden="true"><path fill="currentColor" d="M8 5v14l11-7z"/></svg>';

  function getLang() {
    const lang = (document.documentElement.lang || 'de').toLowerCase();
    return lang.startsWith('en') ? 'en' : 'de';
  }

  function escapeHtml(str) {
    return String(str).replace(/[&<>"']/g, function (c) {
      return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c];
    });
  }

  function renderContainer(container) {
    if (container.children.length > 0) return;
    const t = TRANSLATIONS[getLang()];
    const thumb = container.getAttribute('data-thumb') || '';
    const alt = container.getAttribute('data-alt') || t.defaultAlt;

    container.innerHTML =
      '<button type="button" class="yt-consent__preview" aria-label="' + escapeHtml(t.playLabel) + '">' +
        '<img src="' + escapeHtml(thumb) + '" alt="' + escapeHtml(alt) + '" loading="lazy">' +
        '<span class="yt-consent__play" aria-hidden="true">' + PLAY_SVG + '</span>' +
      '</button>' +
      '<div class="yt-consent__confirm" hidden>' +
        '<p>' + escapeHtml(t.hintBefore) + ' ' +
          '<a href="' + PRIVACY_URL + '" target="_blank" rel="noopener">' + escapeHtml(t.privacyText) + '</a>' +
          escapeHtml(t.hintAfter) +
        '</p>' +
        '<button type="button" class="yt-consent__accept">' + escapeHtml(t.loadButton) + '</button>' +
      '</div>';
  }

  function loadVideo(container) {
    const videoId = container.getAttribute('data-video-id');
    if (!videoId) return;
    const t = TRANSLATIONS[getLang()];
    const iframe = document.createElement('iframe');
    iframe.src = 'https://www.youtube-nocookie.com/embed/' + encodeURIComponent(videoId) + '?autoplay=1&rel=0';
    iframe.setAttribute('allow', 'autoplay; encrypted-media; fullscreen');
    iframe.setAttribute('allowfullscreen', '');
    iframe.setAttribute('loading', 'lazy');
    iframe.setAttribute('title', t.iframeTitle);
    container.classList.add('yt-consent--loaded');
    container.innerHTML = '';
    container.appendChild(iframe);
  }

  function initContainer(container) {
    if (container.getAttribute('data-yt-init') === '1') return;
    container.setAttribute('data-yt-init', '1');

    renderContainer(container);

    const preview = container.querySelector('.yt-consent__preview');
    const confirm = container.querySelector('.yt-consent__confirm');
    const acceptBtn = container.querySelector('.yt-consent__accept');

    if (preview) {
      preview.addEventListener('click', function () {
        if (confirm) confirm.hidden = false;
        if (acceptBtn) acceptBtn.focus();
      });
    }
    if (acceptBtn) {
      acceptBtn.addEventListener('click', function (e) {
        e.stopPropagation();
        loadVideo(container);
      });
    }
  }

  function initAll() {
    const containers = document.querySelectorAll('.yt-consent');
    for (let i = 0; i < containers.length; i++) initContainer(containers[i]);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initAll);
  } else {
    initAll();
  }
})();
