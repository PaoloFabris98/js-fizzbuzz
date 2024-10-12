
// varriabili
const interaction = 101 ;
const start = 0;
const fizz = 3;
const fizzWord = "Fizz";
const Buzz = 5;
const buzzWord = "Buzz";


const row = document.getElementById("main-row");


for(let i = start; i <= interaction; i++){
    row.innerHTML += `<div class="col-2 bg-success p-2 text-white bg-opacity-75 rounded-pill border " id="inserted-${i}"></div>`
    let inserted = document.getElementById(`inserted-${i}`)
    if((i%fizz === 0) && (i%Buzz === 0)){
        //se multipli di 3 e di 5
        console.log(i + ". " + fizzWord + buzzWord);
        inserted.innerHTML += `${i} ${fizzWord}${buzzWord}`;
    } else if(i%Buzz === 0){
        //se multipli di 5
        console.log(i + ". " + buzzWord);
        inserted.innerHTML += `${i} ${buzzWord}`;
    } else if (i%fizz === 0){
        // se multipli di 3
        console.log(i + ". " + fizzWord);
        inserted.innerHTML += `${i} ${fizzWord}`;
    } else {
        //tutti gli altri
        console.log(i + ".");
        inserted.innerHTML += `${i}`;
    };
};