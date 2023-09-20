function logger (text) {
    console.log (text)
}

function fullName (a, b){
    let fn = ""
    fn = a + " " + b 

    return fn
}

logger (fullName('Petra', 'Tormasi'));

function calculateAge (currentYear, birthYear) {
    let age = 0

    age = (currentYear - birthYear)
    return age
    console.log (age)
}

function yourAge (number) {
    console.log (`You are ${number} years old. Hurray!`)
}

yourAge (calculateAge(2023, 1995))

console.log (`You are ${calculateAge(2023, 1995)} year old`)


