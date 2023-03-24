const yeniGorev = document.querySelector('.input-gorev');
const yeniGorevEkleBtn = document.querySelector('.btn-gorev-ekle');
const gorevListesi = document.querySelector('.gorev-listesi')

yeniGorevEkleBtn.addEventListener('click',gorevEkle);
gorevListesi.addEventListener('click',gorevSilTamamla);
document.addEventListener('DOMContentLoaded',localStorageOku);


function gorevEkle(e){
    e.preventDefault(); // başka sayfaya post olmayı engeller
    if(yeniGorev.value.length > 0){

        gorevItemOlustur(yeniGorev.value);
        localStorageKayit(yeniGorev.value);
        yeniGorev.value = '';
    }
    else{
        alert('Boş görev tanımı olmaz');
    }

}

function gorevItemOlustur(gorev){

    //div oluşturma
    const gorevDiv = document.createElement('div');
    gorevDiv.classList.add('gorev-item');

    const gorevLiOlustur = document.createElement('li');
    gorevLiOlustur.classList.add('gorev-tanim');
    gorevLiOlustur.innerText = gorev;
    gorevDiv.appendChild(gorevLiOlustur);

    //tammalandı butonu oluşturma
    const tamamlandiBtn = document.createElement('button');
    tamamlandiBtn.classList.add('gorev-btn');
    tamamlandiBtn.classList.add('gorev-btn-tamamlandi');
    tamamlandiBtn.innerHTML='<i class="far fa-check-square"></i>';
    gorevDiv.appendChild(tamamlandiBtn);

    //silme butonu oluşturma
    const silBtn = document.createElement('button');
    silBtn.classList.add('gorev-btn');
    silBtn.classList.add('gorev-sil');
    silBtn.innerHTML='<i class="far fa-trash-alt"></i>';
    gorevDiv.appendChild(silBtn);

    //ul ye oluşturulan div ekleme
    gorevListesi.appendChild(gorevDiv); 
}

function gorevSilTamamla(e){
    const tiklanilan = e.target;
    if(tiklanilan.classList.contains('gorev-btn-tamamlandi')){

        tiklanilan.parentElement.classList.toggle('gorev-tamamlandi')
    }

    if(tiklanilan.classList.contains('gorev-sil')){

        if(confirm('Are you sure?'))
        {
            tiklanilan.parentElement.classList.toggle('kaybol');//toggle varsa siliyor yoksa ekliyor
            const silinecek = tiklanilan.parentElement.children[0].innerText;
            
            localStorageSil(silinecek);

            tiklanilan.parentElement.addEventListener('transitionend',function(){
                tiklanilan.parentElement.remove();
            });    
        }
            
    }
}

function diziyeCevir (){
    let gorevler;
    if(localStorage.getItem('gorevler') === null)
    {
        gorevler = []
    }
    else
    {
        gorevler = JSON.parse(localStorage.getItem('gorevler'));
    }
    return gorevler;
}

function localStorageKayit(yeniGorev)
{
    let  gorevler = diziyeCevir();
    gorevler.push(yeniGorev);
    localStorage.setItem('gorevler',JSON.stringify(gorevler));
}

function localStorageOku(){
    let gorevler = diziyeCevir();

    gorevler.forEach(element => {
        gorevItemOlustur(element);      
    });
}

function localStorageSil(gorev)
{
    let gorevler = diziyeCevir();

    //splice ile silme
    const silinecekElemanIndex = gorevler.indexOf(gorev);
    gorevler.splice(silinecekElemanIndex,1);
    localStorage.setItem('gorevler',JSON.stringify(gorevler));

}

