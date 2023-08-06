//The last thing today is "SWITCH"
//We use it to execute code in different cases:
const day = new Date().getDay() //We get the day

switch (day) {
  case 0: //Is the 0 day, sunday
    console.log("It's sunday! 😴") //We print this
    break //It is very important to break, to start the next cases
  case 1: //And it repeats....
    console.log("It's monday! 😢")
    break
  case 2:
    console.log("It's tuesday! 🥵")
    break
  case 3:
    console.log("It's wednesday! 🤓")
    break
  default: //If isn't any case, we print this
    console.log("It is weekend! 🚀")
    break
}