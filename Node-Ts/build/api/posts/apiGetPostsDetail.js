"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/*
 该文件主要目的是将 server 文件的回调函数提出来处理
 */
const data_1 = require("../../data/data");
const postDetail_1 = require("../../model/shared/postDetail");
exports.apiGetPostsDetail = (req, res) => {
    let id = req.params.id;
    let selectedPost = data_1.DataStore.posts.find((item) => item.id == id);
    let selectedTodos = data_1.DataStore.todo.filter((item) => item.id != id);
    if (selectedPost) {
        res.json(new postDetail_1.PostDetail(selectedPost, selectedTodos));
    }
    else {
        res.status(404).json({ status: "failed", message: "not found post" });
    }
};
