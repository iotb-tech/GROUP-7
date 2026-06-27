//GRAB ELEMENTS FROM HTML

const API_KEY = 'd8fcbd28'; 
const searchForm = document.getElementById('searchForm');
const searchInput = document.getElementById('searchInput');
const searchButton = document.getElementById('searchButton');
const statusDiv = document.getElementById('status');
const favoriteContainer = document.getElementById('favoriteContainer'); 
const movieContainer = document.getElementById('movieContainer');
const paginationContainer = document.getElementById('paginationContainer');  
  
//OTHER VARIABLES NEEDED
let currentPage = 1;
let currentTitle = '';
let currentResults = [];
let debounceTimer;

// SEARCH FORM
searchForm.addEventListener('submit', (event) => {
  event.preventDefault();
  const title = searchInput.value.trim();
  if (!title) return;
  fetchMovies(title);
});

// FAVORITES
let favorites = [] //localstorage 
const savedFavorites = localStorage.getItem('favorites');
if (savedFavorites) {
  favorites = JSON.parse(savedFavorites);
  renderFavorites();
}