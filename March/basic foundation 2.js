// Biggie Size - Given an array, write a function that changes all positive numbers in the array to the string "big".  Example: makeItBig([-1,3,5,-5]) returns that same array, changed to [-1, "big", "big", -5].


function q1(array){

    for (var i=0;i<array.length;i++){
        if (array[i]>0){
            array[i]="big";
        }
    }
    console.log("replacing positive numbers in the array by 'big', we have this result")
    return array;
}
var x=[-1,3,5,-3];
console.log("we have this array");
console.log(x);
console.log(q1(x));

// Print Low, Return High - Create a function that takes in an array of numbers.  The function should print the lowest value in the array, and return the highest value in the array.

function q2(array){
    var max=array[0];
    var min=array[0];
    for (var i=0;i<array.length;i++){
        if(array[i]>max){
            max=array[i];
        }
        if(array[i]<min){
            min=array[i];
        }    
    console.log(min);
    return max;
    }
}

// Print One, Return Another - Build a function that takes in an array of numbers.  The function should print the second-to-last value in the array, and return the first odd value in the array.

function q3(array){
    console.log("the second-to-last value in the array is:")
    console.log(array[array.length-2]);
    for (var i=0; i<array.length;i++){
        var temp=array[i]%2;
        if(temp!=0){
            console.log("he first odd value in the array is:");
            return array[i];
        }
    }
}
var x=[12,45,4787,5464,15412,878915468,21654];
console.log (q3(x));

// Double Vision - Given an array (similar to saying 'takes in an array'), create a function that returns a new array where each value in the original array has been doubled.  Calling double([1,2,3]) should return [2,4,6] without changing the original array.
function q4(array){
    var temp=[];
    for (var i=0;i<array.length;i++){
        temp.push(array[i]*2);
    }
    console.log("a new array where each value in the original array has been doubled is:");
    return temp;
}
var x4=[1,2,3,4,5,6,7,8,9];
console.log("we have an array:");
console.log(x4);
console.log(q4(x4));
console.log("tesing the original array by printing it out again")
console.log(x4);

// Count Positives - Given an array of numbers, create a function to replace the last value with the number of positive values found in the array.  Example, countPositives([-1,1,1,1]) changes the original array to [-1,1,1,3] and returns it.

function q5(array){
    var count=0;
    for(var i=0;i<array.length;i++){
        if(array[i]>0){
            count++;
        }
    }
    array[array.length-1]=count;
    return array;
}
var x5=[-1,-5,123,45,65,8,4,78,9,3,6];
console.log("we have an array:");
console.log(x5);
console.log("replacing the last value with the number of positive values found in the array, we have a new array");
console.log(q5(x5));
console.log("recalling the array to test how the original array changed");
console.log(x5);

// Evens and Odds - Create a function that accepts an array.  Every time that array has three odd values in a row, print "That's odd!".  Every time the array has three evens in a row, print "Even more so!".

function q6(array){
    for (var i=2; i<array.length;i++){
        var temp1=array[i-2]%2;
        var temp2=array[i-1]%2;
        var temp3=array[i]%2;
        if((temp1==0)&&(temp2==0)&&(temp3==0)){
            console.log("Even more so!");
        }
        else if((temp1!=0)&&(temp2!=0)&&(temp3!=0)){
            console.log("That's odd!");
        } else
            console.log("nothing special");
    }
    return;
}
var x6=[8,6,8,1,7,9,3,2,5,6,2,4,8,9,9,10];
console.log("we have and array");
console.log(x6);
console.log("Every time that array has three odd values in a row, print 'That's odd!'.  Every time the array has three evens in a row, print 'Even more so!'");
q6(x6);
// Increment the Seconds - Given an array of numbers arr, add 1 to every other element, specifically those whose index is odd (arr[1], arr[3], arr[5], etc).  Afterward, console.log each array value and return arr.

function q7(array){
    for (var i=0;i<array.length;i++){
        var temp=i%2;
        if (temp!=0){
            array[i]++;
        }
    }
    console.log(array);
    return (array);
}
var x7=[2,5,8,5,6,4,45,9];
console.log("we have an array");
console.log(x7);
console.log("add 1 to every other element, specifically those whose index is odd, we have this following new array");
q7(x7);

