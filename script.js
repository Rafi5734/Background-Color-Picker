const main = document.getElementById("main");
const mainPageId = document.getElementById("main-page-id");
const headerId = document.getElementById("page-header-id");
const btnId = document.getElementById("btn-id");
const colorId = document.getElementById("color-id");

// program to get a random item from an array

function getRandomItem(arr) {
    // get random index value
    const randomIndex = Math.floor(Math.random() * arr.length);

    // get random item
    const item = arr[randomIndex];

    return item;
}

btnId.addEventListener("click", function () {
    let array = ["red", "green", "blue", "pink", "purple", "olive"];
    const result = getRandomItem(array);
    mainPageId.innerHTML = `
    <h1 class="page-header" id="page-header-id">
                Background Color is: <span id="color-id">${result}</span>
            </h1>

    `;
    if (result === "green") {
        main.style.backgroundColor = "green";
    } else if (result === "blue") {
        main.style.backgroundColor = "blue";
    } else if (result === "red") {
        main.style.backgroundColor = "red";
    } else if (result === "pink") {
        main.style.backgroundColor = "pink";
    } else if (result === "purple") {
        main.style.backgroundColor = "#800080";
    } else if (result === "olive") {
        main.style.backgroundColor = "#808000";
    }
});
