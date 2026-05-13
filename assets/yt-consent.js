(function () {
  function loadVideo(container) {
    var videoId = container.getAttribute('data-video-id');
    if (!videoId) return;
    var iframe = document.createElement('iframe');
    iframe.src = 'https://www.youtube-nocookie.com/embed/' + encodeURIComponent(videoId) + '?autoplay=1&rel=0';
    iframe.setAttribute('allow', 'autoplay; encrypted-media; fullscreen');
    iframe.setAttribute('allowfullscreen', '');
    iframe.setAttribute('loading', 'lazy');
    iframe.setAttribute('title', 'YouTube video');
    container.classList.add('yt-consent--loaded');
    container.innerHTML = '';
    container.appendChild(iframe);
  }

  function initContainer(container) {
    if (container.getAttribute('data-yt-init') === '1') return;
    container.setAttribute('data-yt-init', '1');

    var preview = container.querySelector('.yt-consent__preview');
    var confirm = container.querySelector('.yt-consent__confirm');
    var acceptBtn = container.querySelector('.yt-consent__accept');

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
    var containers = document.querySelectorAll('[data-yt-consent]');
    for (var i = 0; i < containers.length; i++) initContainer(containers[i]);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initAll);
  } else {
    initAll();
  }
})();
