/* Conceitos Utilizados
    - Orientação a objetos
        - Encapsulamento
    - Código testado com Node.js 
*/
class Soma{
    #index;
    #sum;
    
    constructor(){
        this.#index = 13
        this.#sum = 0;
    }

    get index(){
        return this.#index;
    }

    get sum(){
        return this.#sum;
    }

    returnSum(){
        for(let k = 0; k < this.index; k++ ){
            this.#sum = this.#sum + k;
        }
        return this.#sum;
    }
}

const s1 = new Soma()
console.log(s1.returnSum())