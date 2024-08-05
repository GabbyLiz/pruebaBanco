document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('inscripcion-form');
    const participantsContainer = document.getElementById('participants-container');

    const clubes = {
        'Yoga': [],
        'Running': [],
        'Lectura': []
    };

    form.addEventListener('submit', (event) => {
        event.preventDefault();

        const role = form['role'].value;
        const club = form['club'].value;
        const name = form['name'].value;
        const lastname = form['lastname'].value;
        const office = form['office'].value;

        const participant = {
            role: role,
            name: name,
            lastname: lastname,
            office: office
        };

        clubes[club].push(participant);
        displayParticipants();
        form.reset();
    });

    function displayParticipants() {
        participantsContainer.innerHTML = '';

        for (const [clubName, participants] of Object.entries(clubes)) {
            if (participants.length > 0) {
                const clubDiv = document.createElement('div');
                clubDiv.classList.add('club');

                const clubTitle = document.createElement('h3');
                clubTitle.textContent = clubName;
                clubDiv.appendChild(clubTitle);

                const participantList = document.createElement('ul');
                participants.forEach(participant => {
                    const participantItem = document.createElement('li');
                    participantItem.textContent = `${participant.name} ${participant.lastname}, Oficina: ${participant.office}, Rol: ${participant.role}`;
                    participantList.appendChild(participantItem);
                });

                clubDiv.appendChild(participantList);
                participantsContainer.appendChild(clubDiv);
            }
        }
    }

    // Mostrar los participantes inicialmente (vacíos)
    displayParticipants();
});
