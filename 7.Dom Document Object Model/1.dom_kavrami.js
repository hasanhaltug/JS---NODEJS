let deger;
deger = window;
deger = document;//html kodlarına erişimi sağlar
deger = document.all.length;
deger = document.all;
deger = document.all[6];
deger = document.all;
let dizi = Array.from(deger);

dizi.forEach(element => {
    console.log(element);
});

deger = document.body;
deger = document.head;
deger = document.domain;
deger =document.URL;
deger = document.contentType;

deger = document.forms[0].id;
deger = document.links[0].className;
deger=document.images[0].src;

console.log("**************");
console.log(deger);