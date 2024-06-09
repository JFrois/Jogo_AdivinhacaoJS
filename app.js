let listaNumerosSorteados = [];

let numeroLimiteLista = 100;

let numeroSecreto = geradorNumeroSecreto();

let tentativas = 1;

function exibirTexto(tag, texto){
	let campo = document.querySelector(tag);
	campo.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate: 1.2});
}

function mensagemInicialJogo(){
    exibirTexto ('h1', 'Jogo do número secreto');
    exibirTexto ('p','Por favor, nos informe qual número deseja tentar, entre 1 e 100');
    
}

mensagemInicialJogo();

function verificarChute(){
    console.log('O botão foi clicado');
    console.log(numeroSecreto);
   
    let chute = parseInt(document.querySelector('input').value);
    
    
    if(chute == numeroSecreto){
        exibirTexto('h1','Você acertou!');
        let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
        let mensagemTentativa = `O número secreto ${numeroSecreto} foi descoberto com ${tentativas} ${palavraTentativa} meus parabéns!!!`;
        exibirTexto('p', mensagemTentativa);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        if(chute > numeroSecreto){
            exibirTexto('h1', 'Quase!');
            exibirTexto('p','Tente novamente! O chute foi maior que o número secreto');
        }else{
            exibirTexto('h1','Quase!');
            exibirTexto('p','Tente novamente! O chute foi menor que o número secreto');
        }
}

    tentativas++;
    limparCampo();
}

function geradorNumeroSecreto(){
    let gerarNumeroSecreto = parseInt(Math.random() * numeroLimiteLista + 1);
    
    let elementosLista = listaNumerosSorteados.length;
    
    if(elementosLista == numeroLimiteLista){
        listaNumerosSorteados = [];
    }
    
    if (listaNumerosSorteados.includes(gerarNumeroSecreto)){
        return geradorNumeroSecreto();
    } else{
        listaNumerosSorteados.push(gerarNumeroSecreto);
        return gerarNumeroSecreto;
    }
}

function limparCampo(){
    let chute = document.querySelector('input');
    chute.value = '';

}

function reiniciarJogo(){
    numeroSecreto = geradorNumeroSecreto();
    limparCampo();
    tentativas = 1;
    mensagemInicialJogo();
    document.getElementById('reiniciar').setAttribute('disabled', true);
    
}



