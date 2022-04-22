document.addEventListener("DOMContentLoaded", function() {

    //below is the Fetch for the data://
    const getUrl = ('https://ghibliapi.herokuapp.com/films');
    
    function fetchMovies(){
        fetch(getUrl)
        .then(response => response.json())
        .then(moviesObj => renderMovies(moviesObj))
    }

    let appTitle = document.getElementById('title')
    appTitle.addEventListener("mouseover", function( event ) {
        event.target.style.color = "SeaGreen";
        setTimeout(function() {
            event.target.style.color = "";
            }, 500);
            }, false);

    //DOM Selector & event listener for comment form
        const form = document.getElementById('new-comment')
        form.addEventListener('submit', commentForm)

    //DOM Selector & event listener for email form
        const eForm = document.getElementById('email')
        eForm.addEventListener('submit', emailForm)

    //DOM Selector & event listener for button
        const btn = document.getElementById('button')
        btn.addEventListener('click', renderMovies)

       /* const sepByDiv = document.getElementsByClassName('sepByDiv');

        for(let i=0; i < threeMovies.length; i += 1){
        let makeDivs = document.createElement('div');
        makeDivs.innerHTML = threeMovies[i];
        sepByDiv.appendChild(makeDivs);
        console.log('hi')
        } */


        function renderMovies(moviesObj){
            const threeMovies = moviesObj.sort(() => Math.random() - 0.5).slice(0, 3)
            threeMovies.forEach(movie => render1stMovie(movie))
            }
            
    
    //callbacks below://
        function render1stMovie(movie){
            // render time text seperately & sum function
            //const movieRunTime = document.querySelector('#timetext')
            //movieRunTime.textContent = movie.running_time
            const movieImgTag = document.createElement('img')
            movieImgTag.src = movie.image 
            const movieEngName = document.createElement('h2')
            movieEngName.textContent =movie.title
            const movieDirName = document.createElement('h3')
            movieDirName.textContent = movie.director
            const movieSynopsis = document.createElement('p')
            movieSynopsis.textContent = movie.description
            
            const movieDetailsContainer = document.getElementById('movie-details')
            console.log(movieDetailsContainer)
            movieDetailsContainer.append(movieImgTag)
            movieDetailsContainer.append(movieEngName)
            movieDetailsContainer.append(movieDirName)
            movieDetailsContainer.append(movieSynopsis) 
        }

        function commentForm(e){
            e.preventDefault()

            const newComment = {
            comment: e.target['new-comment'].value
            }
            document.getElementById('new-comment').reset()
        }

        function emailForm(e){
            e.preventDefault()

        const newEmail = {
            emailaddress: e.target.emailaddress.value,
            message: e.target.message.value,
            }
        console.log('email')
        }

    fetchMovies()
})