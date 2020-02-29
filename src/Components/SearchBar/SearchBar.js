import React, { Component } from 'react';
import styles from '../../styles/styles.module.css';

export default class SearchBar extends Component {
  state = {
    query: '',
  };

  handleChange = e => {
    this.setState({
      query: e.target.value,
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.onSearch(this.state.query);
  };

  render() {
    return (
      <header className={styles.SearchBar}>
        <form className={styles.SearchForm} onSubmit={this.handleSubmit}>
          <button type="submit" className={styles.SearchFormButton}>
            <span className={styles.SearchFormButtonLabel}>Search</span>
          </button>
          <input
            className={styles.SearchFormInput}
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search photos and images"
            onChange={this.handleChange}
          />
        </form>
      </header>
    );
  }
}
