let div1 = ['Kyiv','Dnipro','Lviv','Lutsk','Herson'];
let div2 = [1,2,3];

let ul1 = document.querySelector('#ul1');
let ul2 = document.querySelector('#ul2');

div1.forEach(function(element, i) {      
    ul1.insertAdjacentHTML('beforeend',`<li >${element}
    <input id="point${i}" type="button" value="x"></li>`);
 });
 
div2.forEach(function(element, i) {      
    ul2.insertAdjacentHTML('beforeend',`<li >${element}
<input id="number${i}" type="button" value="x"></li>`)
});