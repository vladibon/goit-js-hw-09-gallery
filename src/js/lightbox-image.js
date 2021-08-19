import refs from './refs';

export default function setLightboxImageSrc(src, alt, idx) {
  refs.lightboxImage.src = src;
  refs.lightboxImage.alt = alt;
  refs.lightboxImage.dataset.index = idx;
}
