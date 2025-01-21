///////// This module is used for fetching data from an API /////////////
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
const post = {
    userId: 1,  
    id: 1,
    title: 'delectus aut autem',
    body: 'quis ut nam facilis et officia qui',
}

async function createPost() {
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



