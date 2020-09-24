const { send } = require("process");

express = require("express");
app = express();

hotel = require("./hotel.json");

app.get("/details", function(req, res)
{
    res.send(hotel);
})

app.get("/searchByCity", function(req, res)
{
    keyword = req.query.sCity;
    searchCity = [];
    hotel.forEach(element =>
    {
        if(keyword == element.city)
        {
            searchCity.push(element); 
        }
    });
    res.send(searchCity);
})
app.get("/searchByType", function(req, res)
{
    keyword = req.query.sType;
    searchType = [];
    hotel.forEach(element =>
    {
        if(keyword == element.type)
        {
            searchType.push(element); 
        }
    });
    res.send(searchType);
})

app.get("/searchByCuisine", function(req, res)
{
    keyword = req.query.sCuisine;
    searchCuisine = [];
    hotel.forEach(element =>
    {
        for (const key in element.cuisine)
        {
            if(keyword == element.cuisine[key])
            {
                searchCuisine.push(element);
            }
        }
    });
    res.send(searchCuisine);
})
app.listen(3000, function(req, res)
{
    console.log("Server listening to port 3000");
})