import galleryItems from '../db/photo';
import refs from './refs';
import setLightboxImageSrc from './lightbox-image';

function setNextImage() {
  const currentImageIdx = Number(refs.lightboxImage.dataset?.index);
  const nextImageIdx =
    currentImageIdx + 1 < refs.gallery.childElementCount
      ? currentImageIdx + 1
      : 0;

  setLightboxImageSrc(
    galleryItems[nextImageIdx].original,
    galleryItems[nextImageIdx].description,
    nextImageIdx,
  );
}

function setPrevImage() {
  const currentImageIdx = Number(refs.lightboxImage.dataset?.index);
  const prevImageIdx =
    currentImageIdx - 1 >= 0
      ? currentImageIdx - 1
      : refs.gallery.childElementCount - 1;

  setLightboxImageSrc(
    galleryItems[prevImageIdx].original,
    galleryItems[prevImageIdx].description,
    prevImageIdx,
  );
}

export { setNextImage, setPrevImage };
