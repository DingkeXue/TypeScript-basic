"use strict";
/*
 该文件主要目的是将 server 文件的回调函数提出来处理
 */
Object.defineProperty(exports, "__esModule", { value: true });
const data_1 = require("../../data/data");
const postsSummary_1 = require("../../model/shared/postsSummary");
exports.apiGetPosts = (req, res) => {
    // 使用 PostsSummary 类确保输出的数据是符合要求的
    res.json(data_1.DataStore.posts.map((item) => new postsSummary_1.PostsSummary(item)));
};
