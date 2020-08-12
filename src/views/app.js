// Initial Values
const log = console.log;

// Selecting elements from the DOM
const moviesContainer = document.querySelector('#movies-container');

function createImageContainer(imageUrl, id) {
    const tempDiv = document.createElement('div');
    tempDiv.setAttribute('class', 'imageContainer');
    tempDiv.setAttribute('data-id', id);

    const movieElement = `
        <img src="${imageUrl}" alt="" data-movie-id="${id}">
    `;
    tempDiv.innerHTML = movieElement;

    return tempDiv;
}

function handleGeneralError(error) {
    log('Error: ', error);
    //document.getElementById('message').value ='Click on Login to secure the jwt token needed for accessing the APIs';
    //alert(error.message || 'Internal Server');
}

function createDescTemplate(data) {
    const content = this.content;
    content.innerHTML = '<p id="content-close">X</p>';
    content.innerHTML = `<p id="content-close">X</p><br><p id="movie-overview">${data.overview}</p>`;
    
}

function createSectionHeader(title) {
    const header = document.createElement('h2');
    header.innerHTML = title;

    return header;
}


function renderMovies(data) {
    const moviesBlock = generateMoviesBlock(data);
    const header = createSectionHeader(this.title);
    moviesBlock.insertBefore(header, moviesBlock.firstChild);
    moviesContainer.appendChild(moviesBlock);
}

function generateMoviesBlock(data) {
    //let movieJSON = JSON.parse(data.data);
    let movies = data.data.results;
    const section = document.createElement('section');
    section.setAttribute('class', 'section');

    for (let i = 0; i < movies.length; i++) {
        const { poster_path, id } = movies[i];

        if (poster_path) {
            const imageUrl = MOVIE_DB_IMAGE_ENDPOINT + poster_path;
    
            const imageContainer = createImageContainer(imageUrl, id);
            section.appendChild(imageContainer);
        }
    }

    const movieSectionAndContent = createMovieContainer(section);
    return movieSectionAndContent;
}



// Inserting section before content element
function createMovieContainer(section) {
    const movieElement = document.createElement('div');
    movieElement.setAttribute('class', 'movie');

    const template = `
        <div class="content">
            <p id="content-close">X</p>
        </div>
    `;

    movieElement.innerHTML = template;
    movieElement.insertBefore(section, movieElement.firstChild);
    return movieElement;
}


function saveJWTToken(res) {
    console.log('here')
    console.log(res);
}

document.getElementById('login').onclick = function(event){
    loginToGetJWTToken();
}

document.getElementById('logOff').onclick = function(event){
    logOffDeleteJWTToken();
}
// Event Delegation
document.onclick = function (event) {
    log('Event: ', event);
    const { tagName, id } = event.target;
    if (tagName.toLowerCase() === 'img') {
        const movieId = event.target.dataset.movieId;
        const section = event.target.parentElement.parentElement;
        const content = section.nextElementSibling;
        content.classList.add('content-display');
        getMoviesByMovieId(movieId, content);
    }

    if (id === 'content-close') {
        const content = event.target.parentElement;
        content.classList.remove('content-display');
    }
}
/*TODO - Securely procure jwt token by logging into the application
loginToGetJWTToken()*/

// Get the movies
getComedyMovies();
getAnimatedMovies();
getRomanceMovies();
getHorrorMovies();
getActionMovies();


