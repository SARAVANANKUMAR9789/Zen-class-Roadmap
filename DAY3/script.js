// var request = new XMLHttpRequest();
// request.open("GEt","https://restcountries.com/v3.1/all")
// request.send();
// request.onload = function () {
//     var res = JSON.parse(request.response);
//     console.log(res);
//     console.log("hello wald");
//     for(var i=0;i<res.length;i++){
//         console.log(res[i].name.common)
//         console.log(res[i].capital)
//     }
// }

function getAsiaContinents(countries){
    let results=countries.filter((country)=>{
      return country.continents[0]==="Asia";
    })
    return results;
 }
 
 function getPopulation(countries){
    let results=countries.filter((country)=>{
      return country.population<200000;
    })
    return results;
 }

 function Countries(){
fetch('https://restcountries.com/v3.1/all')
.then(data => {
return data.json();
})
.then(post => {
  console.log(post)
  const asia=getAsiaContinents(post);
  const population =getPopulation(post);
  console.log(asia,population)
});
}

Countries();


