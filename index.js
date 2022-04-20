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
            moviesObj.forEach(movie => render1stMovie(movie))
            // moviesObj.forEach(movie => render2ndMovie(movie))
            // moviesObj.forEach(movie => render3rdMovie(movie))
        } 


        
        //callbacks below://

            function render1stMovie(movie){
                console.log(movie)
                const movieRunTime = document.querySelector('#timetext')
                movieRunTime.textContent = movie.running_time
                const movieImgTag = document.querySelector('.poster-image')
                movieImgTag.src = movie.image 
                const movieEngName = document.querySelector('#eng-name')
                movieEngName.textContent =movie.title
                const movieJapName = document.querySelector('#jp-name')
                movieJapName.textContent = movie.orginal_title 
                const movieDirName = document.querySelector('#director')
                movieDirName.textContent = movie.director
                const movieSynopsis = document.querySelector('#synopsis')
                movieSynopsis.textContent = movie.description
                
                
            }
        fetchMovies()
    })