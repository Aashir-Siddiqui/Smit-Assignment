var d = new Date()
document.write(d)


var months = ["Jan", "Feb", "March", "April", "May", "Jun", "July", "Aug", "Sep", "Oct", "Nov", "Dec"];
var d = new Date()
var month = months[d.getMonth()]
document.write(month)


var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
var d = new Date()
var day = days[d.getDay()]
alert(`Today is: ${day.slice(0, 3)}`)


var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
var d = new Date()
var day = days[d.getDay()]
if (day === days[0] || day === days[6]) {
    document.write(day + " It's a Fun Day")
}
else (
    document.write(day + " It's not a Fun Day")
)


var d = new Date()
var months = ["Jan", "Feb", "March", "April", "May", "Jun", "July", "Aug", "Sep", "Oct", "Nov", "Dec"];
var month = months[d.getMonth()]
var date = d.getDate()
if (date < 16) {
    document.write(`First fifteen days of the ${month}`)
}
else {
    document.write(`Last days of the ${month}`)
}


var hours = new Date().getHours()
if (hours < 12) {
    document.write("It,s AM")
}
else {
    document.write("It,s PM")
}


var currentDate = new Date()
currentDate.setFullYear(currentDate.getFullYear() - 100)
var date = alert(currentDate.toDateString())


var currentDate = new Date();
var minsSince1970 = currentDate.getTime() / 60000;
var currntDate = new Date()
var millisecSince1970 = currntDate.getTime()
document.write(`Elapsed milliseconds Since January 1, 1970: ${millisecSince1970} <br><br>
    Elapsed minutes Since January 1, 1970: ${minsSince1970}`)


var laterDate = new Date(2020, 11, 31)
document.write(laterDate)


var ramdanStart = new Date(2015, 5, 18)
var now = new Date()
var passedDays = Math.floor((now - ramdanStart) / (1000 * 60 * 60 * 24))
alert(`Days since 1st Ramadan 2015: ${passedDays}`)


var elapsed = new Date(2015, 11, 5)
var currentElapsed = elapsed.getTime() / 1000
document.write(`On reference date Sat Dec 05 2015, ${currentElapsed} second has passed since begining of 2015`)


var date = new Date()
var currentHours = date.getHours()
date.setHours(currentHours + 1)
document.write(date)


var input = prompt('Enter your date, month and year')
var date = new Date().getTime()
var user = new Date(input).getTime()
var minus = date - user
var formula = minus / (1000 * 60 * 60 * 24 * 365)
if (formula <= 10) {
    document.write("Your age is " + Math.floor(formula) + " you are child")
}
else if (formula <= 18) {
    document.write("Your age is " + Math.floor(formula) + " you are young")
}
else {
    document.write("Your age is " + Math.floor(formula))
}


var user = prompt("Enter Your Name")
var units = prompt("Enter Your Total Units")
var customerName = (user);
var currentMonth = new Date().toLocaleString('default', { month: 'long', year: 'numeric' });
var unitsConsumed = (units);
var chargesPerUnit = 16.75;
var lateSurchargeRate = 0.10;

var netAmount = unitsConsumed * chargesPerUnit;
var lateSurcharge = netAmount * lateSurchargeRate;
var grossAmount = netAmount + lateSurcharge;

function formatCurrency(value) {
    return 'Rs ' + value.toFixed(2);
}

document.write(`
        <h2>K-Electric Bill</h2>
        <p><strong>Customer Name:</strong> ${customerName}</p>
        <p><strong>Current Month:</strong> ${currentMonth}</p>
        <p><strong>Number of Units:</strong> ${unitsConsumed}</p>
        <p><strong>Charges per Unit:</strong> ${formatCurrency(chargesPerUnit)}</p>
        <hr>
        <p><strong>Net Amount Payable (Within Due Date):</strong> ${formatCurrency(netAmount)}</p>
        <p><strong>Late Payment Surcharge:</strong> ${formatCurrency(lateSurcharge)}</p>
        <p><strong>Gross Amount Payable (After Due Date):</strong> ${formatCurrency(grossAmount)}</p>
    `)