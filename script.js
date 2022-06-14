const pokemonCount = 151;
var pokedex = {}; // {1 :"name" : "bulbasaur", "img" : url, "type" : ["grass", "poison"], "desc" : "...."}

window.onload = function() {
	getPokemon(1);
}

async function getPokemon(num) {
	let url = "https://pokeapi.co/api/v2/pokemon/" + num.toString();

	let response = await fetch(url);
	let pokemon = await response.json();
	console.log(pokemon)

}