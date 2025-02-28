document.addEventListener('DOMContentLoaded', () => {
    const reservationForm = document.getElementById('reservationForm');
    const reservationStatus = document.getElementById('reservationStatus');

    reservationForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const phone = document.getElementById('phone').value;
        const date = document.getElementById('date').value;
        const time = document.getElementById('time').value;
        const guests = document.getElementById('guests').value;

        const reservationData = {
            name,
            email,
            phone,
            date,
            time,
            guests
        };

        console.log('Réservation:', reservationData);

        reservationStatus.innerText = `Merci, ${name}! Votre réservation pour ${guests} personnes le ${date} à ${time} a été enregistrée.`;
        reservationStatus.style.color = 'green';

        reservationForm.reset();
    });
});
