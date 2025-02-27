var d = new Date()
function currentTimeDate(){
    document.write("Current Date: " + d.getDate() + "<br>")
    document.write("Current Time: " + d.getHours() + "<br>")
}
currentTimeDate()

function greetUser(){
    var firstName = prompt("Enter your name")
    var secondName = prompt("Enter your name")
    var fullName = `${firstName} ${secondName}`
    document.write(`Hello ${fullName}`)
}
greetUser()

function sum(){
    var num1 = +prompt("Enter the sum of number 1")
    var num2 = +prompt("Enter the sum of number 2")
    var sum = num1 + num2
    document.write(`Sum of ${num1} and ${num2} is: ${sum}`)
}
sum()

function square(number){
    return number * number
}
var userInput = +prompt("Enter a number to square")
var result = square(userInput)
document.write(`The square of ${userInput} is ${result}`)

function factorial(n){
    if(n < 0){
        return "Factorial is not defined for negative number"
    }
    let result = 1
    for(var i=1; i<=n; i++){
        result*=i
    }
    return result
}
var userNum = +prompt("Enter number") 
document.write(`The factorial of ${userNum} is: ${factorial(userNum)}`)

var count1 = +prompt("Enter a number to start counting")
var count2 = +prompt("Enter a number to end counting")
 function counting(){
    for(var i=count1; i<=count2; i++){
        document.write(i + "<br>")
    }
}
counting()

var squareNum = parseInt(prompt("Enter the number"))
function square(num){
    return Math.floor(Math.sqrt(num))
}
var squarShow = square(squareNum)
document.write(`The square of ${squareNum} is: ${squarShow}`)

function calculateHyptenuse(base, prependicular){
    function calculateSquare(number){
        return number * number
    }
    var baseSquare = calculateSquare(base) 
    var prependicularSquare = calculateSquare(prependicular) 
    var hypotenuse = Math.sqrt(baseSquare + prependicularSquare)
    return hypotenuse.toFixed(2)
}
var base1 = parseInt(prompt("Enter the base value"))
var prependicular = parseInt(prompt("Enter the prependicular value"))
var hypotenuse = calculateHyptenuse(base1, prependicular)
document.write(`The Hypotenuse of triangle is: ${hypotenuse}`)

var userInput = prompt("Enter numbers separated by commas (e.g., 3, 1, 4, 2)");
function sortArray(arr) {
    return arr.sort(function(a, b) {
        return a - b;
    });
}
var userArr = userInput.split(',').map(function(item) {
    return (item.trim());
});
var sortedArr = sortArray(userArr);
document.write(`The sorted array is: ${sortedArr}`);

var userArgument = prompt("Write the sentence to find the length of sentence")
function arguLength(arg) {
    return arg.length;
}
document.write(arguLength(userArgument));

var userfindLargeNumber = prompt("Enter numbers separated by spaces (1 5 100 12)");
function find(...large) {
    return Math.max(...large);
}
var numbersArray = userfindLargeNumber.split(' ').map(Number);
document.write(`The largest number is: ${find(...numbersArray)}`);

function calculateArea(width, height){
    return width*height
}
var width = +prompt("Enter width")
var height = +prompt("Enter height")
var result = calculateArea(width,height)
document.write(`Calculate Area: ${result}`)

var para = function inner(){
    return typeof inner; 
}
alert(para())

var power = function (base, exponent){
    return Math.pow(base, exponent)
}
var base = +prompt("Enter base value")
var exponent = +prompt("Enter exponent value")
var result = power(base, exponent)
document.write(`Power of ${base}^${exponent} is ${result}`)

function reverseNumber(number){
    var reverseNum = number.toString().split('').reverse().join('')
    return parseInt(reverseNum)
}
var number = +prompt("Enter any number")
var reversed = reverseNumber(number)
document.write("Reversed number is: " + reversed)

function randomdice(){
    var random = Math.floor(Math.random()*100)+1
    return random
}
document.write(randomdice())

function upper(str){
    return str
    .split(' ')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ')
}
document.write(upper(prompt('Enter any sentence')))

function long(str){
    return str
    .split(' ')
    .reduce((longest, currentWord) =>
        currentWord.length > longest.length ? currentWord : longest, '' 
    )
}
var showLong = prompt('Enter any sentence')
document.write(`The longest word in this sentence is: ${long(showLong)}`)

function findVowels(str){
    var vowels = "aeiou"
    return str.toLowerCase().split('').filter(char => vowels.includes(char)).length
}
var sentence = prompt('Enter a sentence to find the vowels');
document.write('Number of vowels: ' + findVowels(sentence));

function type(value){
    if(value === null){
        return null
    }
    return typeof value
}
document.write(type(null))

function extract(str){
    return Array.from(new Set(str)).join('')
}
document.write(extract(prompt("Enter any sentence to extract unique charcter")))

function letterOccurrence(str, letter){
    return str.toLowerCase().split(letter).length - 1
}
var userString = prompt('Enter the sentence will count the number of occurrences')
var letterCount = prompt('Enter the letter')
document.write(letterOccurrence(userString, letterCount))

function ageCalculator(birthYear, currentYear){
    var bYear = parseInt(birthYear)
    var cYear = parseInt(currentYear)
    // var bYear = new Date(birthYear).getFullYear() ye bhi a sakte hn optional main lkn in k bager bhi kam chal jae ga
    // var cYear = new Date(currentYear).getFullYear() ye bhi a sakte hn optional main lkn in k bager bhi kam chal jae ga
    var age = cYear - bYear 
    return age
}
var brYear = prompt('Enter your birth year')
var cuYear = prompt('Enter your current year')
document.write("Your age is: " + ageCalculator(brYear, cuYear))

var favSnack = prompt('Enter your favorite snack')
var currentAge = +prompt('Enter your current age')
var estimatedAge = +prompt('Enter your estimated age')
var amountofSnack = +prompt('Enter amount of snacks per day')
function lifetimeSupplyCalculator(){
    var differentAge = estimatedAge - currentAge
    var result = differentAge * 365 * amountofSnack
    return result
}

var totalSnacks = lifetimeSupplyCalculator()
document.write(`You will need ${totalSnacks} ${favSnack} to last you until the ripe old age of ${estimatedAge}`)