

    movieContainer.innerHTML = "";

    resultCount.innerHTML = `Showing <span class="text-red-500 font-bold">${movies.length}</span> movie(s)`;

    movies.forEach(movie => {

        const poster =
            movie.Poster !== "N/A"
                ? movie.Poster
                : "placeholder.jpg";

        movieContainer.innerHTML += `

<div
class="group rounded-2xl overflow-hidden bg-slate-900 border border-slate-800 shadow-xl hover:-translate-y-3 hover:shadow-red-500/20 duration-300">

<div class="relative overflow-hidden">

<img

src="${poster}"

alt="${movie.Title}"

class="w-full h-[420px] object-cover group-hover:scale-110 duration-500">

<div class="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 duration-300 flex items-center justify-center">

<button
class="bg-red-500 px-5 py-3 rounded-lg font-semibold">

View Details

</button>

</div>

 <div class="absolute top-3 left-3">



</div> /

<div class="absolute top-3 right-3">

<span class="bg-slate-900/80 px-3 py-1 rounded-full">

${movie.Year}

</span>

</div>

</div>

<div class="p-5">

<h2 class="text-lg font-bold truncate">

${movie.Title}

</h2>

<p class="text-gray-400 mt-2 capitalize">

${movie.Type}

</p>

<button

class="mt-5 w-full bg-slate-800 hover:bg-red-500 rounded-lg py-3 duration-300 font-semibold">

Add Favourite

</button>

</div>

</div>

`;

    });

}
fetchMovies('Rambo')
movieDisplay(currentResults)


