const url = 'https://www.omdbapi.com/?i=tt3896198&apikey=81a74c01';
const options = {
    method: 'GET'
};

// Create an async function to use await
async function fetchMovieData() {
    try {
        const response = await fetch(url, options);
        const result = await response.json(); // Use `.json()` if expecting JSON response
        console.log(result);

    } catch (error) {
        console.error(error);
    }
}

// Call the async function
fetchMovieData();
