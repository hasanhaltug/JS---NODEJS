//soru 1
const sehir = [
    {ad : "Ankara", plaka : 06, komsular : ["eskişehir","çorum"]},
    {ad : "İstanbul", plaka : 34, komsular : ["yalova","izmit"]},
    {ad : "Malatya", plaka : 44, komsular : ["maraş","elazığ"]},
    {ad : "Elazığ", plaka : 23, komsular : ["malatya","bingol"]},
    {ad : "Bursa", plaka : 17, komsular : ["malatya","bingol"]},
];

const sirala = sehir.sort(function(a,b){
    if(a.ad > b.ad)
        return 1;
    else if(a.ad < b.ad)
        return -1;
    else
        return 0;
});
console.log(sirala);

//soru 2
let sayi = prompt("bir sayi giriniz : ");
let fibDizi = [0,1];
let fib = 0;
for(let i = 0 ; i <sayi ; i ++)
{
    fib = fibDizi[i]+fibDizi[i+1];
    
    if(fib <= sayi)
    {
        fibDizi.push(fib);
    }
}
console.log(fibDizi);

//soru 3
const ogrenciler = [ 
    {id:12,isim:"emre",soyad:"kara"},
    {id:22,isim:"hasan",soyad:"altug"},
    {id:32,isim:"fatma",soyad:"koşma"},
    {id:13,isim:"kadir",soyad:"topuz"},
    {id:92,isim:"kemal",soyad:"can"},
    {id:15,isim:"mustafa",soyad:"şen"},
    {id:44,isim:"ceren",soyad:"kaba"},
];

const filtreli = ogrenciler.filter((kisi) => kisi.id % 2 == 0).map((kisi)=>  kisi.isim + " " +kisi.soyad)
                            .sort((a,b) => a>b ? 1 : a<b ? -1 : 0).reverse();

console.log(filtreli);




