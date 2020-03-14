"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 *  改文件用于规定 posts 数据的输出类型
  *
  * */
class PostsSummary {
    constructor(data) {
        this.name = data.name;
        this.id = data.id;
    }
}
exports.PostsSummary = PostsSummary;
