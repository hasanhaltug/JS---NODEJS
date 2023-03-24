const ekleme = document.createElement('li');

ekleme.className="liste-item";//li etiketine calss adı veriyoruz

ekleme.textContent ="Elazığ";//text değerini giriyoruz

document.querySelector('ul').appendChild(ekleme);//bu li kavramını html ekleme yapıyor appendcghild ile

document.querySelector('li:nth-child(4)').textContent="Yeni Ekleme";//seçme işi yapıp değişim işlemi apılıyor

console.log(ekleme);

//replace değişim

const yeniKBaslik = document.createElement('h6');
yeniKBaslik.id ="Id6";
yeniKBaslik.textContent ="Yeni Küçük başlık";
const oldBaslik = document.querySelector('h2');
const parentBaslik = document.querySelector('body');
parentBaslik.replaceChild(yeniKBaslik,oldBaslik);

/* Burada yapılan işlem önce değiştirmmek istenilen elemanın oluşturulmasıdır. Daha sonra değiştirilecek başlığı seçeriz
Bu değişimi hangi parentte yapacağımızı document.querySelector('body') örneğinde olduğu gibi seçeriz.
bu değim işlemini sen son replaceChild ile yeni oluşturulan ile eskiyi tutan girilerek yaparız.
*/

// const mytitle = document.querySelector('title');
// mytitle.textContent = "Değişen başlık";
// mytitle.className = "myNewTitle";
// const oldTitle = document.querySelector('title');
// const parenttitle = document.querySelector('head');
// parenttitle.replaceChild(mytitle,oldBaslik);

//remove silme işlemi
const list = document.querySelector('li');
//list.remove();//ilk li elemanını siler

//document.querySelector('ul').remove();//tamamı gider

document.querySelector('ul').removeChild(document.querySelectorAll('li')[2]);//seçilen index gider

document.querySelector('ul').removeChild(document.querySelector('li:nth-child(2)'));//seçilen index gider





