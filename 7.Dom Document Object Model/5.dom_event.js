// addEventListener('click',function)

//Mouse Event
document.querySelector('.link') .addEventListener('click',tiklanma);
document.querySelector('.link') .addEventListener('dblclick',tiklanma);

document.querySelector('.link') .addEventListener('mousedown',tiklanma);
document.querySelector('.link') .addEventListener('mouseup',tiklanma);

document.querySelector('.container') .addEventListener('mouseenter',tiklanma);
document.querySelector('.container') .addEventListener('mouseleave',tiklanma);

document.querySelector('.container') .addEventListener('mouseover',tiklanma);
document.querySelector('.container') .addEventListener('mouseout',tiklanma);

document.querySelector('.container') .addEventListener('mousemove',mousekonum);

function tiklanma(e){
    let deger= e.target;
    deger = e.type;
    //console.log(deger);
    //console.log("click event");
    e.preventDefault();
}

function mousekonum (e){
    document.querySelector('.yazi').textContent = `X: ${e.clientX} Y:${e.clientY}`;
    document.querySelector('.yazi').textContent = `R: ${e.clientX % 255}, G: ${e.clientY % 255}, B: ${(e.clientX + e.clientY) % 255}`;
    document.querySelector('.container').style.backgroundColor = `rgb(${e.clientX % 255},${e.clientY % 255},${(e.clientX + e.clientY) % 255})`;
}

//Form ve Klavye eventleri

const myForm = document.querySelector('#form');
const isim = document.querySelector('#ad');
const sehir = document.querySelector('#sehir');
myForm.addEventListener('submit',eventYakala);

isim.addEventListener('keydown',eventYakala);
isim.addEventListener('keyup',eventYakala);
isim.addEventListener('keypress',eventYakala);
isim.addEventListener('focus',eventYakala);
isim.addEventListener('blur',eventYakala);
isim.addEventListener('cut',eventYakala);
isim.addEventListener('paste',eventYakala);
isim.addEventListener('input',eventYakala);
sehir.addEventListener('change',eventYakala);


function eventYakala(e){
    console.log(e.target.value);
    //document.querySelector('.link').textContent = isim.value;
    console.log('Event adi : '+ e.type);
    e.preventDefault();

}

//Event bubbling ve delegation
document.querySelector('.parent').addEventListener('click',e=>{
    console.log('parent');
});

document.querySelector('.child').addEventListener('click',e=>{
    console.log('child');
});

document.querySelector('.item').addEventListener('click',e=>{
    console.log('item');
});

//Önemli
document.querySelector('.parent').addEventListener('click',e=>{
    if(e.target.classList.contains('item')){
        console.log('merhaba tıklandı');
    }
});



