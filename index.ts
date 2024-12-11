
//1) Quali sono i tipi primitivi principali in TypeScript?
console.log("I principali tipi primitivi sono: 'string' - 'number' - 'boolean' - 'undefine' - 'null' - 'any'")

//2) Crea tre variabili tipizzate: una stringa con il tuo nome, un numero con la tua età, e un booleano che indica se stai studiando TypeScript.
const myName: string = "Giuseppe"
const mYAge: number = 20
const studiTypeScript: boolean = true

console.log(myName, mYAge,studiTypeScript)

//3) Tipizza il parametro della seguente funzione

const great = (name: string) => {
    return "Ciao " + name
}
console.log(great("Pino"))

//4) Specifica il tipo di ritorno della seguente funzione

const sum = (a: number, b:number) => {
    return a + b
}
console.log(sum(45, 78))

//5) Crea una funzione che accetti un prezzo e restituisca il prezzo con IVA (22%). Usa i tipi appropriati.

const IVA = (price: number) => {
    return price + (price * 0.22)
}
console.log(IVA(4))

//6) Crea una funzione che concateni due stringhe e restituisca la lunghezza totale.

const concat = (s:string, s2: string) => {
return s + s2
}
console.log(concat("Mario ", "Rossi"))

//7) Cos'è un Type Union e come si scrive?
console.log("Serve per concatenare due type")
const concatType = (value1: string, value2:number | string) => {
    return value1 + value2
}
console.log(concatType("Il tuo valore è ", "sotto zero"))
console.log(concatType("Il tuo valore è ", 8))

//8) Crea una variabile che possa contenere un numero, null o undefined.

let variabile: number | null | undefined

variabile = 78
console.log(variabile)
variabile = null
console.log(variabile)
variabile = undefined
console.log(variabile)

//9) Crea un tipo per rappresentare i giorni della settimana usando union di stringhe letterali.

type GiornoDellaSettimana = "Lunedì" | "Martedì" | "Mercoledì" | "Giovedì" | "Venerdì" | "Sabato" | "Domenica"

let oggi: GiornoDellaSettimana
oggi = "Mercoledì"
// oggi = "Gennaio"  <-- Non è un giorno della settiman 

//10) Tipizza il seguente array di numeri nei due modi possibili:

const numbers: number[] = [1, 2, 3]
const numbers2: Array<number> = [4, 5 ,6]
//?????????????????????????????????????????????????

let tupla: [string, string, string, number, number]
tupla = ["uno", "due", "tre", 4 , 5]


//11) Qual è la differenza tra type e interface?
console.log("(type) e (interface) possono essere usati per descrivere la forma di un oggetto")
console.log("Possono definire proprietà obbligatorie e opzionabili")

