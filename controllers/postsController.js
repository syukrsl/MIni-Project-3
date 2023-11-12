"use strict";
const sequelize = require("sequelize");
const Models = require("../models");

const getPost = (res) => {
    Models.Posts.findAll({}).then(function (data) {
        res.send({result: 200 , data: data})
    }).catch(err => {
        throw err
    })
}

module.exports = {
    getPost
}