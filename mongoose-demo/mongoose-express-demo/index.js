/**
 * Created by yoyo on 16-8-11.
 */

let path = require('path');
let bodyParser = require('body-parser');
var express = require("express");
var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

var routes=require("./routes/index.js");
app.listen(2014);

// app.get("/connect",routes.connect);
// app.get("/insert", routes.insert);
// app.get("/find", routes.find);
// app.get("/update", routes.update);
// app.get("/remove", routes.remove);
app.get('/',function(req,res){
    res.sendfile(path.resolve('./public/form.html'));
});

app.post('/find',routes.find);