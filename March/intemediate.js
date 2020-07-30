// Sigma - Implement function sigma(num) that, given a number, returns the sum of all positive integers up to the given number (inclusive).  Ex: sigma(3) = 6 (or 1+2+3); sigma(5) = 15 (or 1+2+3+4+5).
function sigma(x){
    var sigma=0;
    if(x>0){
        for (var i=1;i<=x;i++){
        sigma+=i;
        }
    return sigma;
    }
    else{
        console.log("Don't apply on negative number");
        return;
    }
}
console.log(sigma(5));

// Factorial - Write a function factorial(num) that, given a number, returns the product (multiplication) of all positive integers from 1 up to the given number (inclusive).  For example, factorial(3) = 6 (or 1*2*3); factorial(5) = 120 (or 1*2*3*4*5).

function factorial(x){
    var factorial=1;
    for (var i=1;i<=x;i++){
        factorial*=i;
    }
    return  factorial;
}
console.log(factorial(5));

// Fibonacci - Create a function to generate Fibonacci numbers.  In this famous mathematical sequence, each number is the sum of the previous two, starting with values 0 and 1.  Your function should accept one argument, an index into the sequence (where 0 corresponds to the initial value, 4 corresponds to the value four later, etc).  Examples: fibonacci(0) = 0 (given), fibonacci(1) = 1 (given), fibonacci(2) = 1 (fib(0)+fib(1), or 0+1), fibonacci(3) = 2 (fib(1) + fib(2)3, or 1+1), fibonacci(4) = 3 (1+2), fibonacci(5) = 5 (2+3), fibonacci(6) = 8 (3+5), fibonacci(7) = 13 (5+8).  Do this without using recursion first.  If you don't know what a recursion is yet, don't worry as we'll be introducing this concept in Part 2 of this assignment.

function fibonacci(n){
    if (n==0){
        return 0;
    }
    else if (n==1){
        return 1;
    }else  
        return fibonacci(n-1)+fibonacci(n-2);
}

console.log(fibonacci(6));
// Array: Second-to-Last: Return the second-to-last element of an array. Given [42, true, 4, "Liam", 7], return "Liam".  If array is too short, return null.

var x=[42,true,4,"Liam",7];

function returnsecondtolast(array){
    if (array.length<2){
        return null;
    }
    else 
        return array[array.length-2];
    
}

console.log(returnsecondtolast(x));

// Array: Nth-to-Last: Return the element that is N-from-array's-end.  Given ([5,2,3,6,4,9,7],3), return 4.  If the array is too short, return null.

function returnNindex(arr,index){
    if (index>arr.length+1){
        return null;
    }
    else{
    return arr[index];
    }
}

var n=4;
var x=[5,2,3,6,4,9,7];
console.log(returnNindex(x,n));

// Array: Second-Largest: Return the second-largest element of an array. Given [42,1,4,3.14,7], return 7.  If the array is too short, return null.

function secondMax(arr){
    var max=arr[0];
    var second=arr[1];
    if (arr[1]>arr[0]){
        var max=arr[1];
        var second=arr[0];
    }
    for (var i=2; i<arr.length;i++){
        if(arr[i]>second&&arr[i]>max){
            second=max;
            max=arr[i]
        }
        else if (arr[i]>second){
            second=arr[i];
            }
    }
    return second;
}   

var x=[42,100,4,3,140,7];
console.log(secondMax(x));

// Double Trouble: Create a function that changes a given array to list each existing element twice, retaining original order.  Convert [4, "Ulysses", 42, false] to [4,4, "Ulysses", "Ulysses", 42, 42, false, false].

function doublearray(arr,times){
    var temp=[]
    for (var i=0; i<arr.length;i++){
        for (var j=0;j<times;j++){
            temp.push(arr[i]);
        }
    }
    return temp;
}

var a=[4, "Ulysses", 42, false];
var times=2
console.log(doublearray(a,times));