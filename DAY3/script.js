var request = new XMLHttpRequest();
request.open("GEt","https://restcountries.com/v3.1/all")
request.send();
request.onload = function () {
    var res = JSON.parse(request.response);
    console.log(res);
    console.log("hello wald");
    for(var i=0;i<res.length;i++){
        console.log(res[i].name.common)
        console.log(res[i].capital)
    }
}