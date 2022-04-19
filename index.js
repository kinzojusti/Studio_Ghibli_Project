// console.log("Hello World!")
    // const localHost ='https://localhost:3000';
    // const getData = () => {
    // fetch('https://localHost' + '/films')
    //     .then(resp => resp.json())
    //     .then(arrOfMovies => displayArrOfMovies(arrOfMovies))
    // } 


    document.addEventListener("DOMContentLoaded", function() {

        const getUrl = ('https://ghibliapi.herokuapp.com/films');
        
        function fetchMovies(){
            fetch(getUrl)
            .then(response => response.json())
            .then(moviesObj => renderMovies(moviesObj))
        }

            //rendering function:
        function renderMovies(moviesObj){
            // console.log(moviesArray)
            // const movieList = document.getElementById('-list')
            moviesObj.forEach(movie => renderOneMovie(movie))} 

            function renderOneMovie(){
                const movieLi = document.createElement('#poster-display')
                movieLi.textContent = movie.name
                const movieImg = document.createElement('img')
                movieImg.src = movie.image
                const movieTitle = document.createElement('p')
                movieTitle.textContent = movie.title
                movieLi.append()
                movieImg.append()
                movieTitle.append()
                
            }
        })
        fetchMovies();
