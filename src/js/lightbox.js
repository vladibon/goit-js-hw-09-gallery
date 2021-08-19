import refs from './refs';
import setLightboxImageSrc from './lightbox-image';
import { addEventListeners, removeEventListeners } from './lightbox-listeners';

function openLightbox(e) {
  if (!e.target.classList.contains('gallery__image')) return;

  e.preventDefault();

  setLightboxImageSrc(
    e.target.dataset?.source,
    e.target.alt,
    e.target.dataset?.index,
  );
  switchLightbox();
  addEventListeners();
}

function closeLightbox() {
  switchLightbox();
  setLightboxImageSrc('', '', '');
  removeEventListeners();
}

function switchLightbox() {
  refs.lightbox.classList.toggle('is-open');
  document.body.classList.toggle('lightbox-open');
}

export { openLightbox, closeLightbox };
