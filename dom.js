////////// This module is to handle DOM manipulation //////////



// function seachGames() {
//     const gameSearch = document.getElementById('gameSearch');


    
// }

const gamesContainer1 = document.querySelector('.gamesContainer1'); 
const gamesContainer2 = document.querySelector('.gamesContainer2');
async function displayGames() {
    try {
        const data = await fetchGames();
        const games = data.results;
        games.forEach(game => {
            const gameDiv = document.createElement('div');
            gameDiv.textContent = game.name;
            gamesContainer1.appendChild(gameDiv);
        });
        
    } catch (error) {
        console.log("first error");
    };
};

