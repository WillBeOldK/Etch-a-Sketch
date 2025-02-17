let gridContainer = document.querySelector(".grid-container");
// create small squares in grid
for (let i = 0 ; i < 16 * 16; i ++){
    let square = document.createElement("div");
    square.setAttribute("style",
        `width : ${960 / 16 - 4 }px;
        height : ${600 / 16 - 4 }px;
        border : solid 2px black;
        `);
    gridContainer.appendChild(square);
}