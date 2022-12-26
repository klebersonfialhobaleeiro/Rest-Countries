const countriesList = document.getElementById("countries");
let countries;

fetch("https://restcountries.com/v3.1/all")
.then(res => res.json())
.then(data => initialize(data))
.catch(err => console.log("Error:", err));

function initialize(countriesData) {
    countries = countriesData;
    let options = "";
    for(let i=0; i<countries.length; i++) {
        options += "<option value="+countries[i].cca3+">"+countries[i].name.common+"</option>"
    }
    
    document.getElementById("datalistOptions").innerHTML = options;

}

countriesList.addEventListener("change", function(event){
    displayCountryInfo(event.target.value);
});

function displayCountryInfo(countryBycca3) {
    const countryData = countries.find(country => country.cca3 === countryBycca3);
    const value = Object.keys(countryData.currencies)
    document.querySelector("#flag-container img").src = countryData.flags.png;
    document.getElementById("name").innerHTML = countryData.name.common;
    document.getElementById("flag").innerHTML = countryData.flag;
    document.getElementById("capital").innerHTML = countryData.capital;
    document.getElementById("continents").innerHTML = countryData.continents;
    document.getElementById("area").innerHTML = countryData.area.toLocaleString("en-US")+" km²";
    document.getElementById("population").innerHTML = countryData.population.toLocaleString("en-US");
    document.getElementById("currencies").innerHTML = countryData.currencies[value[0]].name + "<br>Symbol: " + countryData.currencies[value[0]].symbol;
    document.getElementById("idd").innerHTML = countryData.idd.root + countryData.idd.suffixes;
    document.getElementById("subregion").innerHTML = countryData.subregion;
}

// var yourJson = {
//     "currencies":
//         {
//              "ddk":{
//                 "name":"Danish krone",
//                 "symbol":"kr"
            
//             }
//         }
// }

// const result = Object.keys(yourJson.currencies);
// console.log(yourJson.currencies);
// console.log(yourJson.currencies.ddk);
