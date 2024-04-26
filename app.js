let listasNumerosSorteados = [];
let titulo = document.querySelector('h1');
titulo.innerHTML = 'Jogo do número secreto';



let numeroLimite = 100;

let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;
function exebirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female')
    {rate:1.2};
}
function exibirMensagemInicial() {
    exebirTextoNaTela('h1', 'Jogo do número secreto');
    exebirTextoNaTela('p', 'Escolha um número de 1 a 100');
    
}

exibirMensagemInicial();

function verificarChute() {
    let chute = document.querySelector('input').value;

    if (chute == numeroSecreto) {
        exebirTextoNaTela('h1', 'Acertou!');
        let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
        let mensagemTentativas = `Você descobriu o número secreto com ${tentativas} ${palavraTentativa}`;

        exebirTextoNaTela('p', mensagemTentativas);
        document.getElementById('reiniciar').removeAttribute('disabled');

    } else {
        if (chute > numeroSecreto) {
            exebirTextoNaTela('h1', 'O número é menor');
        } else {
            exebirTextoNaTela('h1', 'O número é maior');
        }
        tentativas++;
        limparCampo();
    }
}
function gerarNumeroAleatorio() {
    let numeroEscolhido = parseInt(Math.random() * numeroLimite + 1);
    let quantidadeDeElementosNaLista = listasNumerosSorteados.length;

    if (quantidadeDeElementosNaLista == 100){
        listasNumerosSorteados = []
    }
    if (listasNumerosSorteados.includes(numeroEscolhido)) {
        return gerarNumeroAleatorio();
    } else {
        listasNumerosSorteados.push(numeroEscolhido);
        console.log(listasNumerosSorteados);
        return numeroEscolhido;

    }
}

function limparCampo() {
    chute = document.querySelector('input');
    chute.value = '';
}

function reiniciarJogo() {
    numeroSecreto = gerarNumeroAleatorio();
    limparCampo();
    tentativas = 1;
    exibirMensagemInicial();
    document.getElementById('reiniciar').setAttribute('disabled', 'true');
};