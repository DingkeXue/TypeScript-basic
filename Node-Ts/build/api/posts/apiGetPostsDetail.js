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
        let imgURLs = selectedPost.img.map((item) => {
            // 通过 req.app.get('env') 获取 当前运行环境
            if (req.app.get('env') == 'development') { // 开发环境
                return "http://localhost:8088/static/" + item;
            }
            else { // 生产环境
                return "http://cdn.cn/static/" + item;
            }
        });
        res.json(new postDetail_1.PostDetail(selectedPost, selectedTodos, imgURLs));
    }
    else {
        res.status(404).json({ status: "failed", message: "not found post" });
    }
};
