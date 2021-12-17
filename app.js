/*
* 1. Parameters are the placeholder for the function to set value to with the argument.
* 
* 2. Return is the result of a function and Console.log is just a way to print to the console
*
* 3. The ability of a function to return values implies that you can use the returned values of functions to solve other functions to solve complex problems 
*/


//Calculate The Cube
/*function calculateCube(num) {
    return Math.pow(num, 3);
}
console.log(calculateCube(5))



//Is A Vowel
vowelArray = ["a","e","i","o","u"];
function isAVowel(letter) {
    for(let i=0; i<vowelArray.length; i++) {
        if(letter = vowelArray[i]) {
            return true;
        }
    }return false;
} 
console.log(isAVowel("o"))




//Get Two Lengths
function getTwoLengths(a, b) {
    myArr = []
    myArr.push(a.length);
    myArr.push(b.length);
    return myArr;
}

console.log(getTwoLengths("hank", "Hippopopalous"))




// Sum Array
function sumArray(array) {
   let sum = 0;
   for(let i=0; i < array.length; i++) {
       sum += array[i];
   }
   return sum;
}
console.log(sumArray([1, 2, 3, 4, 5, 6]))
*/



// Prime Numbers
function checkPrime(num) {
    for(let i=2; i<num; i++) {
        if(num % i === 0) {
            return false;
        }
    }return true;
}

function printPrimes(num) {
    //loop over numbers
    for(let i = 2; i <= num; i++) {
        //check if numbers are prime
        if(checkPrime(i)) {
            //print out prime numbers
            console.log(i)
        }
    }
}
printPrimes(97)    


