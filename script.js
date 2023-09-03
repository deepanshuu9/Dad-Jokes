const btnEl = document.getElementById('btn');
const jokeEl = document.getElementById('joke');

const apiKey = "zWatQeydP59ADm2SHjZaNw==OqTHIjHoaqqilhzV";

const options = {
    method: 'GET',
    headers: { 'X-Api-Key': apiKey }
}

const apiURL = "https://api.api-ninjas.com/v1/dadjokes?limit=1"

async function getJoke() {
    try {

        jokeEl.innerText = 'Updating...';

        btnEl.disabled = true;
        btnEl.innerText = 'Loading...'

        const response = await fetch(apiURL, options)
        const data = await response.json();

        btnEl.disabled = false;
        btnEl.innerText = 'Tell Me a Joke';

        jokeEl.innerText = data[0].joke;
    } catch (error) {
        jokeEl.innerText = 'Try Again Later';
        console.log(error);
    }
}

btnEl.addEventListener('click', getJoke)