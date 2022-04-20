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
            moviesObj.forEach(movie => render2ndMovie(movie))
            moviesObj.forEach(movie => render3rdMovie(movie))
        } 


        
        //callbacks below://

            function render1stMovie(movie){
                console.log(movie)
                const movieImgTag = document.querySelector('.poster-image')
                movieImgTag.src = movie.image 
                const englishTitle = document.querySelector('.engName')
                englishTitle.textContent = movie.title
                console.log(englishTitle, "someword")
                // const movieLi = document.createElement('#poster-display')
                // movieLi.textContent = movie.name
                // const movieImg = document.createElement('img')
                // movieImg.src = movie.image
                // const movieTitle = document.createElement('p')
                // movieTitle.textContent = movie.title
                // movieLi.append()
                // movieImg.append()
                // movieTitle.append()
                
            }
            
            function render2ndMovie(movie){
                console.log(movie)
                const movieImgTag2= document.querySelector('.poster-image2')
                movieImgTag2.src = movie.image
                
                // const movieLi = document.createElement('#poster-display')
                // movieLi.textContent = movie.name
                // const movieImg = document.createElement('img')
                // movieImg.src = movie.image
                // const movieTitle = document.createElement('p')
                // movieTitle.textContent = movie.title
                // movieLi.append()
                // movieImg.append()
                // movieTitle.append()
                
            }
            
            function render3rdMovie(movie){
                console.log(movie)
                const movieImgTag3= document.querySelector('.poster-image3')
                movieImgTag3.src = movie.image
                
                // const movieLi = document.createElement('#poster-display')
                // movieLi.textContent = movie.name
                // const movieImg = document.createElement('img')
                // movieImg.src = movie.image
                // const movieTitle = document.createElement('p')
                // movieTitle.textContent = movie.title
                // movieLi.append()
                // movieImg.append()
                // movieTitle.append()
                
            }
        fetchMovies()
    })