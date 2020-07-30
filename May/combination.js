const combi = (arr,arr1) => {
    var arr2 = [];
    for(var i=0;i<arr.length;i++){
        for(var j=0;j<arr1.length;j++){
            arr2.push(`${arr[i]} ${arr1[j]}`);
        }
    }
    return arr2;
};

const combination = (words) => {
    var arr = words[0];
    for(var i=1; i<words.length; i++){
        arr = combi(arr,words[i]);
    }
    return arr;
}

words = [
    ["quick", "lazy"],
    ["brown", "red", "grey","red"],
    ["fox", "dog", "rabbit"],
    ["jumps", "run"]
];

console.log(combination(words));

/////////////////////////////////////

const words = [
    ["quick", "lazy"],
    ["brown", "grey", "red"],
    ["fox", "dog"]
];

let i = 0;
let combs = words[i];

while(i++ < words.length-1){
    let new_combs = [];
    for(let comb of combs){
        for(let word of words[i]){
            new_combs.push(comb + " " + word);
        }
    }
    combs = new_combs;
}

console.log(combs);