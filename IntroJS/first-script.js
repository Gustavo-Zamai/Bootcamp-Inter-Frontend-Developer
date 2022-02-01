function returnEvenValues(array){
    let evenNums = [];
    for (var i = 0; i < array.length; i++) {
        if (array[i] % 2 === 0){
            evenNums.push(array[i]);
        }else{
            console.log(`${array[i]} this number is not a even!`) 
        }
    }    
    console.log("The even numbers are: ",evenNums);
}
let array = [1,3,5,6,7,8,9,10,11];

returnEvenValues(array);