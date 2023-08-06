//Making loops in javascript is very easy with "WHILE"
//IT has the same structure than "IF"
let condition = true //We create the var

//BE CAREFUL WITH THE INFINITE LOOPS!:

while(condition) {
    console.log("Oh no")
}

//THIS LOOP WILL NEVER END AND WILL RESULT IN A CRASH

let countDown = 10 //We create the var

while (countDown > 0) { //If countdown is higher than 0
  console.log(countDown) //We print countdown
  countDown = countDown - 1 //And update it value subtracting 1
}

console.log('Takeoff! 🚀') //When it ends we print this