/*Nesse código decidi não utilizar orientação a objetos,
mas irei utilizar o conceito de uma pilha*/

function receiveWord(word){

    let string = word
    let vetor = string.split('')

    return vetor
}

function invert(vetor){
    let stack = []

    vetor.forEach(char => stack.push(char));

    while(stack.length > 0){
        console.log(stack.pop());
    }
}

const teste = receiveWord('oi')

invert(teste)