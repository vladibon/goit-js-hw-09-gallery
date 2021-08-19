import refs from './refs';
import { closeLightbox } from './lightbox';
import { setNextImage, setPrevImage } from './carousel';

function addEventListeners() {
  refs.lightbox.addEventListener('click', onLightboxClick);
  window.addEventListener('keydown', onKeydown);
}

function removeEventListeners() {
  refs.lightbox.removeEventListener('click', onLightboxClick);
  window.removeEventListener('keydown', onKeydown);
}

function onLightboxClick(e) {
  switch (e.target) {
    case refs.lightboxOverlay:
    case refs.lightboxCloseBtn:
      closeLightbox();
      break;
    case refs.lightboxImage:
      setNextImage();
      break;
  }
}

function onKeydown(e) {
  switch (e.code) {
    case 'Escape':
      closeLightbox();
      break;
    case 'ArrowRight':
      setNextImage();
      break;
    case 'ArrowLeft':
      setPrevImage();
      break;
  }
}

export { addEventListeners, removeEventListeners };
