// Fibonacci - Create a function to generate Fibonacci numbers.  In this famous mathematical sequence, each number is the sum of the previous two, starting with values 0 and 1.  Your function should accept one argument, an index into the sequence (where 0 corresponds to the initial value, 4 corresponds to the value four later, etc).  Examples: fibonacci(0) = 0 (given), fibonacci(1) = 1 (given), fibonacci(2) = 1 (fib(0)+fib(1), or 0+1), fibonacci(3) = 2 (fib(1) + fib(2)3, or 1+1), fibonacci(4) = 3 (1+2), fibonacci(5) = 5 (2+3), fibonacci(6) = 8 (3+5), fibonacci(7) = 13 (5+8).  Do this without using recursion first.  If you don't know what a recursion is yet, don't worry as we'll be introducing this concept in Part 2 of this assignment.

function rFib( n ) {
    if( n == 1 ) {
        return 1;
    } else if( n == 0 ) {
        return 0;
    } else {
        return rFib( n-1 ) + rFib( n-2 );
    }
}

function iFib( n ) {
    if( n < 2 ) {
        return n;
    }
    var prevprev = 0;
    var prev = 1;
    var curr = 1;
    for(var i=2; i<n; i++) {
        prevprev = prev;
        prev = curr;
        curr = prev + prevprev;
    }
    return curr;
}

// console.log( iFib( 6 ) );


function arrFib( n ) {
    var fibs = [0, 1];
    for(var i=2; i<=n; i++) {
        fibs.push( fibs[fibs.length-1] + fibs[fibs.length-2] );
    }
    return fibs[n];
}

// console.log( arrFib( 6 ) );

// Array: Second-Largest: Return the second-largest element of an array. 
// Given [42,1,4,3.14,7], return 7.  If the array is too short, return null.

function secondLargest( arr ) {
    var max = arr[0];
    var sec = arr[1];
    if( arr[0] < arr[1]) {
      sec = arr[0];
      max = arr[1];
    }
    for(var i=2; i<arr.length; i++){
      if( arr[i] > max ) {
        sec = max;
        max = arr[i];
      }else if( arr[i] > sec ) {
        sec = arr[i];
      }
    }
    return sec;
  }
  
  // secondLargest( [0,42,1,4,3.14,7] );