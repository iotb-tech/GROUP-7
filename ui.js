//CREATE MOVIE DISPLAY

function movieDisplay(movies) {

  movieContainer.innerHTML = '';

  movies.forEach(movie => {
    const poster = movie.Poster !== 'N/A' ? movie.Poster : 'placeholder.jpg';
    movieContainer.innerHTML += `
      <div class="movie">
        <div>
        <img src="${poster}" alt="${movie.Title}">
        <h3>${movie.Title}</h3>
        <p>${movie.Year}</p>
        </div>
        <div>Add Favorite</div>
      </div>
    `;
  });
}
fetchMovies('batman')
movieDisplay(currentResults);