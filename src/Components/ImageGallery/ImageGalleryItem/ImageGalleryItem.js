import React, { Component } from 'react';
import T from 'prop-types';
import Modal from './Modal';
import styles from '../../../styles/styles.module.css';

export default class ImageGalleryItem extends Component {
  state = {
    isModalOpen: false,
  };

  propTypes = {
    webformatURL: T.string.isRequired,
    largeImageURL: T.string.isRequired,
  };

  toggleModal = () => {
    this.setState(state => ({ isModalOpen: !state.isModalOpen }));
  };

  render() {
    const { webformatURL, largeImageURL } = this.props;
    const { isModalOpen } = this.state;
    return (
      <>
        <img
          onClick={this.toggleModal}
          src={webformatURL}
          className={styles.ImageGalleryItemImage}
          alt="it's by your request!"
        />
        {isModalOpen && (
          <Modal onClose={this.toggleModal} largeImageURL={largeImageURL} />
        )}
      </>
    );
  }
}
