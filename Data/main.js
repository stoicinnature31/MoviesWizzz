const url = 'https://imdb8.p.rapidapi.com/auto-complete?q=game';
const options = {
    method: 'GET',
    headers: {
        'x-rapidapi-key': '60475af76bmsh508a762bd151fc4p130093jsn58d1cc8f56ef',
        'x-rapidapi-host': 'imdb8.p.rapidapi.com'
    }
};

// Create an async function to use await
async function fetchMovieData() {
    try {
        const response = await fetch(url, options);
        const result = await response.json(); // Use `.json()` if expecting JSON response
        // console.log(result);
		const list = result.d;
		list.map((item) => {
			console.log(item);
			const  name = item.l;
			const  poster = item.i.imageUrl;
			const movie = `<li><img src="${poster}"/><h2>${name}</h2></li>`
			document.querySelector('.movies').innerHTML += movie;
		})
    } catch (error) {
        console.error(error);
    }
}

// Call the async function
fetchMovieData();
