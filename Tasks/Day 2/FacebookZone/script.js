


    
var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
var request = new XMLHttpRequest()


url_string = 'https://api.domainsdb.info/v1/domains/search?domain=facebook&zone=com'
request.open('GET', url_string, true)
request.send()


request.onload = function(){
   
    data = JSON.parse(request.responseText)
    
    //console.log(typeof data)
for(let i=0;i<data.domains.length;i++){
    console.log(data.domains[i].domain)

}
 

    

};







