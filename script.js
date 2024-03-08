const form = document.getElementById('formATV');
const inputNome = document.getElementById('NomeContato');
const inputTelefone = document.getElementById('TelefoneContato');
const inputEmailCTT = document.getElementById('email')
const corpoTabela = document.querySelector('tbody');

form.addEventListener('submit', function(e) {
    e.preventDefault();
    adicionaLinha();
});

function adicionaLinha() {
    let linha = '<tr>';
    linha += `<td>${inputNome.value}</td>`;
    linha += `<td>${inputTelefone.value}</td>`;
    linha += `<td>${inputEmailCTT.value}</td>`;
    linha += '</tr>';

    corpoTabela.insertAdjacentHTML('beforeend', linha);

    inputNome.value = '';
    inputTelefone.value = '';
    inputEmailCTT.value = '';
}
