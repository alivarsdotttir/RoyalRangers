var express = require('express');
var bodyParser = require('body-parser');
var mongojs = require("mongojs");
//var ObjectID = mongodb.ObjectID;
var URL = require('url');
var router = express.Router();

var uri = "mongodb://alivarsdottir:alexalif1310@ds155132.mlab.com:55132/royalrangersdb";
var db = mongojs(uri, ['Users']);

var app = express();
app.use(bodyParser.json());


/*mongodb.connect(process.env.uri, function(err, database) {
    if (err) {
        console.log(err);
        process.exit(1);
    }*/

console.log("Database connection ready");

app.set('port', process.env.PORT || 8080)

var server = app.listen(app.get('port'), function() {
    var host = server.address().address
    var port = server.address().port

    console.log("App now running on port", port);

});



/*function handleError(res, reason, message, code) {
    console.log("ERROR: " + reason);
    res.status(code || 500).json({
        "error": message
    });
}*/


router.get('/', function(req, res, next) {
    console.log("hellow world");
});



router.route('/users').get(function(req, res) {
    db.users.find(function(err, docs) {
        if (err) {
            res.send(err)
        }
        res.json(docs);
    });
});

/*app.get('/api/users', function(req, res) {
    db.collection("Users").find({}).toArray(function(err, docs) {
        if (err) {
            handleError(res, err.message, "Failed to get contacts.");
        } else {
            res.status(200).json(docs);
        }
    });
});*/
