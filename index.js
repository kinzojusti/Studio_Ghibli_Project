console.log("Hello World!")

    const localHost ='https://localhost:3000';
    
    const getData = () => {
    fetch('https://localHost' + '/films')
        .then(resp => resp.json())
        .then(arrOfMovies => displayArrOfMovies(arrOfMovies))
    } 
    
