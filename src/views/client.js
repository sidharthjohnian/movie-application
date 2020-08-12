// Initial Values. Just for demo purpose but I know this can be kept at a more secure place
const MOVIE_DB_API = 'd8bf019d0cca372bd804735f172f67e8';
const MOVIE_DB_ENDPOINT = 'https://api.themoviedb.org';
const MOVIE_DB_IMAGE_ENDPOINT = 'https://image.tmdb.org/t/p/w500';
const DEFAULT_POST_IMAGE = 'https://via.placeholder.com/150';

let bearer = localStorage.getItem('token');
function requestMovies(url, onComplete, onError) {
    fetch(url, {
        headers: {
            'Authorization' : 'jwt ' + bearer
        }
    })  
        .then((res) => res.json())
        .then(onComplete)
        .catch(onError);
}

function loginToGetJWTToken() {
    const url = generateAPIUrl(`login/:testuser/:testpassword`);
    fetch(url,{
        method:'POST'
    })
    .then((res) => res.json())
    .then(function(res){
        console.log(res);
        if(res.success == 'true'){
            console.log('here');
            localStorage.setItem('token',res.token);
            setCookie('token', res.token)
            //Reload the page with the frshly acquired token
            location.reload();
        }
        else{
            console.log('error')
        }
    });
    
}

function logOffDeleteJWTToken() {
    //Remove the token at the time of logoff
    localStorage.removeItem('token');
    //Reload the page
    location.reload();
}

function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    var expires = "expires="+ d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
    console.log('here in cookie');
}

function getCookie(cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for(var i = 0; i <ca.length; i++) {
      var c = ca[i];
      while (c.charAt(0) == ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }
    return "";
}




function generateMovieDBUrl(path) {
    const url = `${MOVIE_DB_ENDPOINT}/3${path}?api_key=${MOVIE_DB_API}`;
    console.log(url);
    return url;
}

function generateAPIUrl(path) {
    const url = `http://localhost:8081/${path}`;
    console.log(url);
    return url;
}

function generateMovieByGenreDBUrl(path) {
    const url = `${MOVIE_DB_ENDPOINT}/3/discover/movie?api_key=${MOVIE_DB_API}&${path}`;
    console.log(url);
    return url;
}

function getComedyMovies() {
    //const url = generateMovieByGenreDBUrl(`with_genres=35`);
    const url = generateAPIUrl(`getComedyMovies`);
    const render = renderMovies.bind({ title: 'Comedy Movies' })
    requestMovies(url, render, handleGeneralError);
}

function getActionMovies() {
    //const url = generateMovieByGenreDBUrl(`with_genres=28`);
    const url = generateAPIUrl(`getActionMovies`);
    const render = renderMovies.bind({ title: 'Action Movies' })
    requestMovies(url, render, handleGeneralError);
}

function getAnimatedMovies() {
    //const url = generateMovieByGenreDBUrl(`with_genres=16`);
    const url = generateAPIUrl(`getAnimatedMovies`);
    const render = renderMovies.bind({ title: 'Animated Movies' })
    requestMovies(url, render, handleGeneralError);
}

function getHorrorMovies() {
    //const url = generateMovieByGenreDBUrl(`with_genres=27`);
    const url = generateAPIUrl(`getHorrorMovies`);
    const render = renderMovies.bind({ title: 'Horror Movies' })
    requestMovies(url, render, handleGeneralError);
}

function getRomanceMovies() {
    //const url = generateMovieByGenreDBUrl(`with_genres=10749`);
    const url = generateAPIUrl(`getRomanceMovies`);
    const render = renderMovies.bind({ title: 'Romance Movies' })
    requestMovies(url, render, handleGeneralError);
}

function getMoviesByMovieId(movieId, content) {
    const url = generateMovieDBUrl(`/movie/${movieId}`);
    const render = createDescTemplate.bind({ content });
    requestMovies(url, render, handleGeneralError);
}