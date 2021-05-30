function containsZero(arr){
    return arr.includes(0);
}
let array=[0,10,8,9,0,8];
console.log(containsZero(array));



// function allPositive(arr){
// let positivenumber=arr.filter(value=> value>=0);
// if (arr.length==positivenumber.length)
//     return true;

// return false;

// }
// let array1=[1,8,18,9,10];
// console.log(allPositive(array1));

function allPositive(arr){
return arr.every(value=>value>=0);

}
let array1=[1,8,-18,9,10];
console.log(allPositive(array1));



function joinStrings(arr,symbol){
    if(symbol==undefined){
    let a= arr.reduce((acc,el)=>acc+el+",","");
     return a.slice(0,a.length-1);}
     else{
        let a= arr.reduce((acc,el)=>acc+el+symbol,"");
         return a.slice(0,a.length-1);
     }
}
let arr=['i', 'love', 'programming'];
console.log(joinStrings(arr,"#"));
