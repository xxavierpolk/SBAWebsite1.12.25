///////// This module is used for fetching data from API's /////////////


// This function fetches the games from the API
 async function fetchGames() {
    try {
        const response = await fetch(`https://pokeapi.co/api/v2/version-group/`);
        const data = await response.json();
        console.log(data);
        return data;
        
    } catch (error) {
        console.error('Error fetching data:', error);
        alert('An error occurred while fetching data.');
    }
}


// Fetching Pokemon for Search Bar functionality
// DOES NOT FUNCTION PROPERLY for some reason but the idea is here. What's in place works.
 async function fetchPokemon() {
    try {
        
        const pokemonName = document.getElementById("pokemonName").value.toLowerCase();
        // const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/blaziken`);

        const data = await response.json();
        const pokemonSprite = data.sprites.front_default;

      
        const imgElement = document.getElementById('pokemonSprite');
        imgElement.src = pokemonSprite;
        imgElement.style.display = 'block'; 

        console.log(data);
        return data;


        
    } catch (error) {
        console.error('Error fetching data:' + error);
        alert('An error occurred while fetching image data.');
    }
}


// MAKING DAT POST REQUEST



const form = document.getElementById('createPost');

const screenName = document.getElementById('screenName');
const game = document.getElementById('game');  
const review = document.getElementById('review');

form.addEventListener('submit', createPost);


// successful post request will show in the console under network
async function createPost() {
    const post = {
        userId: screenName.value,  
        id: 17,
        title: game.value,
        body: review.value,
    };

    try {
        const OPTIONS = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'  
            },
            body: JSON.stringify(post),
        };

        const response = await fetch('https://jsonplaceholder.typicode.com/posts', OPTIONS); 
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.error('Error fetching data:' + error);
    }    
        
}









export { fetchGames, fetchPokemon, createPost };



