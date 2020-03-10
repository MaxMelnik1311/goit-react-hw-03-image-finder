import React from 'react';
import T from 'prop-types';
import ImageGalleryItem from './ImageGalleryItem/ImageGalleryItem';
import styles from '../../styles/styles.module.css';

export default function ImageGallery({ images, onOpen }) {
  return (
    <ul className={styles.ImageGallery}>
      {images.map(({ id, webformatURL, largeImageURL }) => (
        <ImageGalleryItem
          key={id}
          webformatURL={webformatURL}
          largeImageURL={largeImageURL}
          onOpen={onOpen}
        />
      ))}
    </ul>
  );
}

ImageGallery.propTypes = {
  images: T.shape.isRequired,
  onOpen: T.func.isRequired,
};
