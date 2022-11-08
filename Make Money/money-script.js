let moneyForm = document.querySelector(".money-form");
let coinContainer = document.querySelector(".coin-container");

moneyForm.addEventListener("submit", (e) => {
    e.preventDefault();

    let howMany = document.querySelector("#howMany").value;
    let whichCoin = document.querySelector("#whichCoin").value;

    for (let i = 0; i < howMany; i++) {
      let addCoin = document.createElement("");

      addCoin.classList.add("coin", type);
      addCoin.textContent = whichCoin;
      coinContainer.append(addCoin);
      addCoin.addEventListener("click", () => {
        addCoin.remove();
      });
    };
  });