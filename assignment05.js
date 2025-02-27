var userNum = +prompt('Enter any number')
document.write(userNum + '<br>')
document.write(Math.round(userNum) + '<br>')
document.write(Math.floor(userNum) + '<br>')
document.write(Math.ceil(userNum) + '<br>')

var user = prompt('Enter a number')
user = parseFloat(user)
document.write(user + '<br>')
document.write(Math.round(user) + '<br>')
document.write(Math.floor(user) + '<br>')
document.write(Math.ceil(user) + '<br>')

var number = prompt("Enter a number");
number = parseFloat(number);
var absoluteValue = Math.abs(number);
document.write(`The absolute value of ${number} is ${absoluteValue}`);

var dice = Math.floor(Math.random()*6)+1
document.write(dice)

 var num = prompt('enter a number')
 var num2 = parseFloat(num)
 document.write(num2)

 
var heads = prompt('Enter P1 name')
var tails = prompt('Enter P2 name')
var toss = Math.floor(Math.random()*2) + 1
document.write(toss + "<br>")
if(toss === 2){
    document.write(`${heads} win`)
}
else{
    document.write(`${tails} win`)
}

var userInput = +prompt('Enter number from 1 to 10')
var random = Math.floor(Math.random()*10) + 1

if(userInput === random){
    document.write(random + ": Congratulation")
}
else{
    document.write(random + ": Sorry")
}