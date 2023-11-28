const form = document.getElementById('form-contatos');
const nome_completo = [];
const celular = [];
const email = [];
const tel_fixo = [];

let linhas = '';

form.addEventListener('submit', function(e) {
    e.preventDefault();

    if (verificaNomeCompleto() && !verificaContatoDuplicado()) {
        adicionaLinha();
        atualizaTabela();
        clearFormInputs();
    }
});

function adicionaLinha() {
    const inputNomeCompleto = document.getElementById('nome-contato')
    const inputCelular = document.getElementById('cel')
    const inputEmail = document.getElementById('e-mail')
    const inputTelFixo  = document.getElementById('tel-fixo')

    nome_completo.push(inputNomeCompleto.value);
    celular.push(inputCelular.value);
    email.push(inputEmail.value);
    tel_fixo.push(inputTelFixo.value);

    let linha = `<tr>`;
    linha += `<td>${inputNomeCompleto.value}</td>`;
    linha += `<td>${inputCelular.value}</td>`;
    linha += `<td>${inputEmail.value}</td>`;
    linha += `<td>${inputTelFixo.value}</td>`;
    linha += `</tr>`;

    linhas += linha;

};

function atualizaTabela() {
    const corpoTabela = document.querySelector(`tbody`);
    corpoTabela.innerHTML = linhas;
};

function clearFormInputs() {
    document.getElementById('nome-contato').value = '';
    document.getElementById('cel').value = '';
    document.getElementById('e-mail').value = '';
    document.getElementById('tel-fixo').value = '';
}

function verificaNomeCompleto() {
    const inputNomeCompleto = document.getElementById('nome-contato');
    // Expressão regular para validar Nome + Sobrenome
    const regexNomeCompleto = /^[a-zA-Z]+(?: [a-zA-Z]+)+$/;

    // Testa se o valor do input corresponde ao padrão
    const resultadoValidacao = regexNomeCompleto.test(inputNomeCompleto.value);

    if (!resultadoValidacao) {
        alert('Formato de nome inválido. Digite Nome e Sobrenome separados por um espaço.');
    }

    return resultadoValidacao;
}

function verificaContatoDuplicado() {
    const inputNomeCompleto = document.getElementById('nome-contato');
    const inputCelular = document.getElementById('cel');

    const nomeDuplicado = nome_completo.includes(inputNomeCompleto.value);
    const celularDuplicado = celular.includes(inputCelular.value);

    if (nomeDuplicado && celularDuplicado) {
        alert(`Já existe um contato com nome ${inputNomeCompleto.value} e número de celular ${inputCelular.value}`);
        return true;
    } else if (nomeDuplicado) {
        alert(`Já existe um contato com nome ${inputNomeCompleto.value}`);
        return true;
    } else if (celularDuplicado) {
        alert(`Já existe um contato com número de celular ${inputCelular.value}`);
        return true;
    }

    return false;
}