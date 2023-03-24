// // Ödev 1
// let sayi = parseInt(prompt("Hesaplamak istediğiniz saniye değerini giriniz: "));
// let saniye = sayi%60;
// let dakika= (sayi-saniye)/60;
// console.log(`${dakika} ${saniye}`);
// console.log(dakika + " dakika " + saniye + " saniye");  


// //Odev 2 
// let fah = Math.round(Math.random()*100); 
// console.log(fah);
// let cel = 5/9 * (fah - 32);
// console.log(cel); 

 // Ödev 3 
let sayi = prompt("Yıl değerini giriniz");
let kontrol;
if(sayi%400 == 0 || sayi%4==0 && sayi%100!=0)
{
    kontrol = true;
}
else
{
    kontrol=false;
}

console.log(sayi);
console.log(kontrol +" -- " + typeof kontrol);  