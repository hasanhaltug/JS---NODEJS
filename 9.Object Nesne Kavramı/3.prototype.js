//Prototype property
//JS prototipleme miras modelini kullanır
//Otomotik olarak sahip olduğu bilgileri belirtmekte kullanılır

//Her eklenen bunları içerir şekilde oluşturulacak
//Meselan map function tanımlı protype şeklinde hemen erişiyoruz

Ogrenci.prototype.okul="Gazi Üniversitesi";
Ogrenci.prototype.bilgileriGoster = function(){
    return `ismim ${this.isim} yaşım ${this.yas} ve okulum ${this.okul}`;
}



function Ogrenci (ad,yas,evlilik){
    this.isim = ad;
    this.yas = yas;
    this.evliMi = evlilik;
}

const emre = new Ogrenci("emre",23,false);

console.log(emre.bilgileriGoster());
console.log(emre);

//Prototype verilerine ulaşmak için 
console.log(emre.constructor.prototype);
console.log(Object.getPrototypeOf(emre));



//ezme işlemi 
Ogrenci.prototype.toString = function(){
    return "ogrenci yazzdırılacak";
}
console.log(emre);







