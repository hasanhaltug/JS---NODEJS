/*  Ödev 1
let sayi=0;

for (let i = 0; i < 3; i++) {
    let gelen =parseInt(prompt(i+1 +". sayı değerini giriniz"));
    sayi = sayi + gelen;
}
     
console.log(sayi);
let ortalama = sayi/3;
console.log(ortalama); */


let kenar1 = parseInt(prompt("1. kenarı giriniz"));
let kenar2 = parseInt(prompt("2. kenarı giriniz"));
let kenar3 = parseInt(prompt("3. kenarı giriniz"));

if (kenar1 == kenar2 && kenar1 != kenar3) {
    console.log("İkizkenar Üçgen");
}
else if (kenar1 == kenar2 && kenar1 == kenar3) {
    console.log("Eşkenar üçgen");
}
else { console.log("Çeşitkenar üçgem"); }