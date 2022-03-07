async function fetchRestCountrie() {
  const response = await fetch("https://restcountries.com/v3.1/region/europe");
  const countries = await response.json();
  return countries;
}
fetchRestCountrie().then((countries) => {
  countries;
  console.log(countries);
  for (let ordre in countries) {
    let nomPays = countries[ordre].name.official;
    let surface = countries[ordre].area;
    let popul = countries[ordre].population;
    let capital = countries[ordre].capital;
    console.log(nomPays, surface, popul, capital);

    let table = document.getElementById("tablo");
    let trLigne = document.createElement("tr");
    let pei = document.createElement("td");
    let surfPei = document.createElement("td");
    let populPei = document.createElement("td");
    let capiPei = document.createElement("td");

    surfPei.className = "text-end";
    populPei.className = "text-end";
    pei.className = "fw-bolder";

    pei.textContent = countries[ordre].name.official;
    surfPei.textContent = surface.toLocaleString("en-En");
    populPei.textContent = popul.toLocaleString("en-En");
    capiPei.textContent = capital;

    table.appendChild(trLigne);
    trLigne.appendChild(pei);
    trLigne.appendChild(surfPei);
    trLigne.appendChild(populPei);
    trLigne.appendChild(capiPei);
  }
});
