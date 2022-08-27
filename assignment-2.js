
/*Question 1 : Javascript function to check whether a triangle is equilateral,
isosceles or scalene */


console.log()
console.log("Check Triangle Type")
console.log("--------------------")

function checkTriangle(s1,s2,s3){
    if(s1==s2 && s2==s3){
        console.log("Equilateral Triangle"); // All three sides are equal
    }
    else if(s1==s2 || s2==s3 || s1==s3){
        console.log("Isosceles Triangle"); // Any two sides are equal
    }
    else
        console.log("Scalene Triangle") //NO sides are equal
}

let x=4, y=4, z=5;

console.log(checkTriangle(x,y,z));
console.log() 
console.log();  
console.log();


/**---------------------------------------------------------------------------------------------- */

/*Question 2 : function using switch case to find the grade of a student based
on marks obtained */



console.log("Check Grade of Student")
console.log("--------------------")



function checkGrade(mark){
switch(true){
    case (mark>=0 && mark<40):
        console.log("Student has Failed");
        break;
    case (40<=mark && mark<50):
        console.log("E grade");
        break;
    case (50<=mark && mark<60):
        console.log("D grade");
        break;
    case (60<=mark && mark<70):
        console.log("C grade");
        break;
    case (70<=mark && mark<80):
        console.log("B grade");
        break;
    case (80<=mark && mark<90):
        console.log("A grade");
        break;
    case (90<=mark && mark<100):
        console.log("S grade");
        break;
    default:
        console.log("Invlide Mark");
        break;
}
}


let mark =81;
console.log(checkGrade(mark));
console.log();  
console.log();  
console.log();



/**------------------------------------------------------------------------------------------ */
/*Question 3 : program to find the sum of the multiples of 3 and 5 under 1000 */


console.log("Find Sum of Multiples of 3 and 5 within range");
console.log("---------------------------------------------")

function findSum(limit){

    let sum = 0;

    for(let i=0;i<limit;i++){

        if(i%3==0 || i%5==0){
            sum = sum + i;
        }
    }

    console.log(`sum of Multiples of 3 and 5 within ${limit} = ${sum}`);

}


let limit = 1000;
console.log(findSum(limit));
console.log()   
console.log();  
console.log();

/**--------------------------------------------------------------------------------------------- */

/*Question 4 : program to find the factorial of all prime numbers between a
given range */

console.log("Factorial of Prime numbers within a range")
console.log("---------------------------------------")

let lowRange = 2;
let highRange = 10;

console.log(`Range : ${lowRange} - ${highRange} `)
console.log()


function isPrime(num){      //function to find whether a number is prime or not

    if(num<=1){
        return false;
    }

    for(let i=2;i<=(num/2);i++){
        if(num%i==0){
            return false;
        }
    }

    return true;
}

function fact(num){     //function to find factorial of a number
    let facto = 1;
     for(let i=1;i<=num;i++){
         facto = facto * i;
     }
     console.log(`Factorial of ${num} = ${facto}`)
 }


function primeInRange(low,high){      //function to find prime numbers within range
    let prod = 1;
    for(let i=low;i<=high;i++){
        if(isPrime(i)){
            //console.log(i) //will print prime numbers within range
            //prod = prod * i  //will give products of prime numbers within range
            console.log(fact(i)) // factorial of number
        }
    }
   // console.log(`Product of Prime numbers between ${low} and ${high} = ${prod}`);
}

//console.log(isPrime(3))
console.log(primeInRange(lowRange,highRange))
console.log();
/**---------------------------------------------------------------------------------------------------------------------------- */