const canvas = document.querySelector('#etchContainer')
    console.log(document.querySelector('#etchContainer') !==null)

function createCanvas (){
for (i=0; i<256; i++){
    const div = document.createElement('div');
    div.style.border=('1px solid black')
    div.classList.add('square');
    canvas.appendChild('div')
}
}

console.log(createCanvas)