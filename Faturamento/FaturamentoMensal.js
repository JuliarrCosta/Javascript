/* Conceitos Utilizados
    - Orientação a objetos
        - Encapsulamento
        - Agregação
    - Código testado com Node.js 
    - Teste com uma função messageFibonacci

    OBS:. Utilizei uma abordagem simples,
    entretanto eu precisaria de uma biblioteca
    para manipular datas e fazer validações para que a lista não
    estará vazia para que o método maior valor e menor valor
    funcione corretamente.
    
*/
const fs = require('fs');
const path = require('path')
const faturamentoDiario = require('./FaturamentoDiario')

class FaturamentoMensal{
    #month;
    #year;
    #days;

    constructor(month, year){
        this.#month = month;
        this.#year = year;
        this.#days = []
    }

    get month(){
        return this.#month;
    }

    get year(){
        return this.#year
    }

    get days(){
        return this.#days;
    }

    media(){    
        let tot = 0;
        let days = 0;

        for(let i = 0; i < this.days.length; i++){
            if(this.days[i].value > 0){
                tot = tot + this.days[i].value;
                days++;
            }
        }
        return tot/days;
    }

    biggerValue(){
        let result = 0 ;
        
        for(let i = 0; i < this.days.length; i++){
            if(this.days[i].value > result){
                result = this.days[i].value;
            }
        }
        return result;
    }

    lowestValue(){
        let result = this.biggerValue();
        
        for(let i = 0; i < this.days.length; i++){
            if(this.days[i].value < result && this.days[i].value > 0){
                result = this.days[i].value;
            }
        }
        return result;

    }
    
    printData(){
        return this.days.forEach(day => {
            console.log(`Day: ${day.day}, Value: ${day.value}`);
        })

    }

    addDays(filePath) {
        const fullPath = path.resolve(__dirname, filePath);
        try {
            const data = fs.readFileSync(fullPath, 'utf8');
            const jsonData = JSON.parse(data);
            this.#days = Array.isArray(jsonData) ? jsonData : [jsonData];
        } catch (error) {
            console.error('Erro ao ler o arquivo JSON:', error);
        }
    }

}
const novembro = new FaturamentoMensal(11, 2024)
novembro.addDays('./novembro.json')

console.log(novembro.media())
console.log(novembro.biggerValue())
console.log(novembro.lowestValue())