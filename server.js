var express = require('express');
var app = express();
var instagram = require('instagram-node').instagram();

app.use(express.static(__dirname + '/public'));

app.set('views engine', 'ejs');

instagram.use({
    client_id: '2cda95b7302c48c6afef7ba739f4d66c',
    client_secret: 'cf58849261c3474b901d6959f37f626f'
});

app.get('./', function(req, res) {
    instagram.media_popular(function(err, medias, remaining, limit){
       res.render('pages/index',  { grams: medias })
    });
});

app.listen(8000, function(err) {
    if(err) {
        console.log("Error")
    } else {
        console.log("Listening on port 8080");
    }
});
