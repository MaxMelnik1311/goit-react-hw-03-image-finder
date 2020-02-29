import React from 'react';
import T from 'prop-types';
import ImageGalleryItem from './ImageGalleryItem/ImageGalleryItem';
import styles from '../../styles/styles.module.css';

export default function ImageGallery({ images }) {
  return (
    <ul className={styles.ImageGallery}>
      {images.map(({ id, webformatURL, largeImageURL }) => (
        <li key={id}>
          <ImageGalleryItem
            webformatURL={webformatURL}
            largeImageURL={largeImageURL}
          />
        </li>
      ))}
    </ul>
  );
}

ImageGallery.propTypes = {
  images: T.shape.isRequired,
};
