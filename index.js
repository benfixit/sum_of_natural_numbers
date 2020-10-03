/**
 * 1. Calculate the sum of natural number up to n
 */

 function sumOfNaturalNumbersIterative1(n){
     let sum = 0;
     for(let i = 0; i <= n; i++){
         sum += i
     }
     return sum;
 }

function sumOfNaturalNumbersIterative2(n){
    return n * (n + 1)/2
}

function sumOfNaturalNumbersRecursive(n){
    if(n <= 1){
        return n;
    }
    return n + sumOfNaturalNumbersRecursive(n - 1)
}

console.log(sumOfNaturalNumbersIterative1(10000))
console.log(sumOfNaturalNumbersIterative2(10000))
console.log(sumOfNaturalNumbersRecursive(10000))