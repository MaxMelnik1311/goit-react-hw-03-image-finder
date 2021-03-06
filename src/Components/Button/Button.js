import T from 'prop-types';
import React, { Component } from 'react';
import styles from '../../styles/styles.module.css';

export default class Button extends Component {
  state = {};

  propTypes = {
    buttonClick: T.func.isRequired,
  };

  clicked = () => {
    this.props.buttonClick();
  };

  render() {
    return (
      <div className={styles.buttonContainer}>
        <button className={styles.button} type="button" onClick={this.clicked}>
          Load more
        </button>
      </div>
    );
  }
}
