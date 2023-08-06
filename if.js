let condition = true // We create the first variable
let number = "8" // We associate the value "8" to "number"

// We start the condition
if(condition) {
    console.log("It works") // We check if its works
}
//Now we make a more complex one
if(condition) {
    number = number + 1    // We update the value of "number" (8) and we add "1"
    console.log(number)    // Then we print the new value
}
//Now we make a more complex one
const age = 18 //Our age

if(age >= 18) { //We make the condition
    console.log("You are over 18") //It responses
} else if(age === 17) {  //And if you are in the limit age
    console.log("You are in the limit") //It responses
} else { //And if you don't have +18 or 17 
    console.log("You are not over 18") //It displays this
}
//We can try changing our age to have a diferent result