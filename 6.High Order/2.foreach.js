let sayilar = [1,2,3,4,5,6];

sayilar.forEach(function(sayi){
    console.log(sayi);
})

sayilar.forEach(ikiparrametre)

function ikiparrametre (sayi,index)
{
    console.log(sayi,index);
}

console.log("*******************");

//kendi foreachimiz
function diziyiYazdir (dizi,callback)
{
    for(let i = 0 ; i < dizi.length ;i++)
    {
        callback(dizi[i],i);
    }
}

//callback fonksiyonumuz.
diziyiYazdir(sayilar,function(deger,index){
    console.log("Deger "+deger+" "+"İndex "+index);
})