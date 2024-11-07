class FaturamentoEstado{
    #state;
    #value

    constructor(state, value){
        this.#state = state;
        this.#value = value;
    }
    get state(){
        return this.#state;
    }
    get value(){
        return this.#value
    }

    returnPercent(total){
        if(total === 0){
            return 0;
        }
        return this.value/total * 100;
    }
}
 
const SP = new FaturamentoEstado("São Paulo", 67836.43)
const RJ = new FaturamentoEstado("Rio de Janeiro", 36678.66)
const MG = new FaturamentoEstado("Minas Gerais", 29229.88)
const ES = new FaturamentoEstado("Espirito Santo", 27165.48)
const OUTROS = new FaturamentoEstado("Outros", 19849.53)

const total = SP.value + RJ.value + MG.value + ES.value + OUTROS.value


const percentSP = SP.returnPercent(total)
const percentRJ = RJ.returnPercent(total)
const percentMG = MG.returnPercent(total)
const percentES = ES.returnPercent(total)
const percentOUTROS = OUTROS.returnPercent(total)

//Fazendo um gráfico com chart.js
document.getElementById("percentSP").innerText = percentSP.toFixed(2) + "%";
document.getElementById("percentRJ").innerText = percentRJ.toFixed(2) + "%";
document.getElementById("percentMG").innerText = percentMG.toFixed(2) + "%";
document.getElementById("percentES").innerText = percentES.toFixed(2) + "%";
document.getElementById("percentOUTROS").innerText = percentOUTROS.toFixed(2) + "%";

