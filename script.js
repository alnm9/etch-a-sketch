const container = document.querySelector(".container");
const btn = document.querySelector("#btn");


// btn.addEventListener("click", () => {
//     getGrid();
// })


function getGrid() {
    resetGrid();
    changeGrid();


}


function resetGrid() {
    while (container.hasChildNodes()) {
        container.removeChild(container.firstElementChild);
    }
}

function changeGrid() {
    let gridNum = prompt("Enter a number for a new grid");
    if (gridNum > 100) {
        gridNum = 100;
    }
    for (let i = 1; i <= gridNum ** 2; i++) {
        const div = document.createElement("div");
        div.classList.add("pixel");
        container.appendChild(div);
        div.style.width = `${100 / gridNum}%`;
        div.style.height = `${100 / gridNum}%`;
        div.addEventListener("mouseover", (e) => {
            e.target.style.background = randomColor();
        })
        div.addEventListener("mouseout", (e) => {
            e.target.style.background = "white";

        })
    }

}

function randomColor() {
    let color1 = Math.floor(Math.random() * 256);
    let color2 = Math.floor(Math.random() * 256);
    let color3 = Math.floor(Math.random() * 256);
    return `rgb(${color1}, ${color2}, ${color3})`
}

// container.forEach((miniDiv) => {
//     miniDiv.addEventListener("mouseover", (e) => {
//         e.target.setAttribute("style", "background-color: rgb(157, 203, 230)");
//     })
// })

