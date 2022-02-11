var currentNumberWrapper = document.getElementById('currentNumber');
var currentNumber = 0;

function incrementNumber(){
    currentNumber = currentNumber + 1;
    currentNumberWrapper.innerHTML = currentNumber; 
}

function decrementNumber(){
    currentNumber = currentNumber - 1;
    currentNumberWrapper.innerHTML = currentNumber; 
}