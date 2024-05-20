function reqListener() {
    const countryArr =JSON.parse(this.responseText)
    for (let country of countryArr)
        console.table(country.name.common+"'s flag : ", country.flags.png);
  } 
  
  const req = new XMLHttpRequest();
  req.addEventListener("load", reqListener);
  req.open("GET", "https://restcountries.com/v3.1/all");
  req.send();
  