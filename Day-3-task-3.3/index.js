
function reqListener() {
    const countryArr =JSON.parse(this.responseText)
    for (let country of countryArr)
        console.log("country name: "+country.name.common+"," ,"region: "+country.region+",","sub-region: "+country.subregion+",","country populations: "+country.population)
  } 
  
  const req = new XMLHttpRequest();
  req.addEventListener("load", reqListener);
  req.open("GET", "https://restcountries.com/v3.1/all");
  req.send();
  