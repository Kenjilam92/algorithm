// Get 1 to 255 - Write a function that returns an array with all the numbers from 1 to 255.
console.log("Answer question 1:")
function q1(){
    var temp=[];
    for (var i=1; i<256; i++){
        temp.push(i) ;
    }
    return temp;
}
console.log(q1());

// // Get even 1000 - Write a function that would get the sum of all the even numbers from 1 to 1000.  You may use a modulus operator for this exercise.
console.log("Answer question 2:")
function q2(){
    var sum=0;
    for(var i=0;i<=1000;i+=2){;
        sum=sum+i;   
    }
    return(sum);
}
console.log (q2());

// // // Sum odd 5000 - Write a function that returns the sum of all the odd numbers from 1 to 5000. (e.g. 1+3+5+...+4997+4999).

console.log("Answer for question 3:")
function q3(){
    var sum=0;
    for(var i=1;i<=5000;i+=2){
        sum=sum+i;  
    }
    return(sum);
}

console.log(q3());

// // // Iterate an array - Write a function that returns the sum of all the values within an array. (e.g. [1,2,5] returns 8. [-5,2,5,12] returns 14).
console.log("Answer for question 4:");
function q4(array){
    var sum = 0;
    for(var i=0; i <array.length ;i++){
        sum=sum+array[i];
    }
    return(sum);
}
var x=[1,15,34564,787984,4564];
console.log("let's assume we have an arry")
console.log(x);
console.log("Then, sum of the array is");
console.log(q4(x));
// // Find max - Given an array with multiple values, write a function that returns the maximum number in the array. (e.g. for [-3,3,5,7] max is 7)

console.log("Answer for question 5")
function q5(array){
    var max=array[0];
    for (var i=1;i<array.length;i++){
        if(array[i]>max){
            max=array[i];
        }
    }
    console.log("the maximum number in the array is:");
    return(max);
}
console.log("in the array");
var x=[-3,3,5,7];
console.log(x);
console.log(q5(x));

// // Find average - Given an array with multiple values, write a function that returns the average of the values in the array. (e.g. for [1,3,5,7,20] average is 7.2)

console.log("Answer for question 6")
function q6(array){
    var sum=0;
    for (var i=0;i<array.length;i++){
        sum=sum+array[i];
    }
    var average=sum/array.length;
    console.log("the average of the values in the array is:");
    return(average);
}
console.log("in the array");
var x=[1,3,5,7,20];
console.log (x);
console.log (q6(x));

// // Array odd - Write a function that would return an array of all the odd numbers between 1 to 50. (ex. [1,3,5, .... , 47,49]). Hint: Use 'push' method.
console.log("Answer for question 7");
function q7(array){
    var oddnumbers=[];
    for (var i=0; i<array.length; i++){
        var temp=array[i]%2;
        if(array[i]=0){}
        else if(temp!=0){
            oddnumbers.push(i);
        }
    }
    return(oddnumbers);
}


var x=[];
for (var i=1; i<=50; i++){
    x.push(i);
}

console.log("the odd numbers between 1 to 50 is:");
console.log(q7(x));


// Greater than Y - Given value of Y, write a function that takes an array and returns the number of values that are greater than Y. For example if arr = [1, 3, 5, 7] and Y = 3, your function will return 2. (There are two values in the array greater than 3, which are 5, 7).
console.log("Answer for question 8");
var a1=100;
var a2=[1231,48,4,5,4,548967,1,498,15,7];

function q8(array,y){
    var count=0;    
    for (var i=0;i<array.length;i++){
        if(array[i]>y){
            count=count+1;
        }
    }
    return count;
}
console.log("if y=");
console.log(a1);
console.log("the array is:");
console.log(a2);
console.log("the amount of numbers larger than y is:");
console.log(q8(a2,a1));

// // Squares - Given an array with multiple values, write a function that replaces each value in the array with the value squared by itself. (e.g. [1,5,10,-2] will become [1,25,100,4])
console.log("Answer for question 9");
function q9(array){
    var temp=[];
    for (var i=0; i<array.length;i++){
        temp.push (array[i]*array[i]);
    }
    return (temp);
}
var x=[0,1,2,3,4,5,6,7,8]
console.log("we have an array");
console.log(x);
console.log("Then,the array with the value squared by itself is:");
console.log(q9(x));

// // Negatives - Given an array with multiple values, write a function that replaces any negative numbers within the array with the value of 0. When the program is done the array should contain no negative values. (e.g. [1,5,10,-2] will become [1,5,10,0])
console.log("Answer for question 10");
function q10(array){
    var temp=[];
    for (var i=0; i<array.length;i++){
        if(array[i]<0){
            temp.push(0);
        } 
        else temp.push(array[i]);
        }
    return temp;
}
var x=[1,5,10,-2];
console.log("we have an array");
console.log(x);
console.log("if we replace any negative numbers within the array with the value of 0, we have");
console.log(q10(x));
// // Max/Min/Avg - Given an array with multiple values, write a function that returns a new array that only contains the maximum, minimum, and average values of the original array. (e.g. [1,5,10,-2] will return [10,-2,3.5])
console.log("Answer for question 11");
function q11(array){
    var sum=array[0];
    var max=array[0];
    var min=array[0];
    for(var i=1; i<array.length; i++){
        sum=sum+array[i];        
        if(array[i]>max){
            max=array[i];
        }
        if(array[i]<min){
            min=array[i];
        }
    }
    var average=sum/array.length;
    return [max,min,sum];
}
var x=[123,456,789,-46576,165498,-879653]
console.log("if we have this array");
console.log(x);
console.log("the maximum, minimum, and average values of the original abow will be:");
console.log(q11(x));

// // Swap Values - Write a function that will swap the first and last values of any given array. The default minimum length of the array is 2. (e.g. [1,5,10,-2] will become [-2,5,10,1]).
console.log("Answer for question 12");
function q12(array){
    if(array.length<2){
        return "this array is too short, please give the array with more than 2 values";
    }
    else var temp=array[0];
    array[0]=array[array.length-1];
    array[array.length-1]=temp;
return array;
}
var x=[123156,456498,87897,5465];
console.log("we have this array")
console.log(x);
console.log("if we swap the first and last values of any given array, then it will be");
console.log(q12(x));

// // Number to String - Write a function that takes an array of numbers and replaces any negative values within the array with the string 'Dojo'. For example if array = [-1,-3,2], your function will return ['Dojo','Dojo',2].

function q10(array){
    var temp=[];
    for (var i=0; i<array.length;i++){
        if(array[i]<0){
            temp.push("Dojo");
        } 
        else temp.push(array[i]);
        }
    return temp;
}
var x=[-1,-3,2];
console.log("we have an array");
console.log(x);
console.log("if we replace any negative numbers within the array with the value of 'Dojo', we have");
console.log(q10(x));