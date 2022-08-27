/* Question-1 */

console.log("Question-1 : Program to check Leap year or not")
console.log("----------------------------------------------")

   
function leapYear(year){

    if((year%4==0 && year%100!=0) ||(year%400==0)){

        console.log(`${year} is Leap year`)
    }
    else{
        console.log(`${year} is Not Leap year`)
    }

}

let year=2016;
console.log(leapYear(year))


/*------------------------------------------------------------------------------------------------------- */

  /* Question-2 */  

 console.log()
 console.log("Question-2 : converting temperatue from Celsius to Fahrenheit and vice versa")
 console.log("----------------------------------------------------------------------------")

  function CelToFar(cTemp){
    let Far = cTemp * 9 / 5 + 32;
    console.log(`${cTemp} degree celsius in Fahrenheit is : ${Far}`);
  }

  function FarToCel(fTemp){
    let Cel = (fTemp - 32) * 5 / 9;
    console.log(`${fTemp} Fahrenheit in degree celsius is : ${Cel}`);
  }

  let tempc = 60;
  let tempf= 45;
  console.log(CelToFar(tempc))
  console.log(FarToCel(tempf))

/*-------------------------------------------------------------------------------------------------- */

console.log()
console.log("Question3 : Program to find Factorial of a Number")
console.log("--------------------------------------------------")
function fact(num){
   let facto = 1;
    for(let i=1;i<=num;i++){
        facto = facto * i;
    }
    console.log(`Factorial of ${num} = ${facto}`)
}

let number = 5;
console.log(fact(number))
