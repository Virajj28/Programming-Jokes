<<<<<<< HEAD:js/generate-jokes.js


=======
>>>>>>> 28cd58440c5fdcdb63ecf1a13f7d31a94c25fa1a:generate-jokes.js
var outputDiv = document.querySelector('#output');
var genButton = document.querySelector('#generate');

var apiUrl = "https://v2.jokeapi.dev/joke/Programming?blacklistFlags=nsfw&type=single";

function getJokes() {
<<<<<<< HEAD:js/generate-jokes.js
fetch("https://joke3.p.rapidapi.com/v1/joke?nsfw=false", {
	"method": "GET",
	"headers": {
		"x-rapidapi-key": "",
		"x-rapidapi-host": "joke3.p.rapidapi.com"
	}
})
=======
fetch(apiUrl)

>>>>>>> 28cd58440c5fdcdb63ecf1a13f7d31a94c25fa1a:generate-jokes.js
.then(response => response.json())
.then(response => {
	var outputText = response.joke;
	outputDiv.innerText = outputText;
	console.log ("joke", response);
})
.catch(err => {
	console.error(err);
});
}

function clickHandler() {
	getJokes();
}

getJokes();

genButton.addEventListener("click", clickHandler)