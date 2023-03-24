const isimler = ["emre","ali","hasan","ayşe"];
const sayilar = [1,50,2,41,41,84,8,35,3];

const ogrenciler = [ 
    {id:12,isim:"emre",yas:25},
    {id:22,isim:"hasan",yas:15},
    {id:32,isim:"fatma",yas:55},
    {id:13,isim:"kadir",yas:19},
    {id:92,isim:"kemal",yas:45},
    {id:15,isim:"mustafa",yas:75},
    {id:44,isim:"ceren",yas:30},
];

//1
let kopya = [];
for(let isim of isimler){
    kopya.push(isim);
};

//2
let kopya1 = [];
kopya1 = Array.from(isimler);


//3

let kopya2 = [];
kopya2 = [...isimler];//spreed operatorleri kaç adet parametre gönderdiğimizi bilmediğimizde kullanılır.

kopya1.sort();
kopya2.sort().reverse();

console.log("orijinal dizi : " +isimler.toString());
console.log("kopya dizi : " + kopya);
console.log("kopya1 dizi : " + kopya1);
console.log("kopya2 dizi : " + kopya2);