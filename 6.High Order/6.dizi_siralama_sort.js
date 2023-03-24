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


const sirali = isimler.sort();//sıralar ve geriye sıralıyı yazdır.
console.log(sirali);

const tersSira = isimler.sort().reverse();
console.log(tersSira);

const sirali1 = sayilar.sort(function(a,b){
    return a-b; //b-a olursa büyükten küçüğe
});
console.log(sayilar);

const siralaOgrenci = ogrenciler.sort(function(a,b){
    return a.id-b.id;
});
console.log(siralaOgrenci);

//ÖNEMLİ
console.log("Metin sırala");
const ismeGoreSirala = ogrenciler.sort(function(a,b){
    return a.isim > b.isim ? 1 : a.isim < b.isim ? -1 : 0;
});
console.log(ismeGoreSirala);