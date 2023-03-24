let arabaMarkalari = ["Audi","Mercedes","BMW"];
console.log(arabaMarkalari);
console.log(arabaMarkalari.toString());
console.log(arabaMarkalari[2]);

//eklleme
arabaMarkalari[3] = "Skoda";

//Guncelleme
arabaMarkalari[2] = "Ford";

//dizi içinde donme
for(deger of arabaMarkalari)
{
    console.log(deger);
}

for(let i=0; i<arabaMarkalari.length; i++)
{
    console.log(arabaMarkalari[i]);
}

//Array metotları toString, join, push(), pop(), shift(), unshift(), delete, splice(), concat(), slice(), split()  

let isimler = ["Hasan" , "Huseyin", "Kadir"];

console.log(isimler.join(" | "));//Dizi elemanları arasına istenilen değerleri ekler

console.log("");
let elemanSayisi = isimler.push("Ali"); // Dizinin sonuna ekler ve eleman sayısını return ediyor
console.log(isimler + " - " + elemanSayisi);

let donenEleman = isimler.pop(); //Son elemanı siliyor ve onu geri return ediyor.
console.log(isimler.toString());

isimler.shift();//En baştaki elemanı silme işlemini görür. silineni döner
console.log(isimler.toString());

isimler. unshift("Yeni eleman");//ilk eleman olarak ekler. dizi uzunluğunu döner
console.log(isimler.toString());

delete isimler[1];//indeksteki elemanı siler ve boş kalır o eleman
console.log(isimler.toString());

let sayilar = [1,2,3,4,5,6,7,8];

let silinen = sayilar.splice(6,1,10,11); //6.indexten başlayarak 1 eleman sil ve yerine 10 ve 11 ekle geriye silinen değeri dönderir.
console.log(sayilar.toString()+" | "+silinen);

let teksayi = [1,3,5];
let ciftsayi = [2,4,6];

let sayilarim =teksayi.concat(ciftsayi);//ilk berlirtilen diziye parantez içindeki diziyi ekler
console.log(sayilarim.toString());

let olusan = sayilarim.slice(2,4);//başlangıç indexten son indexe kadar sonuncu dahil değil ayır yeni dizi olarak dönder.
console.log(olusan.toString());





