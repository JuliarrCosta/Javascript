class FaturamentoDiario{
    #day
    #value

    constructor(day, value){     
        this.#day = day
        this.#value = value 
    }

    get day(){
        return this.#day;
    }
    
    set day(day){
        this.#day = day;
    }

    get value(){
        return this.#value
    }

    set value(value){
        this.#value = value
    }
}