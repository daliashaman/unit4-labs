const form = document.querySelector("form");
const coinContainer = document.querySelector("section");

form.addEventListener("submit", (e) => {
    e.preventDefault();

let data = new FormData(form)
let n = data.get("amount")
let coins = data.get("cointype")
for (let i = 0; i < n; i++) {
    coinContainer.innerHTML += `<div class=${coins}></div>`
    }
})

coinContainer.addEventListener('click', function coins(event){
    event.target.remove();
});