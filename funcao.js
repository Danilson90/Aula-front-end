
100%
/***********************************
 * Funções - são blocos de código que executa determinada tarefa
 * 1.modularidade
 * 2.escopo
 * 3.parametros
 * 4.retornos


let x = 10;  // escopo global

function Saudar(){
    let y = 10;     // escopo local
    // bloco de codico que executa a tarefa
    console.log("Oi");
    //console.log(x);
}

Saudar();
console.log(x);
//let saudacao = "Ola mundo";

//Saudar(saudacao);

// entrada de dados na função - parametros
// saida de dados da função - retorno
**********************************************/

/** uma variavel declarada fora de uma funcao
 *  tem escopo global, uma variavel declarada 
 *  dentro de uma função tem escopo local
 */

const teclado = require("prompt-sync")();

function Somar(a, b){
    let resultado = a + b;
    return resultado;
}

function Subtracao(a, b){
    let resultado = a - b;
    return resultado;
}

function Multiplicacao(a, b){
    let resultado = a * b;
    return resultado;
}

function Divisao(a, b){
    let resultado = a / b;
    return resultado;
}

console.log("Digite uma opção");
let opcao = teclado("1-Soma 2-Subtração 3-Multiplicação 4-Divisão");

switch(opcao){
    case 1:
        // pegar do usuario os valores de x e y
        // fazer o retorno da funcao e mostrar pro usuario
        Somar(x,y);
        break;
    case 2:
        Subtracao(x,y);
        break;
}