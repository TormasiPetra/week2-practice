/* let stringVariable = "Text"
let numberVariable = 15
let booleanVariable = true

function myFunc(param1, param2) {
    return param1 + param2
}

console.log(stringVariable, numberVariable, booleanVariable)
console.log(numberVariable)
 */

let array = ["alma", 12, false, undefined, null]

console.log(array)

//                    0         1        2       3     
let stringarray = ["Petra", "Mihály", "Pali", "Kata"]

console.log(stringarray)
console.log(stringarray[1]) //a tömb első értéke a 0!!

console.log(stringarray[5]) // undefined lesz az eredmény 

let myObj = { 
    key1: "value",
    key2: "value",
    key3: "value",
    key4: 15,
    key5: 600,
    key6: true,
    key7: ["Imola", "Pali", "Ádám"],

}

console.log(myObj)
console.log(myObj.key3)
console.log(myObj.key7[2])

let myFacebook = {
    name: "Petra Tormasi",
    age: 28,
    location: "Kecskemét",
    friends: ["Gipsz Jakab", "Példa Petra", "Csányi Mihály"],
    favoriteMovies: [
        {
            title: "Harry Potter", 
            year: 2001,
            character: [
                "Harry",
                "Ron",
                "Hermione",
                "Hedwig",
            ],
        },{
            title: "Ananász Express",
            year: 2007,
            character: [
                "Csoki",
            ]
        },{
            title: "Pink Póniló",
            year: 2053,
            character: [
                "Jay",
                "Néma Bob",
            ],
        },
        ],
};

console.log(myFacebook.favoriteMovies[0].character[1])

