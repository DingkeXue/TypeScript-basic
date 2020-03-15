"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const data_1 = require("../../data/data");
const static_1 = require("../../api/general/static");
exports.apiUploadeImg = (req, res) => {
    const postIndex = data_1.DataStore.posts.findIndex((item) => item.id == req.params.id);
    if (postIndex > -1) {
        // 如果该用户存在，则上传对应图片
        const upload = static_1.getFileUploader(req.app.get('env'));
        upload(req, res, err => {
            if (err) {
                console.log(err);
                res.status(500).json({ status: 'error', message: 'upload file failed' });
            }
            else {
                // 上传成功则更新数据
                //console.log(req.file.filename);
                data_1.DataStore.posts[postIndex].img.push(req.file.filename);
                res.status(200).json({ status: "success", message: "update success" });
            }
        });
    }
    else {
        res.status(404).json({ status: "failed", message: "connot find user" });
    }
};
