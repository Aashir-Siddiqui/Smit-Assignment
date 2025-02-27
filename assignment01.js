var cars = ["Audi", "Volvo", "Ford", "Lamborghini"]
document.write(`
    <h1>Cars</h1>
    <p>First index of the array: 0</p>
    <p>Car at first index of the array: ${cars[0]}</p>
    <p>Last index of the array: 3</p>
    <p>Car at last index of the array: ${cars[3]}</p>
    `)
document.write(`The Length of cars array: ${cars.length}`)

var movies = ["Avengers: Age of Ultron", "Spectre", "Jurassic World", "Inside Out"]
let mLen = movies.length;
let text = "<ul>";
document.write(`<h1>Top movies of 2015</h1>`)
for (let i = 0; i < mLen; i++) {
    text += "<li>" + movies[i] + "</li>"
}
text += "</ul>";
document.write(text)
document.write(`The length of movies array: ${movies.length} <br>`)

var studentNames = ["Michael", "Tony", "John"];
var studentScores = [320, 480, 230];
var totalMarks = 500;
for (let i = 0; i < studentNames.length; i++) {
    let name = studentNames[i];
    let score = studentScores[i];
    let percentage = (score / totalMarks) * 100;
    document.write(`Score of ${name} is ${score}. Percentage: ${percentage.toFixed(0)}% <br>`);
}

var number = [320, 420, 500, 120, 100].sort()
document.write(number)

var arr = ["This", "is", "my", "cat"].join(" ")
document.write(arr)

var num = [1, 2, 3, 4, 5]
num.copyWithin(2, 0, 3)
document.write(num)

const myArr = [[1, 2], [3, 4], [5, 6]];
const newArr = myArr.flat();
document.write(myArr)

var Arr = [1, 2, 3, 4, 5].flatMap(x => [x, x * 10])
document.write(Arr)