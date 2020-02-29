const fetchImages = (
  query = '',
  pageNumber = 1,
  key = '14500758-0aeae17d8afbdfeb9b4b42edb',
) => {
  return fetch(
    `https://pixabay.com/api/?q=${query}&page=${pageNumber}&key=${key}&image_type=photo&orientation=horizontal&per_page=15`,
  )
    .then(res => res.json())
    .then(data => data.hits);
};

export default fetchImages;
