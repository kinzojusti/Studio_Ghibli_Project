document.addEventListener("DOMContentLoaded", function() {

    //below is the Fetch for the data://
    const getUrl = ('https://ghibliapi.herokuapp.com/films');
    
    function fetchMovies(){
        fetch(getUrl)
        .then(response => response.json())
        .then(moviesObj => renderMovies(moviesObj))
    }
    //above is the Fetch:end of fetch//
    //below is the rendering function://
    function renderMovies(moviesObj){
        //moviesObj.forEach(movie => render1stMovie(movie))
        const threeMovies = moviesObj.sort(() => Math.random() - 0.5).slice(0, 3)
        threeMovies.forEach(movie => render1stMovie(movie))
        console.log(threeMovies)
        
    } 


    //callbacks below://
        function render1stMovie(movie){
            const movieRunTime = document.querySelector('#timetext')
            movieRunTime.textContent = movie.running_time
            const movieImgTag = document.createElement('img')
            movieImgTag.src = movie.image 
            const movieEngName = document.createElement('h2')
            movieEngName.textContent =movie.title
            const movieJapName = document.createElement('h2')
            movieJapName.textContent = movie.orginal_title 
            const movieDirName = document.createElement('h3')
            movieDirName.textContent = movie.director
            const movieSynopsis = document.createElement('p')
            movieSynopsis.textContent = movie.description
            
            const movieDetailsContainer = document.getElementById('movie-details')
            console.log(movieDetailsContainer)
            //append to container
            //container.append.element
            movieDetailsContainer.append(movieImgTag)
            movieDetailsContainer.append(movieEngName)
            movieDetailsContainer.append(movieJapName)
            movieDetailsContainer.append(movieDirName)
            movieDetailsContainer.append(movieSynopsis) 


        }

    fetchMovies()
})