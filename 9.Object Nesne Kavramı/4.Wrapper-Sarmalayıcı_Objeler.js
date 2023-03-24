const isim = "emre";
console.log(typeof isim);
console.log(isim instanceof Object);
console.log(isim.toUpperCase());
console.log(isim instanceof Object);
console.log("***********");

console.log(isim.constructor.prototype);
console.log(isim.charAt(0));


const renk =new String('kırmızı');
//Bu bize obje oluşturur premative string olmaz
console.log( renk instanceof Object);

console.log("***************Fark**************");
//Fark
const no = 5;
no.sss = 34;
const num = new Number(23);

num.eklenti = 123;

console.log(no);
console.log(no.sss);//tanımsız oldu
console.log(typeof num);
console.log(num.eklenti);