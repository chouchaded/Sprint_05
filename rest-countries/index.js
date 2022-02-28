fetch("https://restcountries.com/v3.1/region/europe"
)
    .then(function (res) {
        console.log(res.json())
    })