
// varriabili
const buttonSubmit = document.getElementById("submit");
const boxs = document.getElementById("main-row");
let interaction = document.getElementById("itterations") ;
const start = 0;
let fizz = document.getElementById("divisore1");
const fizzWord = "Fizz";
let Buzz = document.getElementById("divisore2");
const buzzWord = "Buzz";


const row = document.getElementById("main-row");

buttonSubmit.addEventListener("click", function (event) {
    event.preventDefault();

    let it = Number(interaction.value);
    let num1 = Number(fizz.value);
    let num2 = Number(Buzz.value);

    for(let i = start; i <= it; i++){
        boxs.classList.remove("d-none");
        row.innerHTML += `<div class="col-2" id="inserted-case-${i}"><div class="bg-success p-3 text-white text-center rounded-pill mt-2 border" id="inserted-${i}"></div></div>`;
        let inserted = document.getElementById(`inserted-${i}`);
        if((i%num1 === 0) && (i%num2 === 0)){
            //se multipli di 3 e di 5
            console.log(i + ". " + fizzWord + buzzWord);
            inserted.innerHTML += `${i} ${fizzWord}${buzzWord}`
        } else if(i%num2 === 0){
            //se multipli di 5
            console.log(i + ". " + buzzWord);
            inserted.innerHTML += `${i} ${buzzWord}`;
        } else if (i%num1 === 0){
            // se multipli di 3
            console.log(i + ". " + fizzWord);
            inserted.innerHTML += `${i} ${fizzWord}`;
        } else {
            //tutti gli altri
            console.log(i + ".");
            inserted.innerHTML += `${i}`;
        };
    };
});