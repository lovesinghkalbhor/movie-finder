let apikey = 'api_key=4db7be509f5ca744aa8c5198f199c013';
let base = "https://api.themoviedb.org/3";


var search = document.getElementById('search')
let url;
let apiurl = base + '/discover/movie?sort_by=popularity.desc&' + apikey;
url = apiurl;
search.addEventListener('click', (e) => {
  e.preventDefault();
  let searchvalue = document.getElementById('searchplace').value;

  url = base + '/search/movie?' + apikey + '&query=' + searchvalue;
  console.log(url);
  forurl(url);

})

forurl(url)
// https://api.themoviedb.org/3/search/movie?api_key=4db7be509f5ca744aa8c5198f199c013&query=red
function forurl(url){
fetch(url, {
  method: "GET"
})
  .then(response => response.json())
  .then(err => {

    showmovie(err.results)
  });
}


function showmovie(data) {
  let s = '';
  data.forEach(movie => {

    s += `
    <div class="card-deck d-flex justify-content-around d-flex flex-wrap">
      <div class="card">
        <img class="card-img-top" src="https://image.tmdb.org/t/p/w500${movie.poster_path}" alt="Card image cap">

        <!-- for displaying the imformation after hovering -->
        <div class="row">
          <div class="card-body">
            <h6 class="card-title">Release date:<br> ${movie.release_date}</h6>
            <p class="card-text"></p>
            <a href="https://www.google.com/search?q=${movie.original_title}" class="btn btn-primary" target="_blank">Full information</a>
          </div>
        </div>

        <!-- full body of the card -->
        <div class="card-body d-flex flex-column bd-highlight mb-3 d-flex align-content-center flex-wrap">
        <span class="card-text" >Rating: ${movie.vote_average}</span>
          <h6 class="card-title">${movie.original_title}</h6>
          <a href="https://www.youtube.com/search?q=${movie.original_title}"target="_blank">Watch Trailer</a>
          </div>
      </div>
    </div>

  `
  });
  let d = document.getElementById('love');
  d.innerHTML = s;
}