let sub = document.getElementById('subBtn');
sub.addEventListener('click', showTable);

function showTable() {
    let num = Number(document.querySelector('#txtnum').value);
    let tab = document.querySelector('#tabuada');
    tab.innerHTML = '';
    for (c = 1; c <= 10; c++) {
        let item = document.createElement('option');
        item.innerText = `${num} x ${c} = ${num * c}`;
        item.value = `tab${c}`;
        tab.appendChild(item);
    }
}