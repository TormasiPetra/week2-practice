console.log ('loaded');

let rootElement = document.querySelector('#root');

// console.log(rootElement)

//let htmlContent = "<h2>Hello world, I'm here!</h2>";
//rootElement.insertAdjacentHTML('beforeend', htmlContent);

/* let counter = 0;

while (counter < 10){
    rootElement.insertAdjacentHTML('beforeend', htmlContent);
    counter++; //adott szam erteket plusz eggyel noveli
};
 */

/* 
for (let counter = 1; counter <= 10; counter++) {
    rootElement.insertAdjacentHTML('beforeend', htmlContent);
}*/

/* let array = ["alma", "korte", "ananasz", "eper", "kiwi"]

for (let index = 0; index < array.length; index++) {
    rootElement.insertAdjacentHTML('beforeend', `<h2> ${array[index]} </h2>`);
} */

fetch('https://restcountries.com/v3.1/all')
.then(function (response){
    return response.json()
})
.then(function(data) {
    console.log(data) //itt tudunk a kapott adattal dolgozni
                      // a data egy 250 elemből álló array

    for (let index = 0; index < data.length; index++) {
        let countryName = data[index].name.common
        let countrypop = data[index].population 
        let countryarea = data[index].area

        //csak a for cikluson belül lehet ezt a változót elérni 

        rootElement.insertAdjacentHTML("beforeend", `
        <div class="country">
            <h2> ${countryName} </h2>
            <p> population: ${countrypop} </p>
            <p> area: ${countryarea} km2 </p>
        </div>   
        `)
    }
})