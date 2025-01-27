var mouseIsDown = false;

function generateGrid(gridSize){
    const container = document.querySelector(".container");
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
            row.appendChild(col);
        }
        container.appendChild(row);
    }
}

function highlightCell(f) {
}

window.onload = generateGrid(64);

