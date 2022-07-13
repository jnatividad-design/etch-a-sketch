const etchContainer = document.querySelector('#etchContainer')
    console.log(document.querySelector('#etchContainer') !==null)
const userInput = document.getElementById('userInput')
console.log(document.getElementById('userInput') !==null)
const reset = document.getElementById('reset')
console.log(document.getElementById('userInput') !==null)
const submit = document.getElementById('submit');
console.log(document.getElementById('submit') !==null)

//For loop to make default canvas
function createCanvas (){  
for (i=0; i<256; i++){
    const div = document.createElement("div");
    div.classList.add("square");
    etchContainer.appendChild(div);
}
}
//Event Listener to change colors after hover effect
const square= document.querySelector('div'); 
square.addEventListener('mouseover', function(e) {
    e.target.classList.replace('square','color');
});

//Update grid functionality
function updateCanvas () {
    etchContainer.innerHTML='';
    etchContainer.style.setProperty(
        'grid-template-columns',
        `repeat(${userInput.value},1fr)`
    );
    etchContainer.style.setProperty(
        'grid-template-rows',
        `repeat(${userInput.value},1fr)`
    );
    for (let i=0; i < userInput.value* userInput.value;i++) {
        const div = document.createElement("div");
    div.classList.add("square");
    etchContainer.appendChild(div);
    }
}

submit.addEventListener('click', updateCanvas)


//Reset functionality
reset.addEventListener('click', function() {
    etchContainer.innerHTML="";
    userInput.value='';
    etchContainer.style.setProperty('grid-template-columns', `repeat(16, 1fr)`);
    etchContainer.style.setProperty('grid-template-rows', `repeat(16,1fr)`);
    console.log('reset button clicked')
    createCanvas()
});

createCanvas()