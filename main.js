/* Área de propriedade Global */
/* Os Itens abaixo são Array */
const form = document.getElementById('form-atividade');
const imgAprovado = '<img src="./images/aprovado.png" alt"Emoji celebrando" />';
const imgReprovado = '<img src="./images/reprovado.png" alt"Emoji decepcionado" />';
const atividades = [];
const notas = [];
const spanAprovado = '<span class="resultado aprovado">Aprovado</span>';
const spanReprovado = '<span class="resultado reprovado">Reprovado</span>';
const notaMinima = parseFloat(prompt("Digite a nota mínima:"));

let linhas = '';
form.addEventListener('submit', function(e) {

    e.preventDefault();
    adcionaLinha ();
    atualizaTabela ();
    atualizaMediaFinal();
});
/* EStá função adiciona uma nova linha depois que o usuario adiciona a materia e a nota */
function adcionaLinha() {
    /* Aqui pegamos os campos do formulário */
    const inputNomeAtividade = document.getElementById('nome-atividade');
    const inputNotaAtividade = document.getElementById('nota-atividade');

    if (atividades.includes(inputNomeAtividade.value)) {
            alert(`\n A atividade: ${inputNomeAtividade.value} já foi inserida`);
    } else {
        atividades.push(inputNomeAtividade.value);
        notas.push (parseFloat(inputNotaAtividade.value));

    let linha = '<tr>';
    linha += `<td>${inputNomeAtividade.value}</td>`;
    linha += `<td>${inputNotaAtividade.value}</td> `;
    linha += `<td>${inputNotaAtividade.value  >= notaMinima ? imgAprovado : imgReprovado}</td>`;
    linha += `</tr>`;

    linhas += linha;

    }

    inputNomeAtividade.value = '';
    inputNotaAtividade.value = '';
}

/* Está função atualiza a página após a adição clicar no botão enviar*/
function atualizaTabela() {
    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas;

}

function atualizaMediaFinal() {
    const mediaFinal = calculaMediaFinal();

    document.getElementById("mediaFinal-valor").innerHTML = mediaFinal.toFixed(2);
    document.getElementById("medialFinal-resultado").innerHTML = mediaFinal >= notaMinima ? spanAprovado : spanReprovado;

}

/* Essa função faz o usuário digitar a o valor da média mínimo da média do programa */
function calculaMediaFinal() {
    let somaDasNotas = 0;
    /* Repetição i = 0 quando i for < que a quantidade de entradas notas.length; então adicione a proxima dentro da soma */
    for(let i = 0; i < notas.length; i++) {
        somaDasNotas += notas[i];
    }

    return somaDasNotas / notas.length; /* Aqui ele retorna o  valor do calculo de todas as notas e divide pela quantidade de atividades (matérias) adicionadas */
}