names = ['vasa','peta','sasha','anna','feda','kata','dima','gena','fekla'];

//console.log(names);
let list = document.querySelector('#list')

     names.forEach(function(element, i, names) {
        //list.innerHTML += `<li><a onclick="render()">${element}</a></li>`;
            
        list.insertAdjacentHTML('beforeend',`<li><a id="point${i}" onclick="alert('вы выбрали '+this.innerHTML)">${element}</a></li>`);
    
    });
// let ch = document.querySelectorAll("a");
// console.log(ch[4].innerHTML)
// function render() {
//     //alert(this.element.outerText);
//     console.log(this.innerHTML);
// }
