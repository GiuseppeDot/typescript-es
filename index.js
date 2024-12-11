//1) Quali sono i tipi primitivi principali in TypeScript?
console.log("I principali tipi primitivi sono: 'string' - 'number' - 'boolean' - 'undefine' - 'null' - 'any'");
//2) Crea tre variabili tipizzate: una stringa con il tuo nome, un numero con la tua età, e un booleano che indica se stai studiando TypeScript.
var myName = "Giuseppe";
var mYAge = 20;
var studiTypeScript = true;
console.log(myName, mYAge, studiTypeScript);
//3) Tipizza il parametro della seguente funzione
var great = function (name) {
    return "Ciao " + name;
};
console.log(great("Pino"));
//4) Specifica il tipo di ritorno della seguente funzione
var sum = function (a, b) {
    return a + b;
};
console.log(sum(45, 78));
//5) Crea una funzione che accetti un prezzo e restituisca il prezzo con IVA (22%). Usa i tipi appropriati.
var IVA = function (price) {
    return price + (price * 0.22);
};
console.log(IVA(4));
//6) Crea una funzione che concateni due stringhe e restituisca la lunghezza totale.
var concat = function (s, s2) {
    return s + s2;
};
console.log(concat("Mario ", "Rossi"));
//7) Cos'è un Type Union e come si scrive?
console.log("Serve per concatenare due type");
var concatType = function (value1, value2) {
    return value1 + value2;
};
console.log(concatType("Il tuo valore è ", "sotto zero"));
console.log(concatType("Il tuo valore è ", 8));
//8) Crea una variabile che possa contenere un numero, null o undefined.
var variabile;
variabile = 78;
console.log(variabile);
variabile = null;
console.log(variabile);
variabile = undefined;
console.log(variabile);
var oggi;
oggi = "Mercoledì";
// oggi = "Gennaio"  <-- Non è un giorno della settiman 
//10) Tipizza il seguente array di numeri nei due modi possibili:
var numbers = [1, 2, 3];
var numbers2 = [4, 5, 6];
//?????????????????????????????????????????????????
