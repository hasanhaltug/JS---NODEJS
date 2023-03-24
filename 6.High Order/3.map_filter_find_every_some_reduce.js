//Map fonksiyonu dizii veya objeyi işleme tabi tutup geri gönderir. varolan diziyi değişmez.
const sayilar = [1,2,3,4,5,6];

console.log("Map islemleri");
const yeniSayilar = sayilar.map(function(sayi){
    return sayi*2;
});

console.log(sayilar);
console.log(yeniSayilar);
/*************************************/
const kitaplar = [
    {adi:'1', sayfaSayisi :30},
    {adi:'2', sayfaSayisi :40},
    {adi:'3', sayfaSayisi :50},
];

const sayfa = kitaplar.map(function(kitap){
    return kitap.sayfaSayisi;
})

console.log(sayfa);


//Filter veri kaynağında istenilen şekilde filtreleme yapar
console.log("Filter işlemi");
const bitkiler = [
    {ad:"Üzüm", tur:"meyve"},
    {ad:"çilek", tur:"meyve"},
    {ad:"Muz", tur:"meyve"},
    {ad:"Ispanak", tur:"sebze"},
    {ad:"Kereiz", tur:"sebze"},
];

function meyveleriBul(){
    const geciciDizi = [];
    for (let i = 0 ; i< bitkiler.length ; i++)
    {
        if (bitkiler[i].tur === "meyve") {
            geciciDizi.push(bitkiler[i]);
        }
    }
    return geciciDizi;
};

function SebzeleriBul(){
    const geciciDizi = [];
    for (let i = 0 ; i< bitkiler.length ; i++)
    {
        if (bitkiler[i].tur === "sebze") {
            geciciDizi.push(bitkiler[i]);
        }
    }
    return geciciDizi;
};
console.log(meyveleriBul());
console.log(SebzeleriBul());
//kısa filter ile yazımı
const sebze = bitkiler.filter((bitki)=> bitki.tur === "sebze");
const meyve = bitkiler.filter((bitki)=>bitki.tur==="meyve");
console.log("Filter");
console.log(sebze);
console.log(meyve);


//find Metodu 
const kisiler = [ 
    {id: 1, ad : "hasan11"},
    {id: 11, ad : "hasan12"},
    {id: 111, ad : "hasan13"},
    {id: 1111, ad : "hasan14"},
    {id: 11111, ad : "hasan15"},
    {id: 2, ad : "hasan21"},
    {id: 22, ad : "hasan22"},
    {id: 222, ad : "hasan23"},
    {id: 2222, ad : "hasan24"},
];

const gelen = kisiler.find((kisi)=> kisi.ad === "hasan24");
console.log(gelen);

//high order ile
const bulma = function(kisi,callback){
    const geciciDizi = [];
    for(let i = 0 ; i < kisi.length ; i++)
    {
        if(callback(kisi[i]))
        {
            geciciDizi.push(kisi[i]);
        }
    }
    console.log("Kendi fonksiyonum");
    console.log(geciciDizi);
};

const sonuc = bulma(kisiler,function(eleman){
    if(eleman.ad === "hasan24")
    {
        return true;
    }
    else
        return false;
});



//every some metodu bir şarta göre kontrol edecek tüm hepsi bu şarta uyarsa true döner
const sayilar1 = [1,2,3,4,5,6];

const sonucevery = sayilar1.every(function(sayi){
    return sayi < 10;
});
console.log(sonucevery);

const sonucSome = sayilar1.some(function(sayi){
    return sayi > 10;
});
console.log(sonucSome);


//reduce 
console.log("Reduce");
const sayilarReduce = [11,22,33,44,55];

const sayiTop = sayilarReduce.reduce(function(toplam,cur,index){
    console.log(toplam,cur,index); // 0 11 0 | 11 22 1 | 33 33 2 | 66 44 3 | 110 55 4 
    return toplam = toplam +cur;
},0);

console.log(sayiTop);

//reduce map 
const YeniDiziReduce = sayilarReduce.reduce(function(sonHal,oAnkiDizi){
    sonHal.push(oAnkiDizi*5);
    return sonHal;
},[]);
console.log(YeniDiziReduce);

//reduce filter
const FilterReduce = sayilarReduce.reduce(function(saglayan,deger){
    if(deger > 35)
        saglayan.push(deger);
    return saglayan;
},[]);
console.log(FilterReduce);









