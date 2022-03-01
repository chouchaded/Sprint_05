
 fetch("https://restcountries.com/v3.1/region/europe"
)
    .then(function (res) {
    
        return res.json();
    })
     .then(function (data) {
        console.log(data);
         for (let i = 0; i < data.length; i++) {

             let nameRest = data[i].name.official;
    console.log(nameRest);
            let html=document.getElementById('list');
            let name=document.createElement('li');
         name.textContent = nameRest;
            html.appendChild(name);
                 }
         
    });
