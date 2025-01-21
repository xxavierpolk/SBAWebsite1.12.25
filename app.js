///////// This module handles the core logic ///////////////

import { fetchGames, fetchPokemon, createPost } from './ajax.js';
// import { displayReview } from './dom.js';   
// import * as DOM from './dom.js';
fetchGames();
fetchPokemon();
createPost();
// DOM.displayGames();

const gamesContainer1 = document.querySelector('.gamesContainer1'); 
const gamesContainer2 = document.querySelector('.gamesContainer2');
async function displayGames() {
    try {
        const data = await fetchGames();
        const games = data.results;
        games.forEach(game => {
            const gameDiv = document.createElement('div');
            gameDiv.classList.add('gameDiv');
            gameDiv.textContent = game.name;
            gamesContainer1.appendChild(gameDiv);
            gameDiv.style.display = 'block';
        });
        
    } catch (error) {
        console.log("first error");
    };
};



const viewGames = document.getElementById('viewGames');
viewGames.addEventListener('click', displayGames);