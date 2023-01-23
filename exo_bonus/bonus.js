//mettre des nombres 

//  récuprere les nombres faire la sommes

// si nbr est paire faire -1

//récupérer 
let firstNumber = 23;
let lastNumber = 42;
let somme = document.getElementById("result")



for (i = 2; i<30; i++){
    result = firstNumber + lastNumber;
    firstNumber = lastNumber;
    if (result%2 === 0){
        result = result - 1
   }
    lastNumber = result;
   
   console.log(i + " " + result);

}
somme.innerText = result;
