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
        event.target.style.color = "purple";
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



    //above is the Fetch:end of fetch//
    //below is the rendering function://
        function renderMovies(moviesObj){
            const threeMovies = moviesObj.sort(() => Math.random() - 0.5).slice(0, 3)
            threeMovies.forEach(movie => render1stMovie(movie))
            console.log(threeMovies)
        
    } 
            // const parent = document.getElementById("container");

            // for( { img, h2, h3, p, } of ads) {
            // const wrapper =  document.createElement("div");
            // wrapper.className = "container"; // you can add your class for it
            // const headline = document.createElement("h1");
            // headline.textContent = title;
            // const descrip = document.createElement("p");
            // descrip.textContent = description;    
            // const dates = document.createElement("sub");
            
            

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

        // Render Run Time??
        function renderRunTime(runtime) {
            totalRunTime = threeMovies.reduce(function (sum, movieRunTime) {
            return sum + threeMovies.timetext;
            }, 0)

            const movieRunTime = document.createElement('h2')
            movieRunTime.textContent = runtime.timetext
    
            const runTimeContainer = document.getElementById('run-time')
            runTimeContainer.append(movieRunTime)
        }

        function commentForm(e){
            e.preventDefault()

            const newComment = {
            comment: e.target['new-comment'].value
            }
            console.log('comment')
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