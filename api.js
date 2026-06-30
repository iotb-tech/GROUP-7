// SEARCH FUNCTION AND API CALL

async function fetchMovies(title, page = 1) {
  const url = `https://www.omdbapi.com/?apikey=${API_KEY}&s=${encodeURIComponent(title)}&page=${page}`;
  currentTitle = title;
  currentPage = page;
  try {
    statusDiv.textContent = 'Loading...';
    const response = await fetch(url);
    const data = await response.json();
    console.log('API Response:', data);
    if (data.Response === 'False') {
      movieContainer.innerHTML = '';
      statusDiv.textContent = data.Error;
      return;
    }
    currentMovies = data.Search;
    movieDisplay(data.Search);;
    //renderPagination(data.totalResults);
    statusDiv.textContent = '';
    return data;
  } catch (error) {
    statusDiv.textContent = 'Error fetching movies';
    console.error('Error fetching movies:', error);
  }
}
fetchMovies('Rambo');
