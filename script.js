let size = 16;

const input = document.querySelector(".input");
const container = document.querySelector(".container");
const reset = document.querySelector(".reset");

let row = [];
let box =[];

for (let i = 0; i<size; i++){
    row[i] = document.createElement("div");
    row[i].classList.add(`row`);
    for (let j = 0; j<size; j++){
        box[[i, j]] = document.createElement("div");
        box[[i, j]].classList.add("boxes");
        row[i].appendChild(box[[i, j]]);
    }
    container.appendChild(row[i]);
}

input.addEventListener("click", function inputSize() {

    for (let i = 0; i<size; i++){
        if (container.contains(row[i])) {
            container.removeChild(row[i]);
        }
    }

    const oldSize = size;

    size = prompt("Please enter the size of grid (1-100):");

    if (size>100){
        inputSize();
    }

    if (!(size)) {
        size = oldSize;
    }

    if (size<=100) {

        for (let i = 0; i<size; i++){
            row[i] = document.createElement("div");
            row[i].classList.add(`row`);
            for (let j = 0; j<size; j++){
                box[[i, j]] = document.createElement("div");
                box[[i, j]].classList.add("boxes");
                row[i].appendChild(box[[i, j]]);
            }
            container.appendChild(row[i]);
        }       
    }

    addColor();
    resetColor();
})

function addColor() {
    for (let i =0; i<size; i++){
        for (let j = 0; j<size; j++) {
            box[[i, j]].addEventListener("mouseover", () => {
                const color1 = Math.floor(Math.random()*255);
                const color2 = Math.floor(Math.random()*255);
                const color3 = Math.floor(Math.random()*255);
                box[[i, j]].style.background = `rgb(${color1}, ${color2}, ${color3})`;
            });
        }
    }
}

function resetColor() {
    reset.addEventListener("click", () => {
        for (let i =0; i<size; i++){
            for (let j = 0; j<size; j++) {
                box[[i, j]].style.background = "white";
            }
        }
    });
}

addColor();
resetColor();

    

    


    









