let mongoose = require("mongoose");

let path = require('path');

// 新建一个数据模型
// 参数1：数据表
// 参数2：数据格式
var App6 = mongoose.model("App6", {
    username: Number,
    password: String,
});

exports.connect = function(request, response) {
    mongoose.connect("mongodb://localhost/app6", function(e) {
        if (e) response.send(e.message);
        response.send("connect yes!");
    });
}

exports.insert = function(request, response) {
    var app6 = new App6({
        id: 1,
        name: "admin",
    });
    mongoose.connect("mongodb://localhost/app6");
    app6.save(function(e, product, numberAffected) {
        if (e) response.send(e.message);
        var html = "<p>新增的数据为：" + JSON.stringify(product);
        html += "<p>影响的数据量为：" + numberAffected;
        response.send(html);
    });
}

exports.find = function(request, response) {
    mongoose.connect("mongodb://localhost/app6");
    App6.find({
        id: 1
    }, function(e, docs) {
        if (e) response.send(e.message);
        var html = "<p> 查询到的数据为：" + JSON.stringify(docs);
        response.send(html);
    });
}


exports.update = function(request, response) {
    mongoose.connect("mongodb://localhost/app6");
    App6.update({
        id: 1
    }, {
        name: "new admin"
    }, function(e,raw,numberAffected) {
        if (e) response.send(e.message);
        var html = "<p>修改的结果为：" + JSON.stringify(raw);
        html += "<p>影响的数据量为：" + numberAffected;
        response.send(html);
    });
}

exports.remove = function(request, response) {
    mongoose.connect("mongodb://localhost/app6");
    App6.remove({
        id: 1
    }, function(e) {
        if (e) response.send(e.message);
        response.send("删除成功");
    });
}