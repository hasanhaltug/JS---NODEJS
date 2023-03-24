//Asal oluşturma
let deger = parseInt(prompt("Bir sayi giriniz:"));
let gosterilecek = ""
for(let i=2; i<=deger;i++)
{
    let asalmi = true;
    for(let j =2 ; j<i; j++)
    {
        if(i%j==0)
        {
            asalmi = false;
            break;
        }
    }
    
    if(asalmi == true)
    {
        gosterilecek=gosterilecek + " " + i;
        
    }
}
console.log(gosterilecek);