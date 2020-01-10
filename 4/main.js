var div = document.querySelector('.sq');

//let margLeft = sq.style.marginLeft;
//  let f = getComputedStyle(div).marginLeft;
// let down = document.querySelector('#down');
// let up = document.querySelector('#up');
//console.log(f);
let mmarginLeft = 500;
let mmarginTop = 300;

function right() {
    mmarginLeft = mmarginLeft + 10;
    div.style.marginLeft = mmarginLeft + 'px';
}

function left() {
    mmarginLeft = mmarginLeft - 10;
    div.style.marginLeft = mmarginLeft + 'px';
}

function down() {
    mmarginTop = mmarginTop + 10;
    div.style.marginTop = mmarginTop + 'px';
}

function up() {
    mmarginTop = mmarginTop - 10;
    div.style.marginTop = mmarginTop + 'px';
}