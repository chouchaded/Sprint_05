async function fetchRestCountrie() {
  const response = await fetch("https://restcountries.com/v3.1/region/europe");
  const countries = await response.json();
  return countries;
}
fetchRestCountrie().then(countries => {
    countries; 
    console.log(countries);
    for (let i = 0; i < countries.length; i++) {

             let nameRest = countries[i].name.official;
    console.log(nameRest);
            let html=document.getElementById('list');
            let name=document.createElement('li');
         name.textContent = nameRest;
            html.appendChild(name);
                 }
});




//  fetch("https://restcountries.com/v3.1/region/europe"
// )
//     .then(function (res) {
    
//         return res.json();
//     })
//      .then(function (data) {
//         console.log(data);
//          for (let i = 0; i < data.length; i++) {

//              let nameRest = data[i].name.official;
//     console.log(nameRest);
//             let html=document.getElementById('list');
//             let name=document.createElement('li');
//          name.textContent = nameRest;
//             html.appendChild(name);
//                  }
         
//     });

   