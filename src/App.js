import React, { Component } from 'react';
import SearchBar from './Components/SearchBar/SearchBar';
import ImageGallery from './Components/ImageGallery/ImageGallery';
import Button from './Components/Button/Button';
import Loading from './Components/Loading/Loading';
import fetchImages from './API/images-api';

export default class App extends Component {
  state = {
    images: [],
    pageNumber: 1,
    query: '',
    buttonAvailable: false,
    isLoading: false,
  };

  componentDidUpdate(prevProps, prevState) {
    const { query, images } = this.state;

    const prevQuery = prevState.query;
    const nextQuery = query;

    const prevImages = prevState.images;
    const nextImages = images;

    if (prevQuery !== nextQuery) {
      this.fetchImagesList();
    }

    if (prevImages !== nextImages) {
      window.scrollTo({
        top: document.documentElement.scrollHeight,
        behavior: 'smooth',
      });
    }
  }

  onSearch = query => {
    this.setState({ images: [], pageNumber: 1, query, buttonAvailable: false });
  };

  fetchImagesList = () => {
    const { query, pageNumber } = this.state;
    this.setState({ isLoading: true });
    fetchImages(query, pageNumber).then(images => {
      this.setState(state => ({
        pageNumber: state.pageNumber + 1,
        images: [...state.images, ...images],
        isLoading: false,
        buttonAvailable: true,
      }));
    });
  };

  render() {
    const { images, isLoading, buttonAvailable } = this.state;
    return (
      <>
        <SearchBar onSearch={this.onSearch} />
        <ImageGallery images={images} />
        {isLoading && <Loading />}
        {buttonAvailable && <Button buttonClick={this.fetchImagesList} />}
      </>
    );
  }
}
