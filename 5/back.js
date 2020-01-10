let div1 = ['Kyiv','Dnipro','Lviv','Lutsk','Herson'];
let div2 = [1,2,3];

let ul1 = document.querySelector('#ul1');
let ul2 = document.querySelector('#ul2');

 div1.forEach(function(element, i, names1) {      
    ul1.insertAdjacentHTML('beforeend',`<li >${element}
    <input id="point${i}" type="button" value="x"></li>`);
 });
 div2.forEach(function(element, i, names2) {      
    ul2.insertAdjacentHTML('beforeend',`<li >${element}
    <input id="number${i}" type="button" value="x"></li>`);
    
    li = document.querySelector('li');
    //uli1.appendChild('text');
});

// let inp = document.querySelectorAll('input');
// inp.onclick = moveCity;
// function moveCity() {
    // let city = document.querySelector('#point3');
    // if (city.parentNode);
    // let oldCity = city.parentNode.removeChild(city);
  //div1.push(oldCity);

document.addEventListener('click', function(e) {
    let oldCity = (e.target);
    oldCity.parentNode.removeChild(oldCity);
    ul2.appendChild(oldCity);   
// });
// document.addEventListener('click', function(e) {;
    ul2.appendChild(oldCity);
    console.log(oldCity);   
});



