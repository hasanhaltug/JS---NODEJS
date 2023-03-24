let sayi =Math.round( Math.random()*100);
console.log(sayi);
let kullanici = parseInt(prompt("Sayıyı tahmin ediniz:"))
let rakam1=Math.floor(sayi/10);
let rakam2=sayi%10;
let rakam3=Math.floor(kullanici/10);
let rakam4=kullanici%10;
if(sayi==kullanici)
{
    console.log("Tebrikler 10000TL kazandınız");
}

else if(rakam1==rakam4 && rakam2==rakam3)
{
    console.log("Tebrikler 5000TL kazandınız");
}

else if(rakam1==rakam3 || rakam2==rakam4)
{
    console.log("Tebrikler 1000TL kazandınız"); 
}
else
{
    console.log("Yanlış tahmin");
}