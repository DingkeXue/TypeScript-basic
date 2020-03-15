"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const data_1 = require("../../data/data");
/* 使用 uuid 插件来自动生成 id */
const uuid_1 = require("uuid");
exports.apiCreatePost = (req, res) => {
    const newPost = {
        id: uuid_1.v4(),
        name: req.body.name,
        gender: req.body.gender,
        age: req.body.age
    };
    data_1.DataStore.posts.push(newPost);
    res.send("ok");
};
