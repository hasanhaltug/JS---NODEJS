console.log(document.getElementById('Baslik'));
console.log(document.getElementById("Baslik").className);
const baslik = document.getElementById("Baslik");

//still değiştirme
baslik.style.backgroundColor="red";
baslik.style.color="white";
baslik.style.padding = "2rem";

//içerik
baslik.textContent = "Yeni Başlık";
baslik.innerText = "Yeni Başlıkkkkk";
baslik.innerHTML = "<img src='https://source.unsplash.com/100x100'>"

let gelen = document.querySelector('h2');//HTMl kodunun elementini getirir.

//************seçici************** */
//'#liste'  bu işlem id seçer
//'.liste-item' bu işlem class seçer
//'ul li'
//'.list.list-google'


console.log(gelen);

const myListe = document.querySelector('li');
myListe.style.color = 'red';
document.querySelector('li:last-child').style.color = 'blue'; //son elemanı seçer
document.querySelector('li:nth-child(2)').style.color = 'yellow'; //seçim indeksi ile seçme
document.querySelector('li:nth-child(3)').style.color = "green";
document.querySelector('li:nth-child(odd)').style.color = "purple";
document.querySelector('li:nth-child(even)').style.color = "grey";

//Çoklu seçim 
const linkler = document.getElementsByClassName("link");
console.log(linkler[0]);//
linkler[0].style.color = "red";
linkler[1].style.backgroundColor = "#ccc";
linkler[2].textContent = "Yeni metin";

console.log(document.querySelector('ul').getElementsByClassName('liste-item'));//önemli 

const dizi = Array.from(linkler);
const dizi1 = Array.from(linkler);
dizi.forEach(item => {
    console.log(item);
})

console.log("***************");
dizi1.reverse();//tersine çevirir.
dizi1.forEach(item => {
    console.log(item);
});


const listeElemanları = document.getElementsByTagName('h1');
console.log(listeElemanları);

console.log("*********************");

const agetir = document.getElementsByClassName('link');
console.log(agetir);







