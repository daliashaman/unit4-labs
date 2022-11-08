// let clickNumbers = document.querySelector("#numbers");

// clickNumbers.addEventListener('click', showNumbers);

// function showNumbers(numbers){
//     numbers.preventDefault();
// }

    // let numbers = document.getElementById("number-page");
    // numbers.style.display = "block";
    // console.log(numbers);

// let lettersHidden = document.getElementById("letter-page");
//     lettersHidden.preventDefault();

// let hideLetters = document.querySelector("#letters");

// clickLetters.addEventListener('click', letterHidden)
// function lettersHidden(hidden){
// hidden.style.display = "none";
// }

document.getElementById("numbers").onclick = function() {
    document.getElementById("letter-page").style.display = "none";

    let showNumbers = document.getElementById("number-page");
    showNumbers.preventDefault();

    console.log(showNumbers);
}