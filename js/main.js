
// varriabili
const buttonSubmit = document.getElementById("submit");
const boxs = document.getElementById("main-row");
const allert = document.getElementById("Alert");
const otherStats = document.getElementById("other-stats");
let fizz = document.getElementById("divisore1");
let Buzz = document.getElementById("divisore2");
const resetButton = document.getElementById("reset");

const start = 0;

let interaction = document.getElementById("itterations") ;
const fizzWord = "Fizz";
const buzzWord = "Buzz";

buttonSubmit.addEventListener("click", function (event) {
    event.preventDefault();

    let it = Number(interaction.value);
    let num1 = Number(fizz.value);
    let num2 = Number(Buzz.value);
    let stats1 = 0;
    let stats2 = 0;
    let stats3 = 0;
    let stats4 = 0;

    if (isNaN(it) || isNaN(num1) || isNaN(num2)) {
        boxs.classList.add("d-none");
        allert.classList.remove("d-none");
        allert.innerHTML = `
        In tutte e 3 le caselle devono esserci solo numeri.
        `;
    } else {
        allert.classList.add("d-none");
        boxs.classList.remove("d-none");
        boxs.innerHTML = ''; // Reset contenuto per evitare duplicati
        for (let i = start; i <= it; i++) {
            boxs.innerHTML += `<div class="col-2" id="inserted-case-${i}"><div class="bg-success p-3 text-white text-center rounded-pill mt-2 border" id="inserted-${i}"></div></div>`;
            let inserted = document.getElementById(`inserted-${i}`);
            if ((i % num1 === 0) && (i % num2 === 0)) {
                // se multipli di 3 e di 5
                stats1++;
                console.log(i + ". " + fizzWord + buzzWord);
                inserted.classList.add("bg-info");
                inserted.innerHTML += `${i} ${fizzWord}${buzzWord}`;
            } else if (i % num2 === 0) {
                // se multipli di 5
                stats2++;
                console.log(i + ". " + buzzWord);
                inserted.classList.add("bg-dark");
                inserted.innerHTML += `${i} ${buzzWord}`;
            } else if (i % num1 === 0) {
                // se multipli di 3
                stats3++
                console.log(i + ". " + fizzWord);
                inserted.classList.add("bg-warning");
                inserted.innerHTML += `${i} ${fizzWord}`;
            } else {
                // tutti gli altri
                stats4++
                console.log(i + ".");
                inserted.innerHTML += `${i}`;
            };
        };
        
        otherStats.innerHTML += `
            <div class="col-12 bg-black text-center text-white">Ci sono: ${stats1} numeri, divisibili sia per ${num1} che per ${num2}.</div>
            <div class="col-12 bg-black text-center text-white">Ci sono: ${stats2} numeri, divisibili per ${num1}.</div>
            <div class="col-12 bg-black text-center text-white">Ci sono: ${stats1} numeri, divisibili per ${num2}.</div>
            <div class="col-12 bg-black text-center text-white">Ci sono: ${stats1} numeri, non divisibili.</div>
        `;
        
               
    };
    
});

resetButton.addEventListener("click", function () {
    interaction.value = '';
    fizz.value = '';
    buzz.value = '';
    boxs.innerHTML = '';
    otherStats.innerHTML = '';
    allert.classList.add("d-none");
});

stats1 = 0;
stats2 = 0;
stats3 = 0;
stats4 = 0;