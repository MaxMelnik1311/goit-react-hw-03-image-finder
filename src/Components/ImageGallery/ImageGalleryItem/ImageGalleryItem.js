import React from 'react';
import T from 'prop-types';
import styles from '../../../styles/styles.module.css';

const ImageGalleryItem = ({ id, webformatURL, largeImageURL, onOpen }) => (
  <li key={id}>
    <img
      src={webformatURL}
      className={styles.ImageGalleryItemImage}
      alt="it's by your request!"
      onClick={() => onOpen(largeImageURL)}
    />
  </li>
);

ImageGalleryItem.propTypes = {
  id: T.string.isRequired,
  webformatURL: T.string.isRequired,
  largeImageURL: T.string.isRequired,
  onOpen: T.func.isRequired,
};

export default ImageGalleryItem;
