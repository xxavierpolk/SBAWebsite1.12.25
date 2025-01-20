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


fetchGames();