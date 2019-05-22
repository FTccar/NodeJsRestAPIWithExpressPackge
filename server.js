var http = require('http')
var express = require('express')
var bodyParser = require('body-parser')

var cities = [{name: 'Istanbul', country: 'Turkey'}, {name: 'New York', country: 'USA'}, {name: 'London', country:'England'}];

var app = express();
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());



	
app.get('/api/cities', function(request, response){
   response.send(cities);
});

app.post('/api/cities',function(request,response){
    var city = request.body;
    for(var index =0; index <cities.length; index++)
    {
        if(cities[index].name == city.name){
            response.status(500).send({error:"Bu şehir zaten var!!"});
            return;
        }
    }
    cities.push(city);
    response.send(cities);
})

app.listen(1923,function(){
    console.log("Port dinleniyor: 1923..");
})