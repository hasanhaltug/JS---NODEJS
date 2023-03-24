const sayilar = [1,2,3,4,5,6,7,8,9];



function sonucuBul(sayi){
    const tek = sayilar.filter((sayi)=> sayi%2!=0);
console.log(tek);

const square = tek.map((sayi)=>  sayi**2)
console.log(square);

const result = square.reduce(function(toplam,sayi){
    if(sayi>10)
        toplam =toplam+sayi;
    return toplam;
},0);
console.log(result);
}

sonucuBul(sayilar);

function kısaVersiyon(say){
    return say.filter(sayi => sayi % 2 !== 0)
        .map(sayi => sayi**2)
        .reduce((genelToplam,sayi) => sayi > 10 ? genelToplam += sayi : genelToplam,0);
}

console.log("kısa");
console.log(kısaVersiyon(sayilar));