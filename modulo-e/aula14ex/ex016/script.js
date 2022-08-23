let form = document.getElementById('form');

form.addEventListener('submit', contar);

function contar() {
    let ini = Number(document.querySelector('#txtini').value);
    let fim = Number(document.querySelector('#txtfim').value);
    let passo = Number(document.querySelector('#txtpasso').value);
    let res = document.querySelector('#res');

    res.innerHTML = 'Contando: ';

    for (c = ini; c <= fim; c += passo) {
        res.innerHTML += ` ${c} `;
    }

}

