var itemsArray = [
    { name: "juice", price: "50", quantity: "3" },
    { name: "cookie", price: "30", quantity: "9" },
    { name: "shirt", price: "880", quantity: "1" },
    { name: "pen", price: "100", quantity: "2" }
];

var item = itemsArray.reduce((acc, num) => {
    return acc + (num.price * num.quantity)
}, 0)

console.log(item)



var person = {
    name: "Aashir",
    age: 17,
    email: "aashirsiddiqui@gmail.com",
    password: 123,
    gender: "Male",
    city: "Karachi",
    country: "Pakistan"
}
var Name1 = 'name' && 'age' && 'email' && 'password' && 'gender' && 'city' && 'country' in person
var Name2 = 'firstName' && 'lastName' in person
console.log(Name1, Name2)



function Person(name, age, city, country) {
    this.name = name,
        this.age = age,
        this.city = city,
        this.country = country
}

var person1 = new Person("Aashir", 17, "Karachi", "Pakistan")

for (var key in person1) {
    document.write(`${key}: ${person1[key]} <br>`)
}



function Persons(name, gender, address, education, profession) {
    this.name = name;
    this.gender = gender;
    this.address = address;
    this.education = education;
    this.profession = profession;
}
document.getElementById('form').addEventListener('submit', function (e) {
    e.preventDefault()

    var name = document.getElementById('name').value
    var gender = document.querySelector('input[name="gender"]:checked').value
    var address = document.getElementById('address').value
    var education = document.getElementById('education').value
    var profession = document.getElementById('profession').value

    var users = new Persons(name, gender, address, education, profession)

    var storedData = localStorage.getItem('user')
    var Data = storedData ? JSON.parse(storedData) : []

    Data.push(users)
    localStorage.setItem('user', JSON.stringify(Data))

    this.reset()
    alert("Form Submit Successfully")
})