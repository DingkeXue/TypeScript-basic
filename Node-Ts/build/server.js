"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/*
 该项目是腾讯课堂上米修在线的Node+Ts实战后端课程
 */
const express_1 = __importDefault(require("express"));
// 引入 RequestHandler
const apiGetPosts_1 = require("./api/posts/apiGetPosts");
const app = express_1.default();
// routes
app.get("/posts", apiGetPosts_1.apiGetPosts);
app.get("/posts/:id", apiGetPosts_1.apiGetPostsDetail);
app.listen(process.env.PORT || 8088, () => {
    console.log("正在监听 8088端口");
});
