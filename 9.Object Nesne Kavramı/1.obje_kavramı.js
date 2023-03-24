const hasan = {
    ad: "Hasan",
    soyad : "Altuğ",
    yas: 23,
    evliMi : false,
    sevdigiRenkler : ["kırmızı","Siyah"],
    adres : {
        il : "Elazığ",
        plaka :23
    },
    bilgileriSöyle : function (){
        return 'Benim adım Hasan Yaşım 23';
    }, 
    ['full-name']:'Hasan Altuğ',
};

const emre = {
    ad: "emre",
    soyad : "altunbilek",
    yas: 32,
    evliMi : false,
    sevdigiRenkler : ["kırmızı","Siyah"],
    adres : {
        il : "Elazığ",
        plaka :23
    },
    bilgileriSöyle : function (){
        return `Benim adım ${this.ad} Yaşım ${this.yas}`;
    }, 
    ['full-name']: 'emre altunbilek',
};



console.log(hasan.sevdigiRenkler[0]);
console.log(hasan.bilgileriSöyle());
console.log(hasan['full-name']);
console.log(emre.bilgileriSöyle());
console.log(emre['full-name']);

//değişiklikler
emre.yas = 34;
emre.okul = "ege üniversitesi";//ekleme işlemi yapar ama tavsiye edilmez obje taslağı bozulur
console.log(emre.okul);
delete emre.okul;
console.log(emre.okul);

console.log("*****************************");


//factory function
function createOgrenci(ad,yas,evlilik,okul){
    return{
        isim:ad,
        yas:yas,
        evliMi:evlilik,
        okuduguOkul :okul,
        //method
        bilgileriGoster:function(){
            return `ismim ${this.isim} yaşım ${yas} ve okulum ${okul}`;
        }
    }
}

const kadir = createOgrenci('kadir',20,false,'odtu');
const rakif = createOgrenci('rakif',23,true,'gazi');

console.log(kadir.bilgileriGoster());














