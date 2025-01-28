var mouseIsDown = false;
const container = document.querySelector(".container");
const newGridBtn = document.querySelector("#newGridBtn");

newGridBtn.addEventListener("click", function (e) {
    container.replaceChildren();
    var gridSize = Number(prompt("Enter a grid size (Between 10 and 100)"));
    while (gridSize > 100 || gridSize < 10) {
        gridSize = Number(prompt("Invalid. Please select a grid size between 10 and 100"));
    }
    generateGrid(gridSize);
})

function generateGrid(gridSize){
    const height = 480/gridSize;
    for (let i = 0; i < gridSize; i++){
        const row = document.createElement("div");
        row.classList.toggle("row");

        for (let j = 0; j < gridSize; j++){
            const col = document.createElement("div");

            col.addEventListener("mousedown", function (e) {
                if (e.type == "mousedown"){
                    col.style.backgroundColor = "black";
                    mouseIsDown = true;
                }
            });

            col.addEventListener("mouseup", function (e) {
                if (e.type == "mouseup"){
                    col.style.backgroundColor = "black";
                    mouseIsDown = false;
                }
            });

            col.addEventListener("mouseenter", function (e) {
                if (mouseIsDown){
                    col.style.backgroundColor = "black";
                }
            });

            col.classList.toggle("col");
            col.style.height = height - 1 + "px";
            row.appendChild(col);
        }
        container.appendChild(row);
    }
}

window.onload = generateGrid(64);
window.addEventListener("mousedown", function (e){
    mouseIsDown = true;
})
window.addEventListener("mouseup", function (e){
    mouseIsDown = false;
})

