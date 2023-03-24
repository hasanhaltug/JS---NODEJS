//Local storagedeki veri kullanıcı elle yad a kodla silene kadar kalır 
//session storage ise browser kapanıp açılınca siilinir. 
//sadece string saklar

localStorage.setItem('ad','emre');
localStorage.setItem('yas','34');

sessionStorage.setItem('il','Ankara');

console.log(localStorage.getItem('yas'));
localStorage.removeItem('yas');

//localStorage.clear();