


    
var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
var request = new XMLHttpRequest()
url_string = 'https://restcountries.eu/rest/v2/all'
request.open('GET', url_string, true)
request.send()


request.onload = function(){
   
    data = JSON.parse(request.responseText)
    for(let i=0;i<data.length;i++){
        console.log(data[i].flag)
    }

    

};







