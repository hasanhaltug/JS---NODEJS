let sayi = 5;
while (sayi < 15) {

    console.log(sayi);
    sayi += 2;
}


sayi = 7;
do {
    console.log("Do meerhaba " + sayi);
    sayi += 2;
} while (sayi < 25);

//break döngüyü kırmaya yarar
for (let i = 0; i < 50; i++) {
    if (i == 12) {
        break;
    }
    console.log("Break kullanımı " + i);
}

//continue o değeri atlayıp bir sonrakinden devam eder
for (let i = 0; i < 20; i++) {
    if (i == 15) { continue }
    console.log(i);
}