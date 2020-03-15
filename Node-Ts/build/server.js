"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/*
 该项目是腾讯课堂上米修在线的Node+Ts实战后端课程
 */
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
// 引入 RequestHandler
const apiGetPosts_1 = require("./api/posts/apiGetPosts");
const apiGetPostsDetail_1 = require("./api/posts/apiGetPostsDetail");
const apiCreatePost_1 = require("./api/posts/apiCreatePost");
const app = express_1.default();
// 使用中间件
app.use(body_parser_1.default.urlencoded({ extended: false }));
app.use(body_parser_1.default.json());
// routes
app.get("/posts", apiGetPosts_1.apiGetPosts);
app.get("/posts/:id", apiGetPostsDetail_1.apiGetPostsDetail);
app.post("/posts", apiCreatePost_1.apiCreatePost);
app.listen(process.env.PORT || 8088, () => {
    console.log("正在监听 8088端口");
});
