let colours = ['black','red','blue','gold','yellow','green','pink','grey','orange','violet'];

let divColour = document.querySelector('#div-colour');

// let next = document.querySelector('next');
// let prev = document.querySelector('prev');
let indx = 0;

function nextColor() {
    indx++;
    if (indx>=colours.length) indx = 0;
    divColour.style.background = `${colours[indx]}`;
}

function prevColor() {
    indx--;
    if (indx<0) indx = colours.length -1;
    divColour.style.background = `${colours[indx]}`;
}
console.log(indx);