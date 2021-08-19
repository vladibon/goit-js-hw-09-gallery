import galleryItems from '../db/photo';
import refs from './refs';

refs.gallery.innerHTML = makeGalleryItemsMarkup(galleryItems);

function makeGalleryItemsMarkup(items) {
  const hasLazyLoading = 'loading' in HTMLImageElement.prototype;

  return items
    .map(({ preview, original, description }, index) => {
      return `
    <li class="gallery__item">
      <a
        class="gallery__link"
        href="${original}"
      >
        <img
          class="gallery__image lazyload"
          loading="lazy"
          ${hasLazyLoading ? `src="${preview}"` : ''}
          ${!hasLazyLoading ? `data-src="${preview}"` : ''}
          data-source="${original}"
          alt="${description}"
          data-index="${index}"
        />
      </a>
    </li>
    `;
    })
    .join('');
}
