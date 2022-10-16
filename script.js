const resultado = document.querySelector(' .result ');
const confirmar = document.querySelector(' .igual ');

function insert(value){
    resultado.innerHTML += value; /*a princípio oq tem em <p> </p> é espacio vazio. 
    Portanto vazio + value (valor capturado) = valor capturado*/ 
}

function clean(){ /*essa função é a que limpa o visor. Apaga tudo*/
resultado.innerHTML = ' ';
}

function backspace(){ /*Apaga apenas um número*/
    if(resultado.textContent){/* "se tiver conteúdo dentro de id resultado faça o que tá nesse bloco if" */
    let result = document.getElementById('resultado').innerHTML /* o conteúdo de <p></p> vai vir pra variável result*/
    resultado.innerHTML = result.substring(0, result.length -1); /* vai ser atribuído a <p></p> um outro valor,
    que será gerado pelo que tá armazenado em result desde o elemento que tá na posição com índice zero, pegando o tamanho de 
    toda a string, e subtraindo 1. Por isso, o último elemento pode ser apagado*/
    }
}

function conclusion(){
    if(resultado.textContent != 'Erro'){
        document.getElementById('resultado').innerHTML = eval(resultado.innerHTML) /* a função eval() executa as operações matemáticas */
    }
}