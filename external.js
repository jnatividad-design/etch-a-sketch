const etchContainer = document.querySelector('#etchContainer')
    console.log(document.querySelector('#etchContainer') !==null)

function createCanvas (){
for (i=0; i<256; i++){
    const div = document.createElement("div");
    div.classList.add("square");
    etchContainer.appendChild(div);
}
}

const square= document.querySelector('div'); 
square.addEventListener('mouseover', function(e) {
    e.target.classList.replace('square','color');
});

createCanvas()