// Función para hacer una solicitud a la API de juegos
async function fetchGames() {
    try {
        const response = await fetch('https://api.example.com/games'); // Reemplaza con la URL de la API real
        const games = await response.json();
        displayGames(games);
    } catch (error) {
        console.error('Error fetching games:', error);
    }
}

// Función para mostrar los juegos en la página
function displayGames(games) {
    const gamesContainer = document.getElementById('games-container');
    games.forEach(game => {
        const gameElement = document.createElement('div');
        gameElement.className = 'game';
        gameElement.innerHTML = `
            <h2>${game.name}</h2>
            <p>${game.description}</p>
        `;
        gamesContainer.appendChild(gameElement);
    });
}

// Llamar a la función fetchGames cuando la página se cargue
window.onload = fetchGames;
