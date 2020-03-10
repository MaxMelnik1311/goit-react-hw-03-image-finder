import React, { Component } from 'react';
import SearchBar from './components/SearchBar/SearchBar';
import ImageGallery from './components/ImageGallery/ImageGallery';
import Button from './components/Button/Button';
import Loading from './components/Loading/Loading';
import Modal from './components/Modal/Modal';
import fetchImages from './API/images-api';

export default class App extends Component {
  state = {
    images: [],
    pageNumber: 1,
    query: '',
    buttonAvailable: false,
    isLoading: false,
    error: null,
    largeImageUrl: null,
    openModal: false,
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

    fetchImages(query, pageNumber)
      .then(images =>
        this.setState(state => ({
          pageNumber: state.pageNumber + 1,
          images: [...state.images, ...images],
          buttonAvailable: true,
        })),
      )
      .catch(error => this.setState({ error }))
      .finally(() => this.setState({ isLoading: false }));
  };

  setLargeImage = largeImageUrl => {
    this.setState({ largeImageUrl });
    this.toggleModal();
  };

  toggleModal = () => {
    this.setState(state => ({ openModal: !state.openModal }));
  };

  render() {
    const {
      images,
      isLoading,
      buttonAvailable,
      openModal,
      error,
      largeImageUrl,
    } = this.state;
    return (
      <>
        <SearchBar onSearch={this.onSearch} />
        {error && <p>Error catched: {error.message} </p>}
        <ImageGallery images={images} onOpen={this.setLargeImage} />
        {openModal && (
          <Modal largeImageUrl={largeImageUrl} onClose={this.toggleModal} />
        )}
        {isLoading && <Loading />}
        {buttonAvailable && <Button buttonClick={this.fetchImagesList} />}
      </>
    );
  }
}
