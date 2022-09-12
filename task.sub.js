//Do the below programs in anonymous function & IIFE

//1.Print odd numbers in an array

(function odd(inp) {
    var output = [];
    for (let i = 0; i < inp.length; i++) {
        if (i % 2 == 0) {
            output.push(arr[i]);
        }
    }
    console.log(output)
})([1,3,4,2,5,6,7,8])

//2.Convert all the strings to title caps in a string array

(function str(inp) {
    let x = inp.map(a=>a.charAt(0).toUpperCase() + inp.substr(1).toLowerCase())
    console.log(x);
})(["hello","javscript"])

//3.Sum of all numbers in an array

(function sum (inp) {
     output = inp.reduce((a,b)=>a+b)
   console.log(output)
})([15,20,30,22,12,3,4,4,2,2,4])

//4.Return all the prime numbers in an array

(function prime(inp) {
    let prinum = inp.filter(a => {
        for (let i = 2; i <= a; i++) {
            if (a % i == 0) {
                break
            } else { return a }
        }
    });
    console.log(prinum)
})([15,20,30,22,12,3,4,4,2,2,4])

//5.Return all the palindromes in an array

(function palindromes(inp) {
    let palin = [];
    for (let i of inp) {
        if (i == parseInt(i.toString().split('').reverse().join(''))) {
            palin.push(i)
        }
    }
    console.log(palin)
        // let output = inp.filter(a => a == parseInt(a.toString().split('').reverse().join('')))
        // console.log(output)
})([123,165,656,87678,55])

//6.Return median of two sorted arrays of the same size

(function median(inp1, inp2) {
    let myinput = inp1.concat(inp2).sort((function(a, b) { return a - b }));

    if (myinput.length % 2 == 0) {
        let step1 = myinput[parseInt((myinput.length / 2) - 1)];
        let step2 = myinput[parseInt(myinput.length / 2)];
        let med = parseInt((parseInt(step1) + parseInt(step2)) / 2);
        console.log(med);
    } else {
        let step1 = myinput[parseInt(myinput.length / 2)];
        let step2 = myinput[parseInt((myinput.length / 2) + 1)];
        let med = parseInt((parseInt(step1) + parseInt(step2)) / 2);
        console.log(med);
    }

})([11,22,33,44],[55,66,77])

//7.Remove duplicates from an array

( function removeDuplicates(inp) {
  let output=inp.filter((a,index)=>inp.indexOf(a)===index);
   console.log(output)
})([13,24,35,11,22,12,11,22,25])

//8.Rotate an array by k times

 (function rotateArray (arr,k){
    for(let i=0;i<k;i++){
        let temp=arr[0];
        for(let j=0;j<arr.length;j++){
            arr[j]=arr[j+1];
        }
        arr[arr.length-1]=temp;
    }
    return arr
})([1,2,3,4,5],2)

//Do the below programs in arrow functions

//1.Print odd numbers in an array

(oddNumbe=(input)=>{ 
    console.log(input.filter(a=>a%2==0));
})([2,1,3,4,5])


//2.Convert all the strings to title caps in a string array

(titleCaps=(input) =>{
    let x = input.map(a=>a.charAt(0).toUpperCase() + a.substr(1).toLowerCase())
    console.log(x);
})(["hello","javscript"])

//3.Sum of all numbers in an array

(sum =(inp)=> {
     output = inp.reduce((a,b)=>a+b)
   console.log(output)
})([1,2,3,4,5])

//4.Return all the prime numbers in an array

( prime=(inp)=> {
    let prinum = inp.filter(a => {
        for (let i = 2; i <= a; i++) {
            if (a % i == 0) {
                break
            } else { return a }
        }
    });
    console.log(prinum)
})([15,20,30,22,12,3,4,4,2,2,4])

//5.Return all the palindromes in an array

( palindromes=(inp)=> {
    let palin = [];
    for (let i of inp) {
        if (i == parseInt(i.toString().split('').reverse().join(''))) {
            palin.push(i)
        }
    }
    console.log(palin)
        // let output = inp.filter(a => a == parseInt(a.toString().split('').reverse().join('')))
        // console.log(output)
})([123,165,656,87678,55])


