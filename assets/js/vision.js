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
  document.querySelectorAll('.publication-index a').forEach(link => {
    link.addEventListener('click', () => { link.closest('details').open = false; });
  });
})();
