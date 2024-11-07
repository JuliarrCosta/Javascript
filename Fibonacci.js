/* Conceitos Utilizados
    - Orientação a objetos
        - Encapsulamento
    - Código testado com Node.js 
    - Teste com uma função messageFibonacci
*/
class Fibonacci{
    #v1
    #v2
    #num
    
    constructor(num){
        this.#v1 = 0
        this.#v2 = 1
        this.#num = num
    }

    get v1(){
        return this.#v1;
    }
    
    get v2(){
        return this.#v2;
    }

    get num(){
        return this.#num;
    }

    fibonacci(){
        let fibonacci = 0;

        while(fibonacci < this.num){

            fibonacci = this.v1 + this.v2
            this.#v1 = this.v2
            this.#v2 = fibonacci;
            if(fibonacci === this.num){
                return true
            }
        }
        return false;
    }
}

function messageFibonacci(num){
    const fibonacci = new Fibonacci(num)

    if(fibonacci.fibonacci() === true){
        console.log("Faz parte da sequencia Fibonacci")
    }else{
        console.log("Não faz parte da sequência")
    }
}

messageFibonacci(7)
messageFibonacci(8)