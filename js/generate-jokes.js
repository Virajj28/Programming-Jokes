

var outputDiv = document.querySelector('#output');
var genButton = document.querySelector('#generate');

function getJokes() {
fetch("https://joke3.p.rapidapi.com/v1/joke?nsfw=false", {
	"method": "GET",
	"headers": {
		"x-rapidapi-key": "",
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