// assets/js/main.js
document.addEventListener('click', (e) => {
  const link = e.target.closest('a.lightbox');
  if (!link) return;

  e.preventDefault();
  const imgSrc = link.getAttribute('href');
  const caption = link.dataset.caption || '';

  const overlay = document.createElement('div');
  overlay.style.cssText = `
    position: fixed; inset: 0; background: rgba(0,0,0,0.8);
    display: grid; place-items: center; z-index: 9999; padding: 1rem;
  `;
  const figure = document.createElement('figure');
  figure.style.cssText = 'max-width: 90vw; max-height: 85vh; color: #fff; text-align: center;';
  const img = document.createElement('img');
  img.src = imgSrc;
  img.alt = caption || 'Full-size source image';
  img.style.cssText = 'max-width: 100%; max-height: 70vh; border-radius: 6px;';
  const figcaption = document.createElement('figcaption');
  figcaption.textContent = caption;
  figcaption.style.cssText = 'margin-top: 0.5rem; font-size: 0.95rem; color: #ddd;';

  const close = document.createElement('button');
  close.textContent = 'Close';
  close.style.cssText = `
    margin-top: 0.75rem; padding: 0.5rem 0.75rem; border: none; border-radius: 6px;
    background: #2f6fb2; color: #fff; cursor: pointer;
  `;
  close.addEventListener('click', () => overlay.remove());
  overlay.addEventListener('click', (ev) => { if (ev.target === overlay) overlay.remove(); });

  figure.append(img, figcaption, close);
  overlay.appendChild(figure);
  document.body.appendChild(overlay);
});

