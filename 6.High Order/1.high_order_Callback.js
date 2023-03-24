let myDizi = [1,2,3];

/*
const diziyiKopyalaveIkiIleCarp = function (dizi){
    let gecicidizi = [];
    for(let i = 0 ; i<dizi.length; i++)
    {
        gecicidizi[i]=dizi[i]*2;
    }
    console.log(gecicidizi);
}

const diziyiKopyalaveIkiIleBol = function (dizi){
    let gecicidizi = [];
    for(let i = 0 ; i<dizi.length; i++)
    {
        gecicidizi[i]=dizi[i]/2;
    }
    console.log(gecicidizi);
}

const diziyiKopyalaveUcEkle = function (dizi){
    let gecicidizi = [];
    for(let i = 0 ; i<dizi.length; i++)
    {
        gecicidizi[i]=dizi[i]+3;
    }
    console.log(gecicidizi);
}

console.log(myDizi);
diziyiKopyalaveIkiIleCarp(myDizi);
diziyiKopyalaveIkiIleBol(myDizi);
diziyiKopyalaveUcEkle(myDizi);
*/


const ikiyleCarp = function(sayi)
{
    return sayi *2;
}

const ikiyeBol = function(sayi)
{
    return sayi /2;
}

const ucEkle = function(sayi)
{
    return sayi +3;
}

const diziIslemleri = function(dizi,islem)
{
    let gecicidizi = [];
    for(let i = 0 ; i<dizi.length; i++)
    {
        gecicidizi[i]=islem(dizi[i]);
    }
    console.log(gecicidizi);
}

//High order parametre olarak fonksiyon alan return olarak func donen 
//ikiylecarp ve ikiyeBol callback
diziIslemleri(myDizi,ikiyleCarp);
diziIslemleri(myDizi,ikiyeBol);
diziIslemleri(myDizi,ucEkle);

/************************************/
function adimiSoyle (ad,soyad,callback)
{
    const mesaj = "MERHABA "+ ad.toUpperCase() + " " + soyad.toUpperCase() ; 
    callback(mesaj)
}

adimiSoyle("Hasan","Altug",mesajGoster)

function mesajGoster(gelen)
{
    console.log(gelen);
}