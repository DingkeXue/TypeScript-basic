/* 
 该文件主要目的是将 server 文件的回调函数提出来处理 
 */
import { DataStore } from "../../data/data";
import { RequestHandler } from "express";
import { PostDetail } from "../../model/shared/postDetail"


export const apiGetPostsDetail:RequestHandler = (req, res) => {
	let id = req.params.id;
	let selectedPost = DataStore.posts.find((item:any) => item.id == id);
	let selectedTodos = DataStore.todo.filter((item:any) => item.id != id);
	if(selectedPost) {
		res.json(new PostDetail(selectedPost, selectedTodos));
	} else {
		res.status(404).json({status: "failed", message: "not found post"});
	}
}