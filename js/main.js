
// varriabili
const interaction = 100 ;
const start = 0;
const fizz = 3;
const fizzWord = "Fizz";
const Buzz = 5;
const buzzWord = "Buzz";


for(let i = start; i <= interaction; i++){

    
    if((i%fizz === 0) && (i%Buzz === 0)){
        //se multipli di 3 e di 5
        console.log(i + ". " + fizzWord + buzzWord);
    } else if(i%Buzz === 0){
        //se multipli di 5
        console.log(i + ". " + buzzWord);
    } else if (i%fizz === 0){
        // se multipli di 3
        console.log(i + ". " + fizzWord);
    } else {
        //tutti gli altri
        console.log(i + ".");
    };
};