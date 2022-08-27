/** Question 1: Program to print number pattern */

console.log()
console.log("Question 1: Number Pattern")
console.log("--------------------------")

function drawT(size){
    let line = "";
    let count =1;
    for(let i=1;i<=size;i++){
        for(let j=1;j<=i;j++){
            line += count +" ";
            count++;
        }
        line+="\n";
    }
    return line;
}

console.log(drawT(4));
console.log();

/**------------------------------------------------------------------------------------------- */


// let num=3456;
// console.log(num.toString().length)

/** Question 2: program to find whether a given number is armstrong number or not- */

console.log("Question 2: Armstrong Number");
console.log("----------------------------");

function armstrong(num){
    let sum=0;
    let temp = num

    while(temp>0){
        let remainder = temp % 10;
        sum = sum + (remainder*remainder*remainder);
        temp=parseInt(temp/10);
    }
    if(sum==num)
        console.log(`${num} is Armstrong`);
    else
        console.log(`${num} is not Armstrong`);

}

let number=153;
console.log(armstrong(number))
console.log()
console.log()

/**------------------------------------------------------------------------------------- */

/** Question 3: program to find whether a given number is special number or not- */

console.log("Question 3: Special Number")
console.log("-==========---------------");

function fact(num){
    let facto = 1;
     for(let i=1;i<=num;i++){
         facto = facto * i;
     }
     //console.log(`Factorial of ${num} = ${facto}`)
     return facto;
 }


 function specialNum(num){
    let sum = 0;
    let temp = num;

    while(temp>0){
        let remainder = temp % 10;
        sum = sum + fact(remainder);
        temp = parseInt(temp/10);
    }

    if(sum==num)
        console.log(`Number ${num} is Special number`)
    else
        console.log(`Number ${num} is not a Special number`)
 }

 let number1 = 145;
 console.log(specialNum(number1))