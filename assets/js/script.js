function generaGriglia() {
    const grigliaDiv = document.getElementById('griglia');
    grigliaDiv.innerHTML = ''; 

    for (let i = 1; i <= 10; i++) {
        const riga = document.createElement('div');
        riga.classList.add('row');

        for (let j = 1; j <= 10; j++) {
            const cella = document.createElement('div');
            cella.classList.add('col-1', 'cella');
            const numeroCella = (i - 1) * 10 + j;
            cella.textContent = numeroCella;
            riga.appendChild(cella);
        }

        grigliaDiv.appendChild(riga);
    }
}

const generaGrigliaBtn = document.getElementById('generaGrigliaBtn');
generaGrigliaBtn.addEventListener('click', generaGriglia);
