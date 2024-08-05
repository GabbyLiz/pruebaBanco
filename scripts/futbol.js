// Espera a que el contenido del DOM esté completamente cargado antes de ejecutar el código
document.addEventListener('DOMContentLoaded', () => {
    // Obtén el formulario de inscripción y el contenedor donde se mostrarán los equipos
    const form = document.getElementById('inscripcion-form');
    const teamsContainer = document.getElementById('teams-container');

    // Define los equipos iniciales, cada equipo tiene un array vacío para los jugadores
    const equipos = {
        'Equipo hombres 1': [],
        'Equipo hombres 2': [],
        'Equipo hombres 3': [],
        'Equipo hombres 4': [],
        'Equipo hombres 5': [],
        'Equipo hombres 6': [],
        'Equipo hombres 7': [],
        'Equipo hombres 8': [],
        'Equipo hombres 9': [],
        'Equipo hombres 10': [],
        'Equipo hombres 11': [],
        'Equipo hombres 12': [],
        'Equipo hombres 13': [],
        'Equipo hombres 14': [],
        'Equipo hombres 15': [],
        'Equipo hombres 16': [],
        'Equipo mujeres 1': [],
        'Equipo mujeres 2': [],
        'Equipo mujeres 3': [],
        'Equipo mujeres 4': [],
        'Equipo mujeres 5': [],
        'Equipo mujeres 6': []
    };

    // Añade un evento 'submit' al formulario
    form.addEventListener('submit', (event) => {
        // Previene el comportamiento por defecto del formulario (que recargaría la página)
        event.preventDefault();

        // Obtén los valores ingresados en el formulario
        const teamName = form['team-name'].value;
        const playerName = form['player-name'].value;
        const playerLastname = form['player-lastname'].value;
        const playerNumber = form['player-number'].value;
        const playerAgency = form['player-agency'].value;

        // Crea un objeto jugador con los datos del formulario
        const player = {
            name: playerName,
            lastname: playerLastname,
            number: playerNumber,
            agency: playerAgency
        };

        // Añade el jugador al equipo seleccionado
        equipos[teamName].push(player);
        
        // Actualiza la visualización de los equipos y jugadores
        displayTeams();
        
        // Resetea el formulario para que quede vacío
        form.reset();
    });

    // Función para mostrar los equipos y jugadores en la página
    function displayTeams() {
        // Limpia el contenedor de equipos para actualizar la lista
        teamsContainer.innerHTML = '';

        // Recorre los equipos y jugadores para mostrarlos
        for (const [teamName, players] of Object.entries(equipos)) {
            // Solo muestra los equipos que tienen jugadores inscritos
            if (players.length > 0) {
                // Crea un contenedor para el equipo
                const teamDiv = document.createElement('div');
                teamDiv.classList.add('team');

                // Crea un título para el nombre del equipo
                const teamTitle = document.createElement('h3');
                teamTitle.textContent = teamName;
                teamDiv.appendChild(teamTitle);

                // Crea una lista para mostrar los jugadores del equipo
                const playerList = document.createElement('ul');
                players.forEach(player => {
                    // Crea un elemento de lista para cada jugador
                    const playerItem = document.createElement('li');
                    playerItem.textContent = `${player.name} ${player.lastname}, Número: ${player.number}, Agencia: ${player.agency}`;
                    playerList.appendChild(playerItem);
                });

                // Añade la lista de jugadores al contenedor del equipo
                teamDiv.appendChild(playerList);
                // Añade el contenedor del equipo al contenedor principal
                teamsContainer.appendChild(teamDiv);
            }
        }
    }

    // Llama a la función displayTeams para mostrar los equipos inicialmente (aunque estén vacíos)
    displayTeams();
});
