//let names = [];

let uli = document.querySelector('#uli')
//console.log(inputNames)

function insertName() {
    let inputNames = document.getElementById('name').value;
    let li = document.createElement("li");
    let text = document.createTextNode(inputNames);
    li.appendChild(text);
    uli.appendChild(li);
    li.classList.add('delete-names');
    // console.log(inputNames);
    // console.log(text);
}

function deleteName() {
    let bart = document.querySelectorAll(".delete-names");        
        uli.remove(bart);  
}
