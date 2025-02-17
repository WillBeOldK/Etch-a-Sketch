let gridContainer = document.querySelector(".grid-container");
let numberOfSquare = 0;
// create small squares in grid
do{
 numberOfSquare = +prompt("Enter the number of squares you want");
}
while (numberOfSquare < 0 || numberOfSquare > 100);
for (let i = 0 ; i < numberOfSquare ** 2; i ++){
    let square = document.createElement("div");
    square.setAttribute("style",
        `width : ${960 / numberOfSquare - 4 }px;
        height : ${600 / numberOfSquare - 4 }px;
        border : solid 2px black;
     
        `);
    square.addEventListener("mouseover",()=>{
        square.setAttribute("style",
        `width : ${960 / numberOfSquare - 4 }px;
        height : ${600 / numberOfSquare - 4 }px;
        border : solid 2px black;
        background-color:red;
        `);
        
    })
   
    gridContainer.appendChild(square);
}