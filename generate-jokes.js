import { My_API_Key } from './config.js';

var outputDiv = document.querySelector('#output');
var genButton = document.querySelector('#generate');

function getJokes() {
fetch("https://joke3.p.rapidapi.com/v1/joke?nsfw=true", {
	"method": "GET",
	"headers": {
		"x-rapidapi-key": "My_API_Key",
		"x-rapidapi-host": "joke3.p.rapidapi.com"
	}
})
.then(response => response.json())
.then(response => {
	var outputText = response.content;
	outputDiv.innerText = outputText;
	console.log ("content", response);
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