"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const data_1 = require("../../data/data");
exports.apiPutPost = (req, res) => {
    const postIndex = data_1.DataStore.posts.findIndex((item) => item.id == req.params.id);
    if (postIndex > -1) {
        const oldData = data_1.DataStore.posts[postIndex];
        const body = req.body;
        const updatePost = {
            id: req.params.id || oldData.id,
            name: body.name || oldData.name,
            gender: body.gender || oldData.gender,
            age: body.age || oldData.age,
            img: oldData.img
        };
        data_1.DataStore.posts[postIndex] = updatePost;
        res.status(200).json({ status: "success", message: "update success" });
    }
    else {
        res.status(404).json({ status: "failed", message: "connot find user" });
    }
};
