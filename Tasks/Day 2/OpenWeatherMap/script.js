


    
var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
var request = new XMLHttpRequest()
key = 'b488f57838bc5127d09ad8afc0acf5e1'
lat = 17.3850
long = 78.48678

url_string = 'http://api.openweathermap.org/data/2.5/weather?lat='+lat+'&lon='+long+'&appid='+key;
request.open('GET', url_string, true)
request.send()


request.onload = function(){
   
    data = JSON.parse(request.responseText)
    console.log(data)

    country = data.sys.country
    city = data.name
    temperature = data.main.temp
    console.log(country)
    console.log(city)
    console.log(temperature)
    
 

    

};







