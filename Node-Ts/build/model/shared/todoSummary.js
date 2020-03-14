"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 *  改文件用于规定 posts 数据的输出类型
  *
  * */
class TodoSummary {
    constructor(todos) {
        this.todo = todos.todo;
        this.id = todos.id;
    }
}
exports.TodoSummary = TodoSummary;
