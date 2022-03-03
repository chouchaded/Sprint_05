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
    console.log(nomPays);

    let a = document.getElementById("result");
    let list = document.createElement("li");
    list.textContent = nomPays;
    a.appendChild(list);
  }
});
