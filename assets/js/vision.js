/* Keep links to sections from the former single-page homepage working. */
(function () {
  const chinese = document.body.dataset.lang === 'cn';
  const suffix = chinese ? '-cn' : '';
  if (document.body.dataset.page === 'home') {
    const id = location.hash.slice(1);
    let destination = '';
    if (id.startsWith('paper-') || id === 'pub-papers' || id === 'collaborative-pubs') destination = 'publications';
    if (id === 'conf-talks') destination = 'conference';
    if (id === 'research-projects') destination = 'projects';
    if (destination) location.replace('/zhang/' + destination + suffix + '/' + location.hash);
  }
  document.querySelectorAll('.tl-abstract-trigger').forEach(trigger => {
    trigger.addEventListener('click', () => {
      const content = document.getElementById(trigger.getAttribute('aria-controls'));
      const expanded = trigger.getAttribute('aria-expanded') !== 'true';
      trigger.setAttribute('aria-expanded', String(expanded));
      content.classList.toggle('show', expanded);
      trigger.textContent = chinese ? (expanded ? '隐藏摘要' : '查看摘要') : (expanded ? 'Hide Abstract' : 'View Abstract');
    });
  });
  const modal = document.getElementById('imgModal');
  if (modal) {
    const image = document.getElementById('modalImg');
    document.querySelectorAll('.tl-figure-trigger').forEach(trigger => {
      trigger.addEventListener('click', () => {
        image.src = trigger.dataset.imgSrc;
        image.alt = trigger.querySelector('img').alt;
        modal.showModal();
      });
    });
    modal.querySelector('.img-modal-close').addEventListener('click', () => modal.close());
    modal.addEventListener('click', event => {
      if (event.target === modal) modal.close();
    });
  }
  document.querySelectorAll('.publication-index a').forEach(link => {
    link.addEventListener('click', () => { link.closest('details').open = false; });
  });
})();
