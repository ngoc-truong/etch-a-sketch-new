
let numOfColumns = 100;

function createCanvas(columns){
    const container = document.querySelector("#container");
    container.setAttribute("style", `grid-template-columns: repeat(${columns}, 1fr)`);

    let rows = Math.floor(columns / 2);
    
    for (i = 0; i < columns * rows; i++){
        let div = document.createElement("div");
        div.classList.add("canvas");  
        container.appendChild(div);
    }
}

function hoverOverCanvas(){
    let divs = document.querySelectorAll(".canvas");

    divs.forEach((div) => {
        div.addEventListener("mouseover", (e) => {
            div.classList.add("hover");
        });
    });
}

function removeCanvas(){
    let parent = document.querySelector("#container");
    let divs = document.querySelectorAll(".canvas");
    divs.forEach((div) => {
        parent.removeChild(div);
    });
}

createCanvas(numOfColumns);
hoverOverCanvas();

const resetButton = document.querySelector("#reset-button");
resetButton.addEventListener("click", (e) => {
    removeCanvas();
    createCanvas(100);
    hoverOverCanvas();
});

const setColumnsButton = document.querySelector("#set-column-button");
setColumnsButton.addEventListener("click", (e) => {
    let columns = prompt("How many columns do you want (between 10-150)?");

    while(columns < 10 || columns > 150){
        columns = prompt("Please provide an integer between 10-150.");
    }

    removeCanvas();
    createCanvas(columns);
    hoverOverCanvas();
})




