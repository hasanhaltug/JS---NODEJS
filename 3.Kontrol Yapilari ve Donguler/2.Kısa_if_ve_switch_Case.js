let a=10,b=5,c=0;
if(a>b){
    c=a+b;
}else{
    c=a-b;
}
console.log("c degeri : "+ c);
//Kısa kullanım
c=(a>b)?(a+b):(a-b);
console.log("2.c değeri : " + c);

let kullanici=parseInt(prompt("Kullanici deger girsin:"));
switch(kullanici)
{
    case 1: console.log("Pazartesi"); break;
    case 2: console.log("salı"); break;
    case 3: console.log("çarşamba"); break;
    case 4: console.log("perşembe"); break;
    case 5: console.log("cuma"); break;
    case 6: console.log("cumartesi"); break;
    case 7: console.log("pazar"); break;
    default: console.log("Yanlış deger girildi"); break;  
}