let Hasan ={
    isim : "Hasan ",
    soyisim : "Kurt",
    yas : 24,
    dogumYili : 1998,
    evliMi : false,
    sevdigiRenkler : ["Blue","Red","Black"],
    yasHesapla: function(){
        return 2023 - this.dogumYili;
    },
    il: "Ankara"
};

let Taha ={
    isim : "Taha",
    soyisim : "Kilic",
    yas : 23,
    dogumYili : 1999,
    evliMi : true,
    sevdigiRenkler : ["Yellow","white","Black"],
    yasHesapla: function(){
        return 2023 - this.dogumYili;
    },
    il: "malatya"
};

console.log(Hasan);
console.log(Hasan.isim);
let sonuc = Hasan.yasHesapla();
console.log(sonuc);
console.log(Hasan.evliMi);

let ogrenciler = [Hasan,Taha];
console.log(ogrenciler);


Hasan.soyisim = "Yeni Soyisim";
console.log(Hasan);