let krastine1 = prompt("Įveskite trikampio stationio ilgį");
let krastine2 = prompt("Įveskite trikampio įstrižainės ilgį");
let krastine3 = statinioRadimas(krastine1, krastine2);
console.log("Statinio kvadratas yra:" + krastine3);

function statinioRadimas(a, b){
    return pakeltiKvadratu(b) - pakeltiKvadratu(a);
}

function pakeltiKvadratu(a){
    return a * a;
}