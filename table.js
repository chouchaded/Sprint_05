async function fetchRestCountrie() {
  let countries;
  let response;
  try {
    response = await fetch("https://restcountries.com/v3.1/region/europe");
    console.log("response", response);
  } catch (error) {
    console.error("2222! Something error:");
    // Network Error!
    console.error(error);
    return;
  }

  // TODO: gérer le status de la Response
  countries = await response.json();
  console.log("countries zezzz ", countries);

  // try {
  console.log(countries);
  for (let ordre in countries) {
    console.log("ordre", ordre);
    console.log("countries[ordre]", countries[ordre]);
    console.log("countries[ordre].name", countries[ordre].name);
    // console.log("countries[ordre].naaame", countries[ordre].naaame);
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
  // } catch (error) {
  //   console.error("Noooooo! Something error:");
  //   // Network Error!
  //   console.error(error);
  // }
}

fetchRestCountrie();
