const container = document.querySelector(".container");
const btn = document.querySelector("#btn");

btn.addEventListener("click", () => {
    let gridNum = prompt("Enter a number for a new grid");
    for (let i = 1; i <= gridNum ** 2; i++) {
        const div = document.createElement("div");
        div.classList.add("pixel");
        container.appendChild(div);
        div.style.width = `${100 / gridNum}%`;
        div.style.height = `${100 / gridNum}%`;
    }
})





// div.addEventListener("mouseover", (e) => {
//     e.target.setAttribute("style", "background-color: rgb(157, 203, 230)");
// })