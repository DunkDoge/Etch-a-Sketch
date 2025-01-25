function generateGrid(gridSize){
    const container = document.querySelector(".container");
    for (let i = 0; i < gridSize; i++){
        const row = document.createElement("div");
        row.classList.toggle("row");

        for (let j = 0; j < gridSize; j++){
            const col = document.createElement("div");
            col.classList.toggle("col");
            row.appendChild(col);
        }
        container.appendChild(row);
    }
}

window.onload = generateGrid(64);

