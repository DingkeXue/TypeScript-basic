"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const postsSummary_1 = require("./postsSummary");
const todoSummary_1 = require("./todoSummary");
class PostDetail extends postsSummary_1.PostsSummary {
    constructor(postData, todoData, postImage) {
        super(postData);
        this.age = postData.age;
        this.gender = postData.gender;
        this.todos = todoData.map((item) => new todoSummary_1.TodoSummary(item));
        this.img = postImage;
    }
}
exports.PostDetail = PostDetail;
