let baslik = document.querySelector('li');
baslik.style.color = "red";
document.querySelector('a:nth-child(odd)').style.color = "purple";

///////////////////////////////////////////////////////////////////

let deger;

const myList = document.querySelector("ul.liste");
console.log(myList);

deger = myList.children;
deger = myList.childNodes[1].nodeType;
console.log(deger);

deger = myList.lastChild;
console.log(deger);

deger = myList.firstChild;
console.log(deger);

deger = myList.lastElementChild;
console.log(deger);

deger = myList.childElementCount;

console.log(deger);

//parent 
deger =myList.parentNode;
deger = myList.parentElement.parentElement;
console.log(deger);

console.log("**************");

const myInp = document.querySelector("input").parentElement.previousElementSibling.nextElementSibling;
console.log(myInp);










