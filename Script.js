function saudar() {
    let nome = document.getElementById("nome").value;
    document.getElementById("mensagem").innerText = "Olá, " + nome + " ! ";
}

function verificarIdade() {
    let idade = parseInt(document.getElementById("idade").value);
    if (idade >= 18) {
        document.getElementById("resultadoIdade").innerText = "Você é maior de idade.";
    }
    else {
        document.getElementById("resultadoIdade").innerText = "Você é menor de idade.";
    }
}

function verificarParOuImpar() {
    let numero = parseInt(document.getElementById("numeroParImpar").value);
    if (numero % 2 == 0) {
        document.getElementById("resultadoParImpar").innerText = "O número é par.";
    }
    else {
        document.getElementById("resultadoParImpar").innerText = "O número é ímpar.";
    }
}
function mostrarNumeros() {
    let resultado = "";
    for (let i = 1; i <= 10; i++) {
        resultado += i + " ";
    }
    document.getElementById("numerosDe1a10").innerText = resultado;
}

function contagemRegressiva() {
    const num = parseInt(document.getElementById("numContagem").value);
    let resultado = "";
    for (let i = num; i >= 0; i--) {
        resultado += i + " ";
    }
    document.getElementById("resultadoContagem").innerText = resultado;
}

function tab() {
    let num = document.getElementById("numeroTabuada").value;
    let cont = 1;
    let resul = " ";
    while (cont <= 10) {
        resul += (cont + ' X ' + num + " " + " = " + cont * num + " | ");
        cont++;
    }
    document.getElementById("tabuadaResultado").innerText = resul;
};

function somarNumeros() {
    ;
    let cont = 1;
    let soma = 0;
    let resul = " ";
    while (cont <= 5) {
        num = parseInt(prompt('Informe o ' + cont + 'º número'));
        soma += num;
        resul = soma;
        cont++;
    }
    document.getElementById("resultadoSoma").innerText = resul;
};