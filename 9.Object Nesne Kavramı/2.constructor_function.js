function Ogrenci(ad,yas,evlilik,okul){
    this.isim = ad;
    this.yasi = yas;
    this.evlilikDurumu = evlilik;
    this.okulu = okul;
    this.bilgileriGoster = function(){
        return `isim ${this.isim} yasım ${this.yasi} ve okulum ${this.okulu}`;
    }
};

//örnekleme işlemi
//1.yeni bir obje oluşturur örnekler
//2. return yapmaya gerek yok 
//3.this kelimesini o anki oluşturulan nedneye bağlar

const yunus = new Ogrenci("yunus",21,false,"ege Universitesi");
console.log(yunus);
console.log(yunus.constructor);//kurucu metodu verir

const yeni = new yunus.constructor('yeni',45,true,"fırat Universitesi");
console.log(yeni);



const fonk = function (){};
console.log(fonk.constructor());//çalıştırıp oluşturur

//array fınction ve objeler kurucu metodlara eriştiğinden birer objelerdir