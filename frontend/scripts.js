window.addEventListener('load', async () => {
    const playerStatsDiv = document.getElementById('playerStats');

    try {
        const response = await fetch('/api/users');
        const playerStats = await response.json();

        playerStats.forEach(stat => {
            const playerStatsElement = document.createElement('div');
            playerStatsElement.innerHTML = `
            <h3>${stat.playerName}</h3>
            <p>Kills: ${stat.kills}</p>
            <p>Deaths: ${stat.deaths}</p>
            <!-- Agregar otros campos de estadísticas aquí -->
      `;
            playerStatsDiv.appendChild(playerStatsElement);
        });
    }catch (err){
        console.error(err);
        playerStatsDiv.innerHTML = 'Error fetching player stats';
    }
});