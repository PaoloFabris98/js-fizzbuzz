
// varriabili
const interaction = 100 ;
const start = 0;
const fizz = 3;
const fizzWord = "Fizz";
const Buzz = 5;
const buzzWord = "Buzz";


const row = document.getElementById("main-row");


for(let i = start; i <= interaction; i++){
    if((i%fizz === 0) && (i%Buzz === 0)){
        //se multipli di 3 e di 5
        console.log(i + ". " + fizzWord + buzzWord);
        row.innerHTML += `<div class="col-2 bg-success p-2 text-white bg-opacity-75 rounded-pill border ">
                            ${i} ${fizzWord}${buzzWord}
                        </div>`
    } else if(i%Buzz === 0){
        //se multipli di 5
        console.log(i + ". " + buzzWord);
        row.innerHTML += `<div class="col-2 col-2 bg-success p-2 text-white bg-opacity-75 rounded-pill border ">
                            ${i} ${buzzWord}
                        </div>`
    } else if (i%fizz === 0){
        // se multipli di 3
        
        console.log(i + ". " + fizzWord);
        row.innerHTML += `<div class="col-2 col-2 bg-success p-2 text-white bg-opacity-75 rounded-pill border ">
                            ${i} ${fizzWord}
                        </div>`
    } else {
        //tutti gli altri
        console.log(i + ".");
        row.innerHTML += `<div class="col-2 col-2 bg-success p-2 text-white bg-opacity-75 rounded-pill border ">
                            ${i}
                        </div>`
    };

};