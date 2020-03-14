"use strict";
/*
 该文件主要目的是将 server 文件的回调函数提出来处理
 */
Object.defineProperty(exports, "__esModule", { value: true });
const data_1 = require("../../data/data");
exports.apiGetPosts = (req, res) => {
    res.json(data_1.DataStore.posts);
};
exports.apiGetPostsDetail = (req, res) => {
    let id = req.params.id;
    data_1.DataStore.posts.forEach((item) => {
        if (item.id == id) {
            res.json(item);
        }
    });
};