// Previous Lengths - You are passed an array (similar to saying 'takes in an array' or 'given an array') containing strings.  Working within that same array, replace each string with a number - the length of the string at the previous array index - and return the array.  For example, previousLengths(["hello", "dojo", "awesome"]) should return ["hello", 5, 4]. Hint: Can for loops only go forward?

function q8(array){
    for(var i=array.length-1; i>0;i--){
        var count=array[i-1].length;
        array[i]=count;
    }
    return array;
}
var x8=["hello", "dojo", "awesome"]
console.log("we have an array");
console.log(x8);
console.log("after replacing each string with a number - the length of the string at the previous array index , we have this following new array");
console.log(q8(x8));

// Add Seven - Build a function that accepts an array. Return a new array with all the values of the original, but add 7 to each. Do not alter the original array.  Example, addSeven([1,2,3]) should return [8,9,10] in a new array.

function q9(array){
    var newarray=[];
    for (var i=0; i<array.length;i++){
        newarray.push(array[i]+7);
    }
    return newarray;
}
var x9=[1,2,3,4,5,6,7];
console.log("we have an array");
console.log(x9);
console.log("we will build a NEW array, by adding 7 to each values of the original");
console.log(q9(x9));

// Reverse Array - Given an array, write a function that reverses its values, in-place.  Example: reverse([3,1,6,4,2]) returns the same array, but now contains values reversed like so... [2,4,6,1,3].  Do this without creating an empty temporary array.  (Hint: you'll need to swap values).

function q10(array){
    
    for (var i=0; i<=(array.length/2);i++){
        var temp=array[i];
            array[i]=array[array.length-1-i];
            array[array.length-1-i]=temp;
    }
    return array;
}
var x10=[0,1,2,3,4,5,6,7,8,9];
console.log("we have an array");
console.log(x10);
console.log("we will rewrite a the array that reverses its values, in-place");
console.log(q10(x10));

// Outlook: Negative - Given an array, create and return a new one containing all the values of the original array, but make them all negative (not simply multiplied by -1). Given [1,-3,5], return [-1,-3,-5].

function q11(array){
    var newarray=[]
    for (var i=0;i<array.length;i++){
        if(array[i]>0){
            newarray.push(array[i]*-1);
        }else {
            newarray.push(array[i]);
        }
    }
    return newarray
}
var x11=[0,-1,2,-3,4,-5,6];
console.log("we have an array");
console.log(x11);
console.log("creating a NEW array by make all element into negative numbers");
console.log(q11(x11));

// Always Hungry - Create a function that accepts an array, and prints "yummy" each time one of the values is equal to "food".  If no array values are "food", then print "I'm hungry" once.

function q12(array){
    var count=0
    for (var i=0; i<array.length;i++){
        if(array[i]=="food"){
            count++;
            console.log("yummy");
        }
    }
    if(count==0){
        console.log("I'm hungry");
    }
}

var x12a=[0,0,0,"food",0,0,0,0,0,0,"food"];
var x12b=[1,2,5,,6,7,,1,13,74,,13,4,];
console.log("if we feed the function with this array");
console.log(x12a);
console.log(q12(x12a));
console.log("if we feed the function with this array");
console.log(x12b);
console.log(q12(x12b));

// Swap Toward the Center - Given an array, swap the first and last values, third and third-to-last values, etc.  Example: swapTowardCenter([true,42,"Ada",2,"pizza"]) turns the array into ["pizza", 42, "Ada", 2, true].  swapTowardCenter([1,2,3,4,5,6]) turns the array into [6,2,4,3,5,1].  No need to return the array this time.

function q13(array){
    
    for (var i=0; i<=(array.length/2);i++){
        var even=i%2;
        if (even==0){
        var temp=array[i];
            array[i]=array[array.length-1-i];
            array[array.length-1-i]=temp;
        }
    }
return array;
}
var x13=[0,1,2,3,4,5,6,7,8,9];
console.log("we have an array");
console.log(x13);
console.log("we will rewrite a the array that reverses its values, in-place");
console.log(q13(x13));

// Scale the Array - Given an array arr and a number num, multiply all values in the array arr by the number num, and return the changed array arr.  For example, scaleArray([1,2,3], 3) should return [3,6,9].

function q14(array,number){
    for(var i=0;i<array.length;i++){
        array[i]=array[i]*number;
    }
    return array;
}
var arr=[1,2,3,4,5,6];
var num=2;
console.log(q14(arr,num));
