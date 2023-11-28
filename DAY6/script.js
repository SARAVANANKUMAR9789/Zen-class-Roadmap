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
console.log('-------------------------------------------------------------------------')
const asia=getAsiaContinents(post);
const population =getPopulation(post);
console.log(asia);
console.log('-------------------------------------------------------------------------')
console.log(population);
console.log('-------------------------------------------------------------------------')
post.forEach(function(post) {
  console.log(`name: ${post.name.common}______,flag: ${post.flag}______, capital: ${post.capital}`);
  console.log('-------------------------------------------------------------------------')
});
let populationOfCountries=post.reduce(
  (ac,cu)=>ac+cu.population,0);
  console.log(`the total population of countries:${populationOfCountries}`);
  console.log('-------------------------------------------------------------------------')
post.map((country)=>{
 if (country.currencies?.["USD"]) {
  console.log(`the country that uses US dollars as currency:${country.name.common}`);
  console.log('-------------------------------------------------------------------------')
 }
});
});
}

Countries();
