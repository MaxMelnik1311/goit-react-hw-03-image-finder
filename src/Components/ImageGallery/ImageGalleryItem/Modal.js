import React, { Component } from 'react';
import T from 'prop-types';
import styles from '../../../styles/styles.module.css';

export default class Modal extends Component {
  propTypes = {
    onClose: T.func.isRequired,
    largeImageURL: T.string.isRequired,
  };

  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyDown);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyDown);
  }

  handleKeyDown = e => {
    if (e.code === 'Escape') {
      this.props.onClose();
    }
  };

  handleBackDropClick = e => {
    if (e.target === e.currentTarget) {
      this.props.onClose();
    }
  };

  render() {
    const { largeImageURL } = this.props;
    return (
      <div
        className={styles.Overlay}
        onClick={this.handleBackDropClick}
        role="presentation"
      >
        <div className={styles.Modal}>
          <img src={largeImageURL} alt="" />
        </div>
      </div>
    );
  }
}
